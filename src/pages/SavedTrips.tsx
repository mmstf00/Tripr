import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/data/card";
import { Button } from "@/components/ui/interactive/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/overlay/alert-dialog";
import { useAuth } from "@/hooks/useAuth";
import { Trip, tripsService } from "@/services/trips";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  Loader2,
  MapPin,
  Navigation,
  Plane,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SavedTrips = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { logout } = useAuth();
  const [tripToDelete, setTripToDelete] = useState<Trip | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const {
    data: trips,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trips"],
    queryFn: async () => {
      try {
        const result = await tripsService.getTrips();
        // Ensure we always return an array
        return Array.isArray(result) ? result : [];
      } catch (error) {
        // Handle authentication errors (401/403) - session expired or access denied
        if (error && typeof error === "object" && "status" in error) {
          const apiError = error as { status: number; message?: string };
          if (apiError.status === 401 || apiError.status === 403) {
            // Show user-friendly message
            toast.error(
              apiError.status === 401
                ? "Your session has expired. Please log in again."
                : "Access denied. Please log in again.",
              {
                duration: 5000,
              }
            );

            // Log out to clear frontend auth state and sync with backend
            await logout();

            // Return empty array - ProtectedRoute will redirect to login
            return [];
          }
        }

        // For other errors, return empty array to show empty state
        // This provides a better UX than showing an error message
        return [];
      }
    },
    retry: false, // Don't retry to avoid unnecessary requests
    refetchOnWindowFocus: false, // Don't refetch on window focus to avoid errors
  });

  const deleteMutation = useMutation({
    mutationFn: (tripId: string) => tripsService.deleteTrip(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      toast.success("Trip deleted successfully");
      setIsDeleteDialogOpen(false);
      setTripToDelete(null);
    },
    onError: () => {
      toast.error("Failed to delete trip");
    },
  });

  const handleDeleteClick = (trip: Trip, e: React.MouseEvent) => {
    e.stopPropagation();
    setTripToDelete(trip);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (tripToDelete) {
      deleteMutation.mutate(tripToDelete.id);
    }
  };

  const handleViewTrip = (trip: Trip) => {
    navigate("/route-results", {
      state: {
        country: {
          id: trip.countryId,
          name: trip.country,
        },
        likedItems: trip.items,
        savedTrip: trip,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto"></div>
              <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              Loading your trips...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Handle empty state - trips is guaranteed to be an array from queryFn
  if (!trips || trips.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md px-4">
            <div className="mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse"></div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <MapPin className="w-12 h-12 text-primary animate-bounce" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              No saved trips yet
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Start planning your next adventure and save your favorite routes!
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/country-select")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Plan a Trip
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Saved Trips
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Your saved travel itineraries and routes. Click on any trip to view
            details and continue planning.
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <Card
              key={trip.id}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              onClick={() => handleViewTrip(trip)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl mb-3 font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {trip.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-base text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{trip.country}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 transition-all"
                    onClick={(e) => handleDeleteClick(trip, e)}
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending &&
                    tripToDelete?.id === trip.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Trip Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                    <div className="p-1.5 rounded-md bg-primary/10">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-muted-foreground">
                        Places
                      </span>
                      <span className="text-sm font-semibold">
                        {trip.items.length}
                      </span>
                    </div>
                  </div>

                  {trip.routeMetrics ? (
                    <>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                        <div className="p-1.5 rounded-md bg-secondary/10">
                          <Clock className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs text-muted-foreground">
                            Duration
                          </span>
                          <span className="text-sm font-semibold">
                            {trip.routeMetrics.days} days
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors col-span-2">
                        <div className="p-1.5 rounded-md bg-accent/10">
                          <DollarSign className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs text-muted-foreground">
                            Estimated Cost
                          </span>
                          <span className="text-sm font-semibold">
                            ${trip.routeMetrics.cost}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors col-span-2">
                      <div className="p-1.5 rounded-md bg-muted-foreground/10">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-muted-foreground">
                          Created
                        </span>
                        <span className="text-sm font-semibold">
                          {format(new Date(trip.createdAt), "MMM d, yyyy")}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Date Badge */}
                {trip.routeMetrics && (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Saved {format(new Date(trip.createdAt), "MMM d, yyyy")}
                    </span>
                  </div>
                )}

                {/* View Trip Button */}
                <Button
                  variant="outline"
                  className="w-full mt-4 group/btn border-primary/20 hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewTrip(trip);
                  }}
                >
                  <span>View Trip</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="sm:max-w-[500px] border-2 border-destructive/20 bg-gradient-to-br from-background via-background to-destructive/5">
          <AlertDialogHeader className="space-y-4">
            {/* Icon and Title Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-full bg-destructive/20 blur-2xl animate-pulse" />
                <div className="relative p-4 rounded-full bg-gradient-to-br from-destructive/20 via-destructive/10 to-destructive/5 border-2 border-destructive/30">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <AlertDialogTitle className="text-2xl font-bold bg-gradient-to-r from-destructive via-destructive/80 to-destructive/60 bg-clip-text text-transparent">
                  Delete Trip?
                </AlertDialogTitle>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-primary/20">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {tripToDelete?.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Trip Name Highlight */}
            <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Trip Name</p>
              <p className="text-lg font-bold text-foreground">
                {tripToDelete?.name}
              </p>
            </div>

            {/* Description */}
            <AlertDialogDescription className="text-center text-base leading-relaxed px-2">
              This action{" "}
              <span className="font-semibold text-destructive">
                cannot be undone
              </span>
              . All saved route information, including your itinerary and
              planning details, will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex-col sm:flex-row gap-3 sm:gap-2 pt-4">
            <AlertDialogCancel
              onClick={() => {
                setIsDeleteDialogOpen(false);
                setTripToDelete(null);
              }}
              disabled={deleteMutation.isPending}
              className="w-full sm:w-auto order-2 sm:order-1 border-2 hover:bg-muted/50 transition-all"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleteMutation.isPending}
              className="w-full sm:w-auto order-1 sm:order-2 bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 text-destructive-foreground shadow-lg shadow-destructive/25 hover:shadow-xl hover:shadow-destructive/30 transition-all duration-300 border-0"
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Trip
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SavedTrips;
