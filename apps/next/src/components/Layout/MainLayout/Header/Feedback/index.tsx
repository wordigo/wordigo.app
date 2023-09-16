import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@wordigo/ui";

const Feedback = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Feedback</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex flex-col items-center gap-4">
              <Textarea
                id="width"
                placeholder="Write your poblem."
                className="col-span-2 h-8"
              />
            </div>
          </div>
          <Button>Submit</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Feedback;
