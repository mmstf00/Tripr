import { authService } from "./auth";

export interface ApiError {
  message: string;
  status: number;
  data?: unknown;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = "") {
    // Use environment variable or default to relative path (for nginx proxy)
    // In Docker, nginx proxies /api to backend, so use relative path
    this.baseURL = baseURL || import.meta.env.VITE_API_URL || "";
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
        // Include credentials to send cookies (httpOnly cookies)
        credentials: "include",
      });

      // Handle authentication errors
      if (response.status === 401 || response.status === 403) {
        console.log("Unauthorized response, clearing auth");

        // Call backend logout to clear server-side session first
        try {
          await fetch(`${this.baseURL}/api/auth/logout`, {
            method: "POST",
            credentials: "include",
          });
        } catch (e) {
          // Ignore logout errors
        }

        // Clear local auth state
        await authService.clearAuth();

        // Redirect to login if we're not already there
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }

        const error: ApiError = {
          message: "Authentication failed. Please log in again.",
          status: response.status,
        };
        throw error;
      }

      // Handle other errors
      if (!response.ok) {
        // Don't log out on 404 errors - these are usually resource not found, not auth issues
        if (response.status === 404) {
          let errorData: unknown;
          try {
            errorData = await response.json();
          } catch {
            errorData = await response.text();
          }

          const error: ApiError = {
            message: `Resource not found: ${response.statusText}`,
            status: response.status,
            data: errorData,
          };
          throw error;
        }

        let errorData: unknown;
        try {
          errorData = await response.json();
        } catch {
          errorData = await response.text();
        }

        const error: ApiError = {
          message: `Request failed: ${response.statusText}`,
          status: response.status,
          data: errorData,
        };
        throw error;
      }

      // Handle empty responses
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      // Re-throw ApiError as-is
      if (error && typeof error === "object" && "status" in error) {
        throw error;
      }

      // Wrap other errors
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : "Unknown error occurred",
        status: 0,
      };
      throw apiError;
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();

// Export the class for custom instances
export { ApiClient };

