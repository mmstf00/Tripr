import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/data/card";
import { Button } from "@/components/ui/interactive/button";
import { useAuth } from "@/hooks/useAuth";
import { authService, DEFAULT_SESSION_TIMEOUT } from "@/services/auth";
import { mobileAuthService } from "@/services/mobileAuth";
import { useGoogleLogin } from "@react-oauth/google";
import { Plane } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);
  const [clientIdError, setClientIdError] = useState(false);

  // Check if running on native platform and validate Google Client ID
  useEffect(() => {
    setIsNativePlatform(mobileAuthService.isNativePlatform());

    if (!GOOGLE_CLIENT_ID && !mobileAuthService.isNativePlatform()) {
      console.error(
        "Google Client ID not configured. Please check VITE_GOOGLE_CLIENT_ID in environment variables."
      );
      setClientIdError(true);
      toast.error("Configuration error: Google Client ID not found");
    }
  }, []);

  // Handle native mobile Google Sign-In
  const handleNativeGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await mobileAuthService.signInWithGoogle();

      if (!result) {
        throw new Error("Failed to sign in with Google");
      }

      // Send token to backend for validation and session creation
      const user = await authService.loginWithBackend(result.accessToken);

      if (!user) {
        throw new Error("Failed to create backend session");
      }

      // Save session preferences
      authService.saveSessionPreferences({
        sessionTimeout: DEFAULT_SESSION_TIMEOUT,
      });

      // Save user and token locally
      login(user, result.accessToken);

      toast.success("Successfully logged in!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.error("Native login error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to login. Please try again.";

      if (errorMessage.includes("No credentials available")) {
        toast.error(
          "No Google account found. Please add one in device settings.",
          {
            duration: 5000,
          }
        );
      } else {
        toast.error(errorMessage);
      }
      setIsLoading(false);
    }
  };

  // Handle web-based Google Sign-In
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      try {
        // Send token to backend for validation and session creation
        const user = await authService.loginWithBackend(
          tokenResponse.access_token
        );

        if (!user) {
          throw new Error("Failed to login");
        }

        // Get token expiration from token response (if available)
        // Google OAuth tokens typically expire in 1 hour (3600 seconds)
        const expiresIn = tokenResponse.expires_in || 3600;

        // Save session preferences
        authService.saveSessionPreferences({
          sessionTimeout: DEFAULT_SESSION_TIMEOUT,
        });

        // Save user and token locally (for Google API calls if needed)
        // Backend handles session via httpOnly cookies
        login(user, tokenResponse.access_token, expiresIn);

        toast.success("Successfully logged in!");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } catch (error) {
        console.error("Login error:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to login. Please try again.";
        toast.error(errorMessage);
        setIsLoading(false);
      }
    },
    onError: () => {
      toast.error("Login failed. Please try again.");
      setIsLoading(false);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl animate-fade-in">
        <CardHeader className="space-y-3 text-center pb-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Tripr
          </CardTitle>
          <CardDescription className="text-base">
            Sign in with your Google account to start planning your next
            adventure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            onClick={() =>
              isNativePlatform
                ? handleNativeGoogleSignIn()
                : handleGoogleLogin()
            }
            disabled={isLoading || clientIdError}
            className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 dark:border-gray-600"
            size="lg"
            variant="outline"
          >
            {isLoading ? (
              <>
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                Signing in...
              </>
            ) : (
              <>
                <svg
                  className="mr-3 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-800 px-2 text-muted-foreground">
                Secure Authentication
              </span>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            By continuing, you agree to Tripr's{" "}
            <a
              href="#"
              className="underline hover:text-primary transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </p>
          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            Don't have an account?{" "}
            <a
              href="/register"
              className="underline hover:text-primary transition-colors font-semibold"
            >
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
