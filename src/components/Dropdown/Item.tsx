import { WithChildren } from "@/utils/withChildren";

export type DropdownItemProps = WithChildren<{
  onClick?: () => void;
}>;

export const DropdownItem = ({ children, onClick }: DropdownItemProps) => (
  <li
    className="block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
    onClick={onClick}
  >
    {children}
  </li>
);
DropdownItem.displayName = "DropdownItem";
