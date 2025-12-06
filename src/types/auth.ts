export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  createdAt?: string | Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

