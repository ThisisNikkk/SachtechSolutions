import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const FAQs = () => {
  const [openItem, setOpenItem] = useState<string>("");

  const faqs = [
    {
      question: "What services does your company provide?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
    {
      question: "What industries do you serve?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      question: "Do you offer customized IT solutions?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
    {
      question: "How can I contact your support team?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
    {
      question: "How secure are your IT solutions?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-foreground font-montserrat">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins">
            <span className="text-foreground">Questions? </span>
            <span className="text-primary">Look here</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border first:border-t"
            >
              <AccordionTrigger className="hover:no-underline py-6 group">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="text-left text-foreground font-medium font-poppins">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center ml-4">
                    {openItem === `item-${index}` ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-montserrat pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
