import React from "react";
import Section_1 from "@/components/home/Section_1";
import Example from "@/components/home/Notification";

export default function index() {

  return (
    <div>
      <div className="m-auto">
        <div>
          <Example></Example>
          <Section_1></Section_1>
        </div>
      </div>
    </div>
  );
}