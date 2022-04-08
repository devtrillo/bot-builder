import { lazy } from "react";
import { Link } from "react-router-dom";

import logo from "@/favicon.svg";
import withSuspense from "@/hocs/withSuspense";
import useToggle from "@/hooks/useToggle";

import CommonLinks from "./CommonLinks";

const UserMenu = withSuspense(
  lazy(() => import("./UserMenu")),
  <></>
);

const Navbar = () => {
  const [openMenu, switchOpen] = useToggle(false);
  return (
    <nav className="rounded-b border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link className="flex items-center" to="/">
          <img
            alt="BotBuilder Logo"
            className="dark:invert object-contain w-8"
            src={logo}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Bot Builder
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <UserMenu />
          <button
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            data-collapse-toggle="mobile-menu-2"
            type="button"
            onClick={switchOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fillRule="evenodd"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <CommonLinks open={openMenu} />
      </div>
    </nav>
  );
};
export default Navbar;
