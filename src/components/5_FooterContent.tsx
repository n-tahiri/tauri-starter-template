import AppVersion from "./footer/AppVersion";

export default function FooterContent() {
  return (
    <div>
      <section className="py-1 px-2 flex items-center gap-2 justify-start">
        <div className="">
          <AppVersion />
        </div>
      </section>
    </div>
  );
}
