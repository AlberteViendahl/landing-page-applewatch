import Accordion from "./Accordion";

const AccordionFaqs = () => {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden">
      <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
        <h1>FAQs</h1>
        <Accordion />
        <Accordion />
        <Accordion />
      </section>
    </main>
  );
};

export default AccordionFaqs;
