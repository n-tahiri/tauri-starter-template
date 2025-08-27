import React from "react";
import ReactDOM from "react-dom/client";
import { getCurrentWindow } from "@tauri-apps/api/window";

/* SET WINDOW VISIBLE WHEN READY */
document.addEventListener("DOMContentLoaded", async () => {
  // console.log("DOMContentLoaded fired");
  await getCurrentWindow().show();
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
