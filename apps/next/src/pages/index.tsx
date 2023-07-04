import Notification from "@/components/home/Notification";
import Section_1 from "@/components/home/Section1/Section1_Container";
import Section_2 from "@/components/home/Section2/Section2_Container";

export default function index() {
  return (
    <div>
      <div className="m-auto">
        <div className="h-screen">
          <Notification></Notification>
          <Section_1></Section_1>
        </div>
        <Section_2></Section_2>
      </div>
    </div>
  );
}
