import Notification from "@/components/home/Notification";
import Section_1 from "@/components/home/Section1/Section1_Container";
import Section2_Container from "@/components/home/Section2/Section2_Container";
import Section3_Container from "@/components/home/Section3/Section3_Container";
import Footer from "@/components/home/Footers/Footer";

export default function index() {
  return (
    <div>
      <div className="flex flex-col gap-y-16">
        <div>
          <Notification></Notification>
          <Section_1></Section_1>
        </div>
        <Section2_Container></Section2_Container>
        <Section3_Container></Section3_Container>
        <Footer></Footer>
      </div>
    </div>
  );
}
