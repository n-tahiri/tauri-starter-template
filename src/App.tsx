import HeaderContent from "./components/1_HeaderContent";
import "./App.css";
import { ThemeProvider } from "./theme/theme-provider";
import BodyContent from "./components/2_BodyContent";
import FooterContent from "./components/5_FooterContent";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col h-screen justify-between">
        <div>
          <HeaderContent />
          <BodyContent />
        </div>
        <div>
          <FooterContent />
        </div>
      </main>
    </ThemeProvider>
  );
}
