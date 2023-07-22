import { ArrowRight, ExternalLink } from "lucide-react";

import { Badge, Button } from "@wordigo/ui";

function NewHeroSection() {
  return (
    <div className="max-w-[1440px] w-full py-24 border px-20 rounded-3xl mx-auto flex flex-col items-center text-center">
      <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
        🎉 Check out our new translate extension! <ArrowRight className="ml-2 h-4 w-4" />
      </Badge>
      <h1 className="text-6xl font-semibold mt-4">Your #1 language learning app.</h1>
      <p className=" font-normal text-xl text-muted-foreground mt-6">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="grid grid-cols-2 gap-x-3 mt-12">
        <Button variant="outline" size="lg">
          <ExternalLink className="mr-2 h-4 w-4" />
          Try our extension
        </Button>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
}

export default NewHeroSection;
