import { FC, Suspense } from "react";

import RequireAuth from "@/components/RequireAuth";

const DefaultSuspense: FC = ({ children }) => (
  <Suspense fallback={null}>{children}</Suspense>
);

export const LazyLoad: FC = ({ children }) => (
  <DefaultSuspense>{children}</DefaultSuspense>
);

export const LazyLoadWithAuth: FC = ({ children }) => {
  return (
    <RequireAuth>
      <DefaultSuspense>{children}</DefaultSuspense>
    </RequireAuth>
  );
};
