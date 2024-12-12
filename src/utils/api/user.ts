import Config from "../config";

export async function getUserProfile() {
  const response = await fetch(`${Config.BACKEND_BASE_URL}/api/user/profile`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const data = await response.json();
  return data;
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
