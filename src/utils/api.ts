import Config from "./config";

async function getUserProfile() {
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

const API = {
  user: {
    getUserProfile,
  },
};

export default API;
