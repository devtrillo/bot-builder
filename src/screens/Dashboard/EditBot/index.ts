import { lazy } from "react";

import withAuth from "@/hocs/withAuth";
import withSuspense from "@/hocs/withSuspense";

export default withAuth(withSuspense(lazy(() => import("./EditBot"))));
