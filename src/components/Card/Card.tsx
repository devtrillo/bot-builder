import cx from "classnames";
import type { FC } from "react";
export type CardProps = {
  className?: string;
  horizontal?: boolean;
  imgSrc?: string;
};
export const Card: FC<CardProps> = ({
  children,
  className,
  horizontal,
  imgSrc,
}) => {
  return (
    <div
      className={cx(
        "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden",
        {
          "flex-col": !horizontal,
          "flex-col md:max-w-xl md:flex-row": horizontal,
        },
        className
      )}
    >
      {imgSrc ? (
        <img
          alt=""
          className={cx({
            "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-green-100":
              horizontal,
            "rounded-t-lg": !horizontal,
          })}
          loading="eager"
          src={imgSrc}
        />
      ) : null}
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        {children}
      </div>
    </div>
  );
};
