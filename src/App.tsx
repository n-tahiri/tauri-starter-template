import HeaderContent from "./components/1_HeaderContent";
import "./App.css";
import { DockDemo } from "./demos/DockDemo";
import NextButton from "./demos/NextButton";

export default function App() {
  return (
    <main className="flex flex-col gap-4">
      <HeaderContent />
      <NextButton />
      {/* <DockDemo /> */}
    </main>
  );
}
