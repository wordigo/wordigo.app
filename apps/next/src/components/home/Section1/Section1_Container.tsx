import Section_01 from "./Section1_01";
import Section_02 from "./Section1_02";

export default function Section_1() {
  return (
    <div className="m-auto max-w-[1440px] flex flex-col mt-3 mb-20 h-fit">
      <main className="m-auto max-w-[1440px] mx-3 flex justify-between">
        <Section_01></Section_01>
        <Section_02></Section_02>
      </main>
    </div>
  );
}
