import cx from "classnames";
import { ComponentProps, FC } from "react";

export type CheckboxProps = Omit<ComponentProps<"input">, "type">;

export const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => (
  <input
    className={cx(
      "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600",
      className
    )}
    type="checkbox"
    {...props}
  />
);
