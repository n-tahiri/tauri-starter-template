import { heroui } from "@heroui/react";
export default heroui({
  themes: {
    /* Custom Dark Theme, it is already implemented in App.css */
    dark: {
      extend: "dark",
      colors: {
        background: "#191818",
        // background: "#19181aff",
        // foreground: "#ffffff",
      },
    },
  },
});
