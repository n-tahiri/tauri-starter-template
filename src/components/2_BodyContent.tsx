import { DockDemo } from "@/demos/DockDemo";
import NextButton from "@/demos/NextButton";
import { Globe } from "./magicui/globe";

export default function BodyContent() {
  return (
    <div>
      <div className="flex gap-10 items-center">
        <p className="text-xl font-bold ml-4">HeroUi Buttons:</p>
        <NextButton />
      </div>

      <div className="mt-6">
        <DockDemo />
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-130">
          <Globe />
        </div>
      </div>
    </div>
  );
}
