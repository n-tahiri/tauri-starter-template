import { useAppStore } from "@/stores/appStore";

export default function AppVersion() {
  const { version } = useAppStore();

  return (
    <div>
      <p className="text-sm font-semibold italic">v{version}</p>
    </div>
  );
}
