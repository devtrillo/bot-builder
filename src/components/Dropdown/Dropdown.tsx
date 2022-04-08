import cx from "classnames";
import {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactNode,
  useMemo,
} from "react";
import {
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
} from "react-icons/hi";

import { Button, ButtonProps } from "../Button";
import { Tooltip, TooltipProps } from "../Tooltip";

export type DropdownProps = ButtonProps &
  Omit<TooltipProps, "content" | "style" | "animation"> & {
    className?: string;
    label: ReactNode;
    inline?: boolean;
  };

const icons: Record<string, FC<ComponentProps<"svg">>> = {
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
  right: HiOutlineChevronRight,
  top: HiOutlineChevronUp,
};

export const Dropdown: FC<DropdownProps> = (props) => {
  const { children, className, label, inline, ...restProps } = props;
  const {
    placement = inline ? "bottom-start" : "bottom",
    arrow = false,
    trigger = "click",
    ...buttonProps
  } = restProps;

  const Icon = useMemo(() => {
    const [p] = placement.split("-");

    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);
  const content = useMemo(
    () => <ul className="py-1">{children}</ul>,
    [children]
  );

  const TriggerWrapper = ({ children }: PropsWithChildren<any>) =>
    inline ? (
      <button className="flex items-center">{children}</button>
    ) : (
      <Button {...buttonProps}>{children}</Button>
    );

  return (
    <Tooltip
      animation="duration-100"
      arrow={arrow}
      className={cx("w-44 !rounded !p-0", className)}
      content={content}
      placement={placement}
      style="auto"
      trigger={trigger}
    >
      <TriggerWrapper>
        {label}
        <Icon className="ml-2 h-4 w-4" />
      </TriggerWrapper>
    </Tooltip>
  );
};

Dropdown.displayName = "Dropdown";
