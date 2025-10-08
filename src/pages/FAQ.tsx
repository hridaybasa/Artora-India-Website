import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import { faqs } from "../config/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer
      id="faq"
      className="bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about investing in art with Artoraa India.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-white pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={`h-5 w-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-400/10 to-purple-600/10 border border-purple-400/30 rounded-2xl p-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Our team is here to provide personalized guidance and answer any
            questions about your art investment journey.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-purple-400 text-black font-semibold rounded-xl hover:bg-purple-300 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
