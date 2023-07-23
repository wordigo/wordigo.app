import Animation from "@/components/Animation";
import { TextCursor } from "lucide-react";

import { Button } from "@wordigo/ui";

function CTASection() {
  return (
    <Animation>
      <div className="flex bg-primary mx-20 my-24 flex-col p-16 rounded-2xl items-center">
        <h2 className="text-4xl text-secondary font-semibold">
          Install our extension,&nbsp;
          <span className="bg-secondary text-primary rounded-sm inline-flex items-center">
            &nbsp; select
            <TextCursor className="w-9 h-9 animate-pulse duration-1000" />
            &nbsp;
          </span>
          &nbsp;and translate!
        </h2>
        <p className="text-xl text-muted-foreground mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, obcaecati. Quasi dicta laborum dolorum nobis aut cumque alias?
        </p>
        <div className="mt-8 flex">
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </Animation>
  );
}

export default CTASection;
