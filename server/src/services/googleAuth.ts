import { GoogleTokenInfo } from "../types/auth.js";

const GOOGLE_TOKENINFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo";

interface GoogleTokenInfoResponse {
  sub?: string;
  email?: string;
  name?: string;
  picture?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  error?: string;
  error_description?: string;
}

interface GoogleUserInfoResponse {
  sub?: string;
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
  error?: string;
  error_description?: string;
}

export async function validateGoogleToken(
  accessToken: string,
  expectedClientId?: string
): Promise<GoogleTokenInfo | null> {
  try {
    const response = await fetch(
      `${GOOGLE_TOKENINFO_URL}?access_token=${accessToken}`
    );

    if (!response.ok) {
      return null;
    }

    const tokenInfo = (await response.json()) as GoogleTokenInfoResponse;

    // Check if token is valid
    if (tokenInfo.error || !tokenInfo.sub || !tokenInfo.email) {
      return null;
    }

    // Verify client ID if provided
    if (expectedClientId && tokenInfo.aud !== expectedClientId) {
      return null;
    }

    return {
      sub: tokenInfo.sub,
      email: tokenInfo.email,
      name: tokenInfo.name || "",
      picture: tokenInfo.picture,
      aud: tokenInfo.aud || "",
      exp: tokenInfo.exp,
      iat: tokenInfo.iat,
    };
  } catch (error) {
    console.error("Error validating Google token:", error);
    return null;
  }
}

export async function fetchGoogleUserInfo(
  accessToken: string
): Promise<GoogleTokenInfo | null> {
  try {
    const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const userInfo = (await response.json()) as GoogleUserInfoResponse;

    // Check if response contains error or missing required fields
    if (userInfo.error || !userInfo.email || (!userInfo.sub && !userInfo.id)) {
      return null;
    }

    return {
      sub: userInfo.sub || userInfo.id || "",
      email: userInfo.email,
      name: userInfo.name || "",
      picture: userInfo.picture,
      aud: "", // Not provided by userinfo endpoint
    };
  } catch (error) {
    console.error("Error fetching Google user info:", error);
    return null;
  }
}

