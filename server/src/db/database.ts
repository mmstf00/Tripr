import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient } from '@prisma/client';
import "dotenv/config";
import { Session, User } from "../types/auth.js";

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

  // Trip operations
  async createTrip(userId: string, tripData: {
    name: string;
    country: string;
    countryId: string;
    items: Prisma.InputJsonValue;
    routeMetrics?: Prisma.InputJsonValue;
  }) {
    if (!prisma.trip) {
      throw new Error("Prisma trip model not available. Run 'npx prisma generate'");
    }
    return prisma.trip.create({
      data: {
        userId,
        name: tripData.name,
        country: tripData.country,
        countryId: tripData.countryId,
        items: tripData.items,
        routeMetrics: tripData.routeMetrics ?? Prisma.JsonNull,
      },
    });
  }

  async getTripsByUserId(userId: string) {
    try {
      // Check if trip model exists (in case Prisma client wasn't regenerated)
      if (!prisma.trip) {
        console.error("Prisma trip model not available. Run 'npx prisma generate'");
        return [];
      }
      return prisma.trip.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.error("Error fetching trips:", error);
      return [];
    }
  }

  async getTripById(tripId: string, userId: string) {
    if (!prisma.trip) {
      console.error("Prisma trip model not available. Run 'npx prisma generate'");
      return null;
    }
    return prisma.trip.findFirst({
      where: {
        id: tripId,
        userId,
      },
    });
  }

  async deleteTrip(tripId: string, userId: string) {
    if (!prisma.trip) {
      throw new Error("Prisma trip model not available. Run 'npx prisma generate'");
    }
    return prisma.trip.deleteMany({
      where: {
        id: tripId,
        userId,
      },
    });
  }
}

export const db = new Database();

