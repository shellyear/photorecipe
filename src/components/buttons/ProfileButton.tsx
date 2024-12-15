"use client";

import { useUser } from "@/context/UserContext";
import API from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../Modal";

export default function ProfileButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = typeof window !== "undefined" ? width < 640 : false;

  const handleLogOut = async () => {
    try {
      await API.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await API.user.deleteUserAccount();
      router.push("/");
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-2 sm:px-4 py-1 sm:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          isMobile ? "w-10 h-10 justify-center" : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-medium text-xs sm:text-sm">
            {user &&
              (user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="profile picture"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                user.email.charAt(0).toUpperCase()
              ))}
          </span>
        </span>
        {!isMobile && (
          <>
            <span className="max-w-[100px] sm:max-w-[150px] truncate hidden sm:inline">
              {user && user.email}
            </span>
            <svg
              className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div className="py-1" role="none">
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() =>
                (
                  document.getElementById(
                    "manage-account-modal"
                  ) as HTMLFormElement
                )?.showModal()
              }
            >
              Manage account
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Settings
            </div>
          </div>
          <div className="py-1" role="none" onClick={() => handleLogOut()}>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sign out
            </div>
          </div>
          <Modal
            id="manage-account-modal"
            body={
              <div className="flex flex-col gap-4">
                <div className="text-base font-bold">Manage Account</div>
                <div className="p-4 border border-gray-200 rounded-md">
                  <div className="text-sm font-bold">Delete my account</div>
                  <p className="text-sm text-gray-500">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <button
                    className="btn btn-error mt-4 text-white"
                    onClick={() => handleDeleteAccount()}
                  >
                    Delete account
                  </button>
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
}
