import { Button } from "@/components/Button";
import useLocalStorage from "@/hooks/useLocalStorage";
import useTheme from "@/hooks/useTheme";

const useBotDirection = () => useLocalStorage<"">();

function Settings() {
  const [theme, switchTheme] = useTheme();
  return (
    <div>
      <h1>Settings</h1>
      <section>
        <h2>Appearance</h2>
        <Button color="light" onClick={switchTheme}>
          {theme}
        </Button>
        <h2>Bots direction</h2>
      </section>
    </div>
  );
}

export default Settings;
