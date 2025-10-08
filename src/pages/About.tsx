import SectionContainer from "../components/ui/SectionContainer";
import { founders } from "../config/content";

export default function About() {
  return (
    <SectionContainer
      id="about"
      className="bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Story
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl text-white/80 leading-relaxed">
            Founded with a vision to transform how people perceive and acquire
            art, Artoraa India serves as a discreet fine art broker. We curate
            opportunities for investors, collectors, and institutions to acquire
            works of cultural and financial significance.
          </p>
          <div className="bg-purple-400/10 border-l-4 border-purple-400 p-6 rounded-r-lg">
            <p className="text-lg text-white/90 italic">
              <span className="text-purple-400 font-bold">Our Mission: </span>
              To empower art as both a cultural cornerstone and a powerful
              investment class.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Meet Our Founders
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="w-full h-80 object-center object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {founder.name}
              </h4>
              <p className="text-purple-400 font-semibold mb-4">
                {founder.role}
              </p>
              <p className="text-white/70 leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: "50+", label: "Interior Designers" },
          { number: "100+", label: "Emerging Artists" },
          { number: "20+", label: "Happy Collectors" },
          { number: "500+", label: "Artworks Reviewed" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {stat.number}
            </div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
