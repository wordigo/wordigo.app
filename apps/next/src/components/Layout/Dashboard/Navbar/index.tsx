import Breadcrumb from "@/components/Layout/Dashboard/Breadcrumb";
import { CreateDictionary } from "@/components/Modals/CreateDictionaries";
import { CreateWord } from "@/components/Modals/CreateWord";
import { Share } from "@/components/Modals/ShareApplication";

export function Navbar({ Button }: { Button: string }) {
  return (
    <main className="flex items-center justify-between w-full mb-6">
      <Breadcrumb />
      <header className="flex gap-2">
        {Button === "dictionaries" ? (
          <div>
            <CreateDictionary label="dictionaries.add_dictionaries" />
          </div>
        ) : Button === "word" ? (
          <section className="flex items-center">
            <CreateWord label="dic_words.add_word" />
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
