import { lazy, Suspense } from "react";

const Authenticate = lazy(() => import("./Authenticate"));

const LazyHome = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Authenticate></Authenticate>
  </Suspense>
);

export default LazyHome;
