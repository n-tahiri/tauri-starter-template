import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@heroui/react";

export function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onPress={toggleTheme}
      aria-label="Toggle theme"
      variant="light"
      isIconOnly
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
