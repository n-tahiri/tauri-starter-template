import { AppTitle } from "./header/AppTitle";
import { ToggleDarkMode } from "../theme/ToggleDarkMode";
import { MenuBar } from "./header/MenuBar";

export default function HeaderContent() {
  return (
    <div>
      <div className="flex justify-between ">
        <MenuBar />
        <ToggleDarkMode />
      </div>
      <AppTitle />
    </div>
  );
}
