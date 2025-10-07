import { TrendingUp, Shield, Globe, Award } from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import { investmentComparisons } from "../config/content";

export default function Investment() {
  return (
    <SectionContainer
      id="investment"
      className="bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why Invest in Art?
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Art is more than a collectible — it is an appreciating asset that
          brings cultural prestige and financial growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          {
            icon: TrendingUp,
            title: "Strong Returns",
            description:
              "Historical data shows art consistently outperforms traditional assets",
          },
          {
            icon: Shield,
            title: "Portfolio Diversification",
            description:
              "Low correlation with stock markets provides stability during volatility",
          },
          {
            icon: Globe,
            title: "Tangible Asset",
            description:
              "Physical ownership with intrinsic value that can be enjoyed daily",
          },
          {
            icon: Award,
            title: "Cultural Legacy",
            description:
              "Build a collection that reflects your values and leaves a lasting impact",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105"
          >
            <benefit.icon className="h-10 w-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white text-center mb-10">
          Investment Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-400/10 border-b border-amber-400/30">
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Asset Class
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Annual Return
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Volatility
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Liquidity
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Tangibility
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Cultural Value
                </th>
              </tr>
            </thead>
            <tbody>
              {investmentComparisons.map((comparison, index) => (
                <tr
                  key={index}
                  className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                    index === 0 ? "bg-amber-400/5" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-white font-semibold">
                    {comparison.category}
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {comparison.annualReturn}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        comparison.volatility === "Low"
                          ? "bg-green-500/20 text-green-400"
                          : comparison.volatility === "Moderate"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {comparison.volatility}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {comparison.liquidity}
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {comparison.tangibility}
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {comparison.culturalValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/30 rounded-2xl p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            The Artoraa Advantage
          </h3>
          <p className="text-white/80 leading-relaxed mb-8">
            Fine art has outperformed many traditional investments over decades,
            while offering the joy of ownership and the prestige of cultural
            stewardship. Our expertise ensures you acquire pieces with both
            aesthetic merit and strong appreciation potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "250%", label: "Indian Art Market Growth (10 Years)" },
              { stat: "78%", label: "Wealth Managers Recommend Art Assets" },
              { stat: "60%", label: "UHNW Investors Hold Art in Portfolios" },
            ].map((item, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {item.stat}
                </div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
