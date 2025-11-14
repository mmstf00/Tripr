import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Sparkles, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const UserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (!user) {
    return (
      <Button
        onClick={() => navigate("/login")}
        variant="outline"
        className="transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Login
      </Button>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary hover:ring-offset-2 focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Avatar className="h-10 w-10 ring-2 ring-background">
            <AvatarImage src={user.picture} alt={user.name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-background rounded-full"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 p-2"
        align="end"
        forceMount
        sideOffset={8}
      >
        <DropdownMenuLabel className="font-normal p-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.picture} alt={user.name} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-0.5 flex-1 min-w-0">
              <p className="text-sm font-semibold leading-none truncate">
                {user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer transition-colors focus:bg-accent">
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10 transition-colors"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
