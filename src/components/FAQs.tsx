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
      answer: "We offer a wide range of IT services, including iOS and Android App Development, Windows App Development, OpenGL, App Maintenance, SEO, PHP Development, Java Development, E-Commerce Development, CMS Development, Software Maintenance, Email Marketing, Web Designing Services, Website Maintenance, IT Strategy and Consulting, Internet of Things, Cloud Solutions, and Data Analytics.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries, from highly regulated sectors like Healthcare, Fintech, and Legal to dynamic consumer markets like Fashion, Hospitality, and Food Delivery. Our expertise also covers Logistics, Real Estate, Automotive, and more.",
    },
    {
      question: "Do you offer customized IT solutions?",
      answer: "Yes, we specialize in custom software development, mobile applications, and comprehensive web solutions. We can also develop custom content management systems to meet your specific needs.",
    },
    {
      question: "How can I contact your support team?",
      answer: "You can contact our support team by phone at +(91) 7814081762, by email at contact@solariotech.com, or by filling out the contact form on our website.",
    },
    {
      question: "How secure are your IT solutions?",
      answer: "We prioritize the security of our IT solutions. Our website maintenance services ensure your site is secure and up-to-date, and we provide scalable and secure cloud solutions tailored to your business needs.",
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer: "Our official support hours are Monday to Friday, from 11:00 AM to 8:00 PM. For urgent issues, we recommend contacting us by phone.",
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
