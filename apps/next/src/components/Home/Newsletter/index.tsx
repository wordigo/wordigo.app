import { Button, Input } from "@wordigo/ui";

const Newsletter = () => {
  return (
    <section className="px-20 flex flex-col items-center py-24 border rounded-2xl mx-20 my-24">
      <h2 className="text-4xl font-semibold">Subscribe our newsletter</h2>
      <p className="text-xl mt-5 text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita, earum eligendi tenetur soluta quibusdam.
      </p>
      <form className="mt-8 flex items-center">
        <Input type="email" placeholder="Enter your email" className="mr-4" />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
};

export default Newsletter;
