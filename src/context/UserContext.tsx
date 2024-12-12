"use client";
import { COOKIE_AUTH } from "@/types/constants";
import API from "@/utils/api";
import { getCookie } from "@/utils/cookie";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
};

interface UserContextProps {
  user: User | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.user.getUserProfile();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
