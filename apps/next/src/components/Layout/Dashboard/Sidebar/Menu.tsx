import DashboardNav from "./Navigation";

export default function BurgerMenu() {
  return (
    <div className="col-span-1 flex mt-[68px] z-10 flex-col justify-between top-[68px] !h-20 md:!h-full py-4 md:py-8 text-light_text dark:text-white dark:bg-DarkBackground bg-LightBackground border-t md:border-t-0 g-red-500 md:min-w-[250px] md:max-w-[250px] max-[1022px]:hidden">
      <DashboardNav />
    </div>
  );
}
