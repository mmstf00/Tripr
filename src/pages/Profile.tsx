import { Header } from "@/components/Header";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/data/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/data/card";
import { Input } from "@/components/ui/form/input";
import { Label } from "@/components/ui/form/label";
import { Button } from "@/components/ui/interactive/button";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/services/api";
import { authService } from "@/services/auth";
import { User } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  Calendar,
  Camera,
  Loader2,
  Mail,
  Save,
  User as UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Refetch user data if createdAt is missing (for users with cached data)
  useEffect(() => {
    const refetchUserIfNeeded = async () => {
      if (user && !user.createdAt) {
        try {
          const freshUser = await authService.getCurrentUser();
          if (freshUser && freshUser.createdAt) {
            updateUser(freshUser);
          }
        } catch (error) {
          console.error("Failed to refetch user data:", error);
        }
      }
    };

    refetchUserIfNeeded();
  }, [user, updateUser]);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setHasChanges(name !== user.name);
    }
  }, [name, user]);

  const updateProfileMutation = useMutation({
    mutationFn: async (updatedName: string) => {
      const response = await apiClient.put<{ user: User }>(
        "/api/auth/profile",
        { name: updatedName }
      );
      return response.user;
    },
    onSuccess: (updatedUser) => {
      // Update the user in the auth context
      updateUser(updatedUser);

      setIsEditing(false);
      setHasChanges(false);
      toast.success("Profile updated successfully");
    },
    onError: (error: unknown) => {
      const apiError = error as { status?: number; message?: string };
      toast.error(
        apiError.message || "Failed to update profile. Please try again."
      );
    },
  });

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    if (name === user?.name) {
      setIsEditing(false);
      return;
    }

    updateProfileMutation.mutate(name.trim());
  };

  const handleCancel = () => {
    if (user) {
      setName(user.name);
    }
    setIsEditing(false);
    setHasChanges(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground text-lg font-medium">
              Loading profile...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <UserIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Profile
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Manage your account information and preferences.
          </p>
        </div>

        {/* Profile Card */}
        <Card className="border-2 bg-card/50 backdrop-blur-sm shadow-xl">
          <CardHeader className="space-y-6 pb-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl animate-pulse" />
                <Avatar className="relative h-32 w-32 border-4 border-background shadow-lg">
                  <AvatarImage
                    src={user.picture || undefined}
                    alt={user.name}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 border-4 border-background rounded-full shadow-lg" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                {isEditing ? (
                  <div className="space-y-4 w-full">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-lg"
                        placeholder="Enter your name"
                        disabled={updateProfileMutation.isPending}
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSave}
                        disabled={
                          updateProfileMutation.isPending || !hasChanges
                        }
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      >
                        {updateProfileMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        disabled={updateProfileMutation.isPending}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <CardTitle className="text-3xl mb-2">{user.name}</CardTitle>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                      className="mt-4"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-6 border-t">
            <CardDescription className="text-base mb-6">
              Account Information
            </CardDescription>

            {/* Email Field */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-base font-medium">{user.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Email is managed by your Google account and cannot be changed
                  here.
                </p>
              </div>
            </div>

            {/* Account Created Date */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Member Since
              </Label>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-base font-medium">
                  {user.createdAt
                    ? format(new Date(user.createdAt), "MMMM d, yyyy")
                    : "N/A"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Account creation date
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
