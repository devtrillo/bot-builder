import { useReducedMotion, Variants } from "framer-motion";

export const useVariants = (defaultVariants: Variants) => {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return undefined;
  return defaultVariants;
};
