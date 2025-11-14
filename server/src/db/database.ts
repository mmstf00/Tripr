import { Session, User } from "../types/auth.js";

// In-memory database (can be replaced with a real database)
class Database {
  private users: Map<string, User> = new Map();
  private sessions: Map<string, Session> = new Map();

  // User operations
  async createUser(userData: Omit<User, "createdAt" | "updatedAt">): Promise<User> {
    const user: User = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const user = this.users.get(id);
    if (!user) return null;

    const updated: User = {
      ...user,
      ...updates,
      updatedAt: new Date(),
    };
    this.users.set(id, updated);
    return updated;
  }

  // Session operations
  async createSession(sessionId: string, userId: string, expiresAt: Date): Promise<Session> {
    const session: Session = {
      sessionId,
      userId,
      expiresAt,
      createdAt: new Date(),
    };
    this.sessions.set(sessionId, session);
    return session;
  }

  async getSession(sessionId: string): Promise<Session | null> {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      this.sessions.delete(sessionId);
      return null;
    }

    return session;
  }

  async deleteSession(sessionId: string): Promise<boolean> {
    return this.sessions.delete(sessionId);
  }

  async deleteExpiredSessions(): Promise<number> {
    const now = new Date();
    let deleted = 0;
    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.expiresAt < now) {
        this.sessions.delete(sessionId);
        deleted++;
      }
    }
    return deleted;
  }

  // Cleanup expired sessions periodically
  startCleanupInterval(intervalMs: number = 60 * 60 * 1000) {
    setInterval(() => {
      this.deleteExpiredSessions();
    }, intervalMs);
  }
}

export const db = new Database();

