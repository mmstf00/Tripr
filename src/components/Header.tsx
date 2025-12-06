import { useAuth } from "@/hooks/useAuth";
import { MapPin, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { Button } from "./ui/interactive/button";

export const Header = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 hover:bg-transparent"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tripr
            </span>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated && user && (
            <>
              <div className="hidden sm:flex items-center space-x-3 px-4 py-2 rounded-lg bg-muted/50">
                <span className="text-sm text-muted-foreground">
                  Welcome back,
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {user.name.split(" ")[0]}
                </span>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate("/saved-trips")}
                className="hidden sm:flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Saved Trips</span>
              </Button>
            </>
          )}
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
