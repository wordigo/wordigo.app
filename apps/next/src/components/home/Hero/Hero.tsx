import HeroBanner from "./HeroBanner";
import HeroSection from "./HeroSection";

export default function HeroContainer() {
  return (
    <main className="m-auto max-w-[1440px] flex justify-between mb-[80px] mt-4">
      <HeroSection />
      <HeroBanner />
    </main>
  );
}
