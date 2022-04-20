import { WithChildren } from "@/utils/withChildren";

import { DropdownDivider } from "./Divider";

export const DropdownHeader = ({ children }: WithChildren<{}>) => (
  <>
    <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
      {children}
    </div>
    <DropdownDivider />
  </>
);

DropdownHeader.displayName = "DropdownHeader";
