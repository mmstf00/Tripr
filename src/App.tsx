import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import CitySelect from "./pages/CitySelect";
import CountrySelect from "./pages/CountrySelect";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import RouteResults from "./pages/RouteResults";
import Swipe from "./pages/Swipe";

const queryClient = new QueryClient();

// Get Google OAuth Client ID from environment variables
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

const App = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route
                path="/country-select"
                element={
                  <ProtectedRoute>
                    <CountrySelect />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/city-select/:countryId"
                element={
                  <ProtectedRoute>
                    <CitySelect />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/swipe/:countryId"
                element={
                  <ProtectedRoute>
                    <Swipe />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/route-results"
                element={
                  <ProtectedRoute>
                    <RouteResults />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
