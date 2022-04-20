import { createPopper, Instance, Placement } from "@popperjs/core";
import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";

import { WithChildren } from "@/utils/withChildren";

export type TooltipProps = WithChildren<{
  className?: string;
  content: ReactNode;
  placement?: Placement;
  trigger?: "hover" | "click";
  style?: "dark" | "light" | "auto";
  animation?: false | `duration-${number}`;
  arrow?: boolean;
}>;

export const Tooltip = ({
  children,
  className,
  content,
  placement = "top",
  trigger = "hover",
  style = "dark",
  animation = "duration-300",
  arrow = true,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const popperInstance = useRef<Instance>();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (wrapperRef.current && tooltipRef.current) {
      popperInstance.current = createPopper(
        wrapperRef.current,
        tooltipRef.current,
        {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
            { enabled: true, name: "eventListeners" },
          ],
          placement,
        }
      );
    }
    return () => {
      if (popperInstance.current) {
        popperInstance.current.destroy();
      }
    };
  }, [placement]);
  const show = () => {
    setVisible(true);
    popperInstance.current?.update();
  };
  const hide = () => setTimeout(() => setVisible(false), 100);
  return (
    <>
      <div
        ref={tooltipRef}
        className={classNames(
          "tooltip absolute z-10 inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
          animation !== false && `transition-opacity ${animation}`,
          {
            "bg-gray-900 text-white dark:bg-gray-700": style === "dark",
            "border border-gray-200 bg-white text-gray-900": style === "light",
            "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white":
              style === "auto",
            "invisible opacity-0": !visible,
          },
          className
        )}
        role="tooltip"
      >
        {content}
        {arrow && <div data-popper-arrow className="tooltip-arrow" />}
      </div>
      <span
        ref={wrapperRef}
        className="w-fit"
        onBlur={hide}
        onFocus={show}
        {...(trigger === "hover"
          ? { onMouseEnter: show, onMouseLeave: hide }
          : { onClick: show })}
      >
        {children}
      </span>
    </>
  );
};
