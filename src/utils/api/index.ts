import {
  login,
  register,
  signOut,
  validateCodeAndGetAuthToken,
  verifyEmail,
} from "./auth";
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
    validateCodeAndGetAuthToken,
  },
  recipe: {
    getRecipe,
  },
};

export default API;
