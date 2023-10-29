import HomeHeader from "@/components/Layout/MainLayout/Header";

export function Navbar() {
  return (
    <main className="w-full max-w-[1400px] m-auto h-16 sticky top-0 z-50 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground bg-red-300">
      <HomeHeader />
    </main>
  );
}
