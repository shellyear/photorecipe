"use client";
import { config } from "@/middleware";
import API from "@/utils/api";
import { usePathname } from "next/navigation";
import { User } from "@/types/user";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface UserContextProps {
  user: User | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (config.matcher.includes(pathname)) {
      const fetchData = async () => {
        const data = await API.user.getUserProfile();
        setUser(data);
      };
      fetchData();
    }
  }, [pathname]);

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
