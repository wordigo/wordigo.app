import { MainNav } from "@/components/Layout/Dashboard/Header/MainNav";
import RouterSearch from "@/components/Layout/Dashboard/RouterSearch";

export function Navbar() {
  return (
    <main className="flex items-center justify-between w-full mb-6">
      <RouterSearch />
      <MainNav />
    </main>
  );
}
