import HeaderContent from "./components/1_HeaderContent";
import "./App.css";
import { DockDemo } from "./demos/DockDemo";
import NextButton from "./demos/NextButton";
import { ThemeProvider } from "./theme/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col gap-4">
        <HeaderContent />
        <NextButton />
        {/* <DockDemo /> */}
      </main>
    </ThemeProvider>
  );
}
