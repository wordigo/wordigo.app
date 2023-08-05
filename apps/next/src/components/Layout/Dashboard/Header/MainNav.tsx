import ThemeMode from "../../ThemeMode";
import ChangeLanguage from "../../MainLayout/ChangeLanguage";

export function MainNav() {
  return (
    <header className="flex gap-2">
      <ThemeMode />
      <ChangeLanguage />
    </header>
  );
}
