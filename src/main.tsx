import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { getCurrentWindow } from "@tauri-apps/api/window";

/* SET WINDOW VISIBLE WHEN READY */
document.addEventListener("DOMContentLoaded", async () => {
  // console.log("DOMContentLoaded fired");
  await getCurrentWindow().show();
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider placement="bottom-right" />
      <App />
    </HeroUIProvider>
  </React.StrictMode>
);
