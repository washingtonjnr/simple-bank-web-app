import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DashLayout() {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 md:p-8">
      <Header />

      <main className="flex flex-col md:flex-row flex-1 gap-2 md:gap-4 max-h-full">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
