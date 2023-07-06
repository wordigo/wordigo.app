import Section_01 from "./Section1_01";
import Section_02 from "./Section1_02";

export default function Section_1() {
  return (
    <main className="m-auto max-w-[1440px] flex justify-between mb-[80px] mt-4">
      <Section_01></Section_01>
      <Section_02></Section_02>
    </main>
  );
}
