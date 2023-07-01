import React from "react";
import Section_1 from "@/components/home/Section_1";
import Section_2 from "@/components/home/Section_2";
import Section_3 from "@/components/home/Section_3";
import Section_4 from "@/components/home/Section_4";
import Section_5 from "@/components/home/Section_5";


export default function index() {
  return (
    <div>
      <div>
        <div>
          <Section_1></Section_1>
        </div>

        <div className="bg-blue-500">
          <Section_2></Section_2>
        </div>

        <div>
          <Section_3></Section_3>
        </div>

        <div>
          <Section_4></Section_4>
        </div>

        <div className="footer_background">
          <Section_5></Section_5>
        </div>
      </div>
    </div>
  );
}