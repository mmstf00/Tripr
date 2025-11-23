import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";
import { PrismaClient } from '../../node_modules/prisma/client';
import { Session, User } from "../types/auth";

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

class Database {

  // User operations
  async createUser(userData: Omit<User, "createdAt" | "updatedAt">): Promise<User> {
    return prisma.user.create({ data: userData });
  }

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    return prisma.user.update({ where: { id }, data: updates });
  }

  // Session operations
  async createSession(sessionId: string, userId: string, expiresAt: Date): Promise<Session> {
    return prisma.session.create({
      data: {
        sessionId,
        userId,
        expiresAt,
      },
    });
  }

  async getSession(sessionId: string): Promise<Session | null> {
    const session = await prisma.session.findUnique({ where: { sessionId } });

    if (!session) return null;

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      await this.deleteSession(sessionId);
      return null;
    }

    return session;
  }

  async deleteSession(sessionId: string): Promise<boolean> {
    await prisma.session.delete({ where: { sessionId } });
    return true;
  }

  async deleteExpiredSessions(): Promise<number> {
    const result = await prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
    return result.count;
  }

  // Cleanup expired sessions periodically
  startCleanupInterval(intervalMs: number = 60 * 60 * 1000) {
    setInterval(() => {
      this.deleteExpiredSessions();
    }, intervalMs);
  }
}

export const db = new Database();

