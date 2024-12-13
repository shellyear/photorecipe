import Config from "../config";

export async function getUserProfile() {
  try {
    const response = await fetch(
      `${Config.BACKEND_BASE_URL}/api/user/profile`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
