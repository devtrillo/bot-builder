import cx from "classnames";
import { lazy } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import withAuth from "@/hocs/withAuth";
import withSuspense from "@/hocs/withSuspense";
const AccountSection = withAuth(withSuspense(lazy(() => import("./Account"))));
const BillingSection = withAuth(withSuspense(lazy(() => import("./Billing"))));
const SettingsSection = withAuth(
  withSuspense(lazy(() => import("./Settings")))
);

export default function Profile() {
  const { pathname } = useLocation();
  console.log(pathname);
  const sections = [
    ["Account", ""],
    ["Settings", "/settings"],
    ["Billing", "/billing"],
  ];
  return (
    <div className="bg-gray-200 dark:bg-gray-800 flex max-w-screen-lg items-stretch justify-around w-screen mx-auto mt-10 rounded-2xl">
      <div className="pr-5 pl-2 border-r-2 border-gray-500 flex flex-col gap-3 py-4 justify-start py-10">
        {sections.map(([name, path]) => (
          <Link
            key={name}
            className={cx(
              "hover:text-gray-500 hover:bg-gray-700 text-black dark:text-white rounded-2xl px-4 py-2 mx-2 transition-colors",
              { "bg-gray-300 dark:bg-gray-700": pathname === `/profile${path}` }
            )}
            to={`/profile${path}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex-1 p-10">
        <Routes>
          <Route element={<AccountSection />} path="/" />
          <Route element={<SettingsSection />} path="settings" />
          <Route element={<BillingSection />} path="billing" />
        </Routes>
      </div>
    </div>
  );
}
