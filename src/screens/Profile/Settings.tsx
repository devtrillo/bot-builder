import { Button } from "@/components/Button";
import useTheme from "@/hooks/useTheme";

function Settings() {
  const [theme, switchTheme] = useTheme();
  const onClick = () => {
    switchTheme();
  };
  return (
    <div>
      <h1>Settings</h1>
      <section>
        <h2>Appearance</h2>
        <Button color="light" onClick={onClick}>
          {theme}
        </Button>
        <h2>Bots direction</h2>
      </section>
    </div>
  );
}

export default Settings;
