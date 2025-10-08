import { ArrowRight, TrendingUp, Users, ShieldCheck } from "lucide-react";
import Button from "../components/ui/Button";
import { heroContent, whyArtoraaHighlights } from "../config/content";

export default function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconMap: Record<string, any> = {
    users: Users,
    "trending-up": TrendingUp,
    "shield-check": ShieldCheck,
  };

  return (
    <div id="home" className="relative">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroContent.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto ">
              {heroContent.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {heroContent.ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  onClick={() => scrollToSection(button.link)}
                  variant={button.primary ? "primary" : "outline"}
                  size="lg"
                >
                  {button.text}
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#why-artoraa")}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <section
        id="why-artoraa"
        className="bg-gradient-to-b from-black to-neutral-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More than Art. An Asset.
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Artoraa bridges the world of creativity and capital. We help you
              diversify investments, acquire rare artworks, and support the next
              generation of talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyArtoraaHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-purple-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20 transition-colors">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
