import cx from "classnames";

import { useModalContext } from "@/components/Modal/Context";
import { WithChildren } from "@/utils/withChildren";

export type ModalBodyProps = WithChildren<{
  className?: string;
}>;

export const ModalBody = ({ children, className }: ModalBodyProps) => {
  const { popup } = useModalContext();

  return (
    <div
      className={cx(
        "p-6",
        {
          "pt-0": popup,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
