import { login, register, signOut, verifyEmail } from "./auth";
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
};

export default API;
