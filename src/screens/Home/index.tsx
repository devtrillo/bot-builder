import { lazy } from "react";

import { LazyLoad } from "@/components/LazyLoad";

const Home = lazy(() => import("./Home"));

const LazyHome = () => (
  <LazyLoad>
    <Home />
  </LazyLoad>
);

export default LazyHome;
