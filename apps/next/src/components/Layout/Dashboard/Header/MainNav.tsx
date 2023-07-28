import ChangeLanguage from "../../MainLayout/ChangeLanguage";
import ThemeMode from "../../ThemeMode";

export function MainNav() {
  return (
    <header className="flex gap-2">
      <ThemeMode />
      <ChangeLanguage />
    </header>
  );
}
