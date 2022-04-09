import { signOut as signOutFirebase } from "firebase/auth";
import { motion } from "framer-motion";
import { MouseEvent, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";
import useToggle from "@/hooks/useToggle";
import { auth } from "@/utils/firebase";
const encodeEmail = (str?: string | null): string =>
  window.btoa(encodeURIComponent(str ?? "my super email"));

const UserMenu = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [openUser, switchOpenUser] = useToggle();
  const loggedIn = !!user?.uid;
  const goToLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (openUser) {
      document.addEventListener("click", switchOpenUser);
    }
    return () => {
      document.removeEventListener("click", switchOpenUser);
    };
  }, [openUser, switchOpenUser]);

  const signOut = () => signOutFirebase(auth);
  const openMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    switchOpenUser();
  };

  if (loading) return <span style={{ height: 40 }} />;

  if (!loggedIn)
    return (
      <Button color="blue" type="button" onClick={goToLogin}>
        Get started
      </Button>
    );

  return (
    <>
      <button
        aria-expanded="false"
        className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
        data-dropdown-toggle="dropdown"
        tabIndex={0}
        type="button"
        onClick={openMenu}
      >
        <span className="sr-only">Open user menu</span>
        <img
          alt="Profile avatar"
          className="rounded-full h-10 w-10"
          src={
            user?.photoURL ??
            `https://avatars.dicebear.com/api/adventurer-neutral/${encodeEmail(
              user?.email
            )}.svg`
          }
        />
      </button>
      <motion.div
        animate={{ height: openUser ? "auto" : 0, opacity: openUser ? 1 : 0 }}
        className="absolute right-10 z-50 m-0 my-4 list-none divide-y divide-gray-100 overflow-hidden rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
        data-popper-escaped=""
        data-popper-placement="top"
        data-popper-reference-hidden=""
        initial={false}
        style={{ top: "34px" }}
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {user?.displayName}
          </span>
          <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul aria-labelledby="dropdown" className="py-1">
          {[
            ["Dashboard", "/dashboard"],
            ["Profile", "/profile"],
          ].map(([text, href]) => (
            <li key={href}>
              <Link
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                tabIndex={openUser ? 1 : -1}
                to={href}
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
              onClick={signOut}
            >
              Sign out
            </button>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default UserMenu;
