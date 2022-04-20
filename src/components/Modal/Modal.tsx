import cx from "classnames";

import { WithChildren } from "@/utils/withChildren";

import { ModalContext } from "./Context";

type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";
type Placement =
  | `${"top" | "bottom"}-${"left" | "center" | "right"}`
  | `center${"" | "-left" | "-right"}`;

export type ModalProps = {
  show?: boolean;
  popup?: boolean;
  size?: Size;
  placement?: Placement;
  onClose?: () => void;
};

const sizeClasses: Record<Size, string> = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  lg: "max-w-lg",
  md: "max-w-md",
  sm: "max-w-sm",
  xl: "max-w-xl",
};

const placementClasses: Record<Placement, string> = {
  "bottom-center": "items-end justify-center",
  "bottom-left": "items-end justify-start",
  "bottom-right": "items-end justify-end",
  center: "items-center justify-center",
  "center-left": "items-center justify-start",
  "center-right": "items-center justify-end",
  "top-center": "items-start justify-center",
  "top-left": "items-start justify-start",
  "top-right": "items-start justify-end",
};

export const Modal = ({
  children,
  show,
  popup,
  size = "2xl",
  placement = "center",
  onClose,
}: WithChildren<ModalProps>) => (
  <ModalContext.Provider value={{ onClose, popup }}>
    <div
      aria-hidden={!show}
      className={cx(
        "h-modal fixed top-0 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
        placementClasses[placement],
        {
          "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80": show,
          hidden: !show,
        }
      )}
    >
      <div
        className={cx(
          "relative h-full w-full p-4 md:h-auto",
          sizeClasses[size]
        )}
      >
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  </ModalContext.Provider>
);

Modal.displayName = "Modal";
