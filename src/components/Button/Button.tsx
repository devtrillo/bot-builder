import cx from "classnames";
import { ComponentProps, FC } from "react";

type Color =
  | "blue"
  | "alternative"
  | "dark"
  | "light"
  | "green"
  | "red"
  | "yellow"
  | "purple";
type GradientMonochrome =
  | "blue"
  | "green"
  | "cyan"
  | "teal"
  | "lime"
  | "red"
  | "pink"
  | "purple";
type GradientDuoTone =
  | "purpleToBlue"
  | "cyanToBlue"
  | "greenToBlue"
  | "purpleToPink"
  | "pinkToOrange"
  | "tealToLime"
  | "redToYellow";
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type PositionInGroup = "start" | "middle" | "end";

export type ButtonProps = ComponentProps<"button"> & {
  pill?: boolean;
  outline?: boolean;
  label?: string;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<"svg">>;
  gradientMonochrome?: GradientMonochrome;
  gradientDuoTone?: GradientDuoTone;
  positionInGroup?: PositionInGroup;
  loading?: boolean;
};

const colorClasses: Record<Color, string> = {
  alternative:
    "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800",
  blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600",
  dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
  green:
    "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600",
  light:
    "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800 dark:disabled:hover:bg-gray-600",
  purple:
    "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600",
  red: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600",
  yellow:
    "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400",
};

const gradientMonochromeClasses: Record<GradientMonochrome, string> = {
  blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ",
  cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
  green:
    "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
  lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
  pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
  purple:
    "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
  red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
  teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
};

const gradientDuoToneClasses: Record<GradientDuoTone, string> = {
  cyanToBlue:
    "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
  greenToBlue:
    "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
  pinkToOrange:
    "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
  purpleToBlue:
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
  purpleToPink:
    "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
  redToYellow:
    "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
  tealToLime:
    "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
};

const sizeClasses: Record<Size, string> = {
  lg: "text-base px-5 py-2.5",
  md: "text-sm px-4 py-2",
  sm: "text-sm px-3 py-1.5",
  xl: "text-base px-6 py-3",
  xs: "text-xs px-2 py-1",
};

const iconSizeClasses: Record<Size, string> = {
  lg: "!p-2.5",
  md: "!px-2",
  sm: "!px-1.5",
  xl: "!p-3",
  xs: "!px-1",
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  pill,
  outline,
  disabled = false,
  size = "md",
  icon: Icon,
  color = "blue",
  gradientMonochrome,
  gradientDuoTone,
  positionInGroup,
  loading,
  ...props
}) => {
  return (
    <button
      className={cx(
        "group flex h-min w-fit items-center justify-center p-0.5 px-2 text-center font-medium focus:z-10",
        pill ? "rounded-full" : "rounded-lg",
        !gradientMonochrome && !gradientDuoTone && colorClasses[color],
        !gradientDuoTone &&
          gradientMonochrome &&
          gradientMonochromeClasses[gradientMonochrome],
        gradientDuoTone && gradientDuoToneClasses[gradientDuoTone],
        {
          "!rounded-none border-l-0 pl-0": positionInGroup === "middle",
          "border border-gray-900 dark:border-white":
            color === "alternative" && outline,
          "cursor-not-allowed opacity-50": disabled,
          "focus:!ring-2": !!positionInGroup,
          "rounded-l-none border-l-0 pl-0": positionInGroup === "end",
          "rounded-r-none": positionInGroup === "start",
        },
        className
      )}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? (
        <svg
          className="inline h-4 w-4 animate-spin self-center justify-self-center text-white"
          fill="none"
          role="status"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      <span
        className={cx(
          "flex items-center",
          sizeClasses[size],
          outline && pill ? "rounded-full" : "rounded-md",
          {
            "!rounded-none": positionInGroup === "middle",
            "bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white":
              outline,
            "rounded-l-none": positionInGroup === "end",
            "rounded-r-none": positionInGroup === "start",
            [iconSizeClasses[size]]: !!Icon,
          }
        )}
      >
        {Icon ? <Icon className="h-5 w-5" /> : children}
      </span>
    </button>
  );
};
