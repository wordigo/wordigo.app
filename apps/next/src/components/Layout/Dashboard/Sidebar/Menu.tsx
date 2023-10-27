import DashboardNav from "./Navigation";

export default function BurgerMenu() {
  return (
    <div className="col-span-1 flex flex-col justify-between md:top-50 top-50 !h-20 md:!h-full sticky top-[60px] py-4 md:py-8 z-40 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground border-t md:border-t-0 g-red-500 md:min-w-[250px] md:max-w-[250px] max-[1022px]:hidden">
      <aside className="flex w-full md:flex-col">
        <DashboardNav />
      </aside>
    </div>
  );
}
