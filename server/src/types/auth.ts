export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  sessionId: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface GoogleTokenInfo {
  sub: string;
  email: string;
  name: string;
  picture?: string;
  aud: string;
  exp?: number;
  iat?: number;
}

