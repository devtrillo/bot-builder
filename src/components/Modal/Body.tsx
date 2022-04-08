import cx from "classnames";
import { FC } from "react";

import { useModalContext } from "@/components/Modal/Context";

export type ModalBodyProps = {
  className?: string;
};

export const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
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
