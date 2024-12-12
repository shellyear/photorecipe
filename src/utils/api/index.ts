import { getUserProfile, signOut } from "./user";

const API = {
  user: {
    getUserProfile,
  },
  auth: {
    signOut,
  },
};

export default API;
