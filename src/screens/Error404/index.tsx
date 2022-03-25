import { lazy } from "react";

import { LazyLoad } from "@/components/LazyLoad";

const Error404 = lazy(() => import("./Error404"));

const LazyError404 = () => {
  return (
    <LazyLoad>
      <Error404 />
    </LazyLoad>
  );
};

export default LazyError404;
