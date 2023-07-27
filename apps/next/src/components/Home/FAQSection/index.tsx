import FAQ, { type Question } from "./faq.constant";

const FAQSection = () => {
  return (
    <section className="px-20 py-24 flex flex-col items-center">
      <h2 className="text-4xl font-semibold">Frequently asked questions</h2>
      <p className="text-xl text-muted-foreground mt-5">Everything you need to know about the product and billing.</p>
      <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-16">
        {FAQ.map((item, index) => (
          <FAQSection.Card key={index} question={item.question} answer={item.answer} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
};

FAQSection.Card = ({ question, answer, Icon }: Question) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-6 h-6 p-3 box-content border rounded-[0.625rem]" />
      <span className="text-xl font-semibold mt-5 text-center">{question}</span>
      <p className="text-base text-muted-foreground mt-2 text-center">{answer}</p>
    </div>
  );
};

export default FAQSection;
