import { Lightbulb, Palette, Home } from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import { ideaArtworks } from "../config/content";

export default function IDEA() {
  return (
    <SectionContainer
      id="idea"
      className="bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-purple-400/10 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
          <Lightbulb className="h-5 w-5 text-purple-400" />
          <span className="text-purple-400 font-semibold">Our Initiative</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Artoraa IDEA
        </h2>
        <p className="text-2xl text-purple-400 mb-4">
          Interior Designers & Emerging Artists
        </p>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          IDEA is our initiative to empower new artists by connecting them with
          interior designers who are always seeking fresh, original works. This
          program creates a win-win ecosystem — designers gain access to unique,
          affordable art, while emerging artists find visibility and sales
          opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Palette,
            title: "For Emerging Artists",
            description:
              "Gain exposure, connect with designers, and build your collector base through curated opportunities.",
            benefits: [
              "Portfolio showcasing",
              "Direct designer connections",
              "Sales support",
              "Marketing assistance",
            ],
          },
          {
            icon: Home,
            title: "For Interior Designers",
            description:
              "Access a constantly refreshed collection of unique, affordable artworks perfect for your projects.",
            benefits: [
              "Exclusive access",
              "Competitive pricing",
              "Custom commissions",
              "Portfolio diversity",
            ],
          },
          {
            icon: Lightbulb,
            title: "For Collectors",
            description:
              "Discover tomorrow's masters today at accessible price points with expert curation.",
            benefits: [
              "Early access to talent",
              "Affordable entry points",
              "Investment potential",
              "Unique pieces",
            ],
          },
        ].map((stakeholder, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
          >
            <div className="w-16 h-16 bg-purple-400/10 rounded-xl flex items-center justify-center mb-6">
              <stakeholder.icon className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {stakeholder.title}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {stakeholder.description}
            </p>
            <ul className="space-y-2">
              {stakeholder.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-white/80 text-sm">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white text-center mb-10">
          Featured Artists
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ideaArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">
                  {artwork.title}
                </h4>
                <p className="text-purple-400 text-sm mb-2">{artwork.artist}</p>
                <div className="flex justify-between text-white/60 text-xs">
                  <span>{artwork.year}</span>
                  <span>{artwork.medium}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-purple-400/10 to-purple-600/10 border border-purple-400/30 rounded-2xl p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the IDEA Program
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Whether you're an emerging artist, interior designer, or collector,
            IDEA offers unique opportunities to participate in the future of
            art.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-purple-400 text-black font-semibold rounded-xl hover:bg-purple-300 transition-all duration-300 hover:scale-105"
          >
            Learn More About IDEA
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
