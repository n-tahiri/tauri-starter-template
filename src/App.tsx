import HeaderContent from "./components/1_HeaderContent";
import "./App.css";
import { ThemeProvider } from "./theme/theme-provider";
import BodyContent from "./components/2_BodyContent";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col h-screen">
        <HeaderContent />
        <BodyContent />

        {/* <FooterContent /> */}
      </main>
    </ThemeProvider>
  );
}
