import { Button } from "@/components/Button";
import useLocalStorage from "@/hooks/useLocalStorage";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <h2>Theme: {theme}</h2>
      <Button onClick={toggleTheme}>Switch Theme</Button>
    </>
  );
};
