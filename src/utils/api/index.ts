import { login, register, signOut, verifyEmail } from "./auth";
import { getRecipe } from "./recipe";
import { deleteUserAccount, getUserProfile } from "./user";

const API = {
  user: {
    getUserProfile,
    deleteUserAccount,
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
