import { MainNav } from "@/components/Layout/Dashboard/Header/MainNav";
import RouterSearch from "@/components/Layout/Dashboard/RouterSearch";
import { CreateDictionary } from "@/components/Modals/CreateDictionaries";
import { CreateWord } from "@/components/Modals/CreateWord";
import { Share } from "@/components/Modals/ShareApplication";

export function Navbar({ Button }: { Button: string }) {
  return (
    <main className="flex items-center justify-between w-full mb-6">
      <RouterSearch />
      <header className="flex gap-2">
        {Button === "dictionaries" ? (
          <div>
            <CreateDictionary label="Add Dictionaries" />
          </div>
        ) : Button === "word" ? (
          <section className="flex items-center">
            <CreateWord />
            <span className="mx-2">
              <Share />
            </span>
          </section>
        ) : (
          ""
        )}
      </header>
    </main>
  );
}
