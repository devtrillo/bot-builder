import { motion, Transition } from "framer-motion";
import {
  ComponentType,
  ReactElement,
  Suspense,
  useEffect,
  useState,
} from "react";

import { useVariants } from "@/hooks/useVariants";

const DefaultLoadingComponent = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const loadingContainerVariants = useVariants({
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  });

  const loadingCircleVariants = useVariants({
    end: {
      y: "-150%",
    },
    start: {
      y: "0%",
    },
  });
  const loadingCircleTransition: Transition = {
    duration: 0.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  };

  if (!show) return null;
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <motion.svg
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="max-w-sm"
        initial={{ opacity: 0 }}
        version="1.1"
        viewBox="0 0 40 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="glasses-cut-out">
            <path
              d="M 4 8 Q 3 3 6 2 Q 11 1 15.5 2 Q 20 4 15 9 Q 6 18 4 8 
                 M 36 8 Q 37 3 34 2 Q 29 1 24.5 2 Q 20 4 25 9 Q 34 18 36 8"
            />
          </clipPath>
        </defs>
        <path
          d="M 4 8 Q 3 3 6 2 Q 11 1 15.5 2 Q 20 4 15 9 Q 6 18 4 8 
                 M 36 8 Q 37 3 34 2 Q 29 1 24.5 2 Q 20 4 25 9 Q 34 18 36 8"
          fill="#111"
          stroke="#111"
          strokeWidth="1.5"
        />
        <path d="M 14 1.5 H 25 V 1.5 H 14" stroke="#111" strokeWidth="0.7" />
        <path
          d="M 18 5 C 18 2.5 22 2.5 22 5"
          fill="none"
          stroke="#111"
          strokeWidth="0.7"
        />
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="#222"
          height="100%"
          width="100%"
          x="0"
          y="0"
        />
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="14"
          x="0"
        >
          <animate
            attributeName="y"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="14"
          x="20"
        >
          <animate
            attributeName="y"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="16"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-.2s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="16"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-.2s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="orange"
          height="1.2"
          rx=".2"
          width="16"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-.4s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="orange"
          height="1.2"
          rx=".2"
          width="15"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-.4s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="12"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-.6s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="12"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-.6s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="14"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-.8s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="14"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-.8s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="13"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-1s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="13"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-1s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="4"
          x="13.5"
        >
          <animate
            attributeName="y"
            begin="-1s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="4"
          x="33.5"
        >
          <animate
            attributeName="y"
            begin="-1s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="15"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-1.2s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="blue"
          height="1.2"
          rx=".2"
          width="15"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-1.2s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="orange"
          height="1.2"
          rx=".2"
          width="13"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-1.4s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="orange"
          height="1.2"
          rx=".2"
          width="13"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-1.4s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="13.5"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-1.6s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="green"
          height="1.2"
          rx=".2"
          width="13.5"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-1.6s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="16"
          x="0"
        >
          <animate
            attributeName="y"
            begin="-1.8s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <rect
          clipPath="url(#glasses-cut-out)"
          fill="purple"
          height="1.2"
          rx=".2"
          width="16"
          x="20"
        >
          <animate
            attributeName="y"
            begin="-1.8s"
            dur="2s"
            from="16"
            repeatCount="indefinite"
            to="-4"
          />
        </rect>
        <path
          clipPath="url(#glasses-cut-out)"
          d="M 13 0 L 9 15 H 6 L 10 0 M 9 0 L 5 15 H 4 L 8 0"
          fill="rgba(255,255,255,0.4)"
        />
      </motion.svg>

      <motion.div
        animate="end"
        className="flex gap-1 items-end text-black dark:text-white text-2xl"
        initial="start"
        variants={loadingContainerVariants}
      >
        Loading
        <motion.span
          className="bg-black dark:bg-white block rounded-full h-2 w-2"
          transition={loadingCircleTransition}
          variants={loadingCircleVariants}
        />
        <motion.span
          className="bg-black dark:bg-white block rounded-full h-2 w-2"
          transition={loadingCircleTransition}
          variants={loadingCircleVariants}
        />
        <motion.span
          className="bg-black dark:bg-white block rounded-full h-2 w-2"
          transition={loadingCircleTransition}
          variants={loadingCircleVariants}
        />
      </motion.div>
    </div>
  );
};

const withSuspense = <T extends {}>(
  WrappedComponent: ComponentType<T>,
  LoadingModule?: ReactElement
) => {
  function LazyComponent(props: T) {
    return (
      <Suspense fallback={LoadingModule ?? <DefaultLoadingComponent />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  }
  return LazyComponent;
};

export default withSuspense;
