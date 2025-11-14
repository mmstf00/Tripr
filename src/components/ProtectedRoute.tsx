import { useAuth } from "@/hooks/useAuth";
import { Plane } from "lucide-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="h-16 w-16 rounded-full bg-blue-400/20"></div>
          </div>
          <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <Plane className="h-8 w-8 text-white animate-bounce" />
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-muted-foreground animate-pulse">
          Loading your adventure...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
