import cx from "classnames";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { useIsMd } from "@/hooks/useMediaQuery";
type Props = {
  open: boolean;
};

const CommonLinks = ({ open }: Props) => {
  const { pathname } = useLocation();
  const isMd = useIsMd();
  return (
    <motion.div
      animate={{
        height: open || isMd ? "auto" : 0,
        opacity: open || isMd ? 1 : 0,
      }}
      className={cx(
        "w-full items-center justify-between md:order-1 md:flex md:w-auto"
      )}
      initial={false}
      transition={
        isMd ? { duration: 0 } : { damping: 10, stiffness: 100, type: "spring" }
      }
    >
      <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Services", "/services"],
          ["Contact", "/contact"],
        ].map(([text, href]) => (
          <li key={href}>
            <Link
              className={cx(
                "block rounded py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700",
                { "bg-blue-700": href === pathname }
              )}
              to={href}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CommonLinks;
