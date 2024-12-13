import { login, register, signOut, verifyEmail } from "./auth";
import { getRecipe } from "./recipe";
import { getUserProfile } from "./user";

const API = {
  user: {
    getUserProfile,
  },
  auth: {
    login,
    register,
    signOut,
    verifyEmail,
  },
  recipe: {
    getRecipe,
  },
};

export default API;
