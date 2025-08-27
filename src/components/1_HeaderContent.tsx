import { AppTitle } from "./header/AppTitle";
import { ToggleDarkMode } from "../theme/ToggleDarkMode";

export default function HeaderContent() {
  return (
    <div className="flex justify-between">
      <div className="ml-4">
        <AppTitle />
      </div>
      <div className="mt-2">
        <ToggleDarkMode />
      </div>
    </div>
  );
}
