import { Button } from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

export default function Section_01() {
  return (
    <section className="w-[450px] min-w-[450px] rounded-2xl flex items-center flex-col bg-gradient-to-t from-white via-[#f9fdff] to-[#f8fcff]">
      <div className="flex gap-6 mt-[20px]">
        <LanguageSelector />
        <div className="w-[2px] bg-[#E0EBEA]"></div>
        <span>
          <Button variant="outline" className="bg-transparent mr-3" size="sm">
            Sign in
          </Button>
          <Button variant="default" size="sm">
            Sign up
          </Button>
        </span>
      </div>
      <div className="mt-[80px] mb-[80px] w-full px-[50px]">
        {/* Extension File */}
        <div className="bg-gray-400 w-full h-[500px] rounded-lg "></div>
      </div>
    </section>
  );
}
