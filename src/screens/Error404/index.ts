import { lazy } from "react";

import withSuspense from "@/hocs/withSuspense";

export default withSuspense(lazy(() => import("./Error404")));
