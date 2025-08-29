import { Divider } from "@heroui/divider";
import AppVersion from "./footer/AppVersion";

export default function FooterContent() {
  return (
    <div>
      <Divider />
      <section className="py-1 px-2 flex items-center gap-2 justify-between bg-neutral-100">
        <div></div>
        <div className="">
          <AppVersion />
        </div>
      </section>
    </div>
  );
}
