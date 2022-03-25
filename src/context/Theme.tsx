import { createContext, FC } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

type ThemeContextValues = {};

const ThemeContext = createContext<ThemeContextValues>({});

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
