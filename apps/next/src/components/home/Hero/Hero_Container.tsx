import Section_01 from "./Hero_1";
import Section_02 from "./Hero_2";

export default function Section_1() {
  return (
    <main className="m-auto max-w-[1440px] flex justify-between mb-[80px] mt-4">
      <Section_01></Section_01>
      <Section_02></Section_02>
    </main>
  );
}
