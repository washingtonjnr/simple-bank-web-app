import { Logo } from "../Logo";
import { Menu } from "../Menu";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white py-2 pr-4 rounded-2xl shadow-sm">
      <Logo className="h-6" />

      <Menu />
    </header>
  );
}
