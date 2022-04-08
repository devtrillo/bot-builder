import { useEffect } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

const getTheme = () =>
  localStorage.theme === '"dark"' ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light";

type UseTheme = [string, () => void];
export default function useTheme(): UseTheme {
  const [theme, setTheme] = useLocalStorage("theme", getTheme());

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return [theme, switchTheme];
}
