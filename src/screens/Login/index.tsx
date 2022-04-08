import { lazy } from "react";

import withNoAuth from "@/hocs/withNoAuth";
import withSuspense from "@/hocs/withSuspense";

export default withNoAuth(withSuspense(lazy(() => import("./Login"))));
