import {
  MessageCircle,
  Search,
  ClipboardCheck,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import { processSteps } from "../config/content";

export default function Process() {
  const iconMap: Record<string, any> = {
    "message-circle": MessageCircle,
    search: Search,
    "clipboard-check": ClipboardCheck,
    handshake: Handshake,
    "heart-handshake": HeartHandshake,
  };

  return (
    <SectionContainer
      id="process"
      className="bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How We Work
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Our proven five-step process ensures a seamless journey from inquiry
          to acquisition and beyond.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-400/50 to-purple-400" />

        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-14 h-14 bg-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center items-center">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-purple-400/50 z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="w-full md:w-5/12" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-purple-400/10 to-purple-600/10 border border-purple-400/30 rounded-2xl p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Let us guide you through the world of fine art investment with
            expertise and discretion.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-purple-400 text-black font-semibold rounded-xl hover:bg-purple-300 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
