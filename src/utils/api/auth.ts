import Config from "../config";

export async function verifyEmail(verificationToken: string) {
  try {
    const response = await fetch(
      `${Config.BACKEND_BASE_URL}/api/auth/verify-email?token=${verificationToken}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function login(email: string, password: string) {
  try {
    const res = await fetch(`${Config.BACKEND_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials:
        "include" /* ensures the browser stores this cookie for future requests */,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to sign in the user");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Re-throwing the error so it can be handled by the caller
  }
}

export async function register(email: string, password: string) {
  try {
    const res = await fetch(`${Config.BACKEND_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error; // Re-throwing the error so it can be handled by the caller
  }
}

export async function signOut() {
  try {
    const res = await fetch(`${Config.BACKEND_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to logout user");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during sign-out:", error);
    throw error; // Re-throwing the error so it can be handled by the caller
  }
}
