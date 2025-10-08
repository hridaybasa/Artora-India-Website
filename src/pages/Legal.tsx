import { useState } from "react";
import SectionContainer from "../components/ui/SectionContainer";

type LegalTab = "privacy" | "terms" | "disclaimer";

export default function Legal() {
  const [activeTab, setActiveTab] = useState<LegalTab>("privacy");

  const tabs = [
    { id: "privacy" as LegalTab, label: "Privacy Policy" },
    { id: "terms" as LegalTab, label: "Terms & Conditions" },
    { id: "disclaimer" as LegalTab, label: "Disclaimer" },
  ];

  return (
    <SectionContainer
      id="legal"
      className="bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Legal Information
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Your trust and security are our top priorities. Please review our
          legal policies.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-purple-400 text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          {activeTab === "privacy" && (
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-6">
                Privacy Policy
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Last Updated: October 2, 2025
              </p>

              <div className="space-y-6 text-white/70">
                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    1. Information We Collect
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We collect information you provide directly to us, including
                    name, email address, phone number, and any other information
                    you choose to provide. We may also collect information about
                    your interactions with our services and artwork preferences.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    2. How We Use Your Information
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We use the information we collect to provide, maintain, and
                    improve our services, to communicate with you about art
                    investment opportunities, and to personalize your experience
                    with Artoraa India.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    3. Information Sharing
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information with trusted
                    partners who assist us in operating our business, conducting
                    business activities, or servicing you, provided those
                    parties agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    4. Data Security
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission
                    over the Internet or electronic storage is 100% secure, and
                    we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    5. Your Rights
                  </h4>
                  <p className="leading-relaxed mb-3">
                    You have the right to access, correct, or delete your
                    personal information. You may also object to or restrict
                    certain processing of your data. To exercise these rights,
                    please contact us at info@artoraindia.com.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-6">
                Terms & Conditions
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Last Updated: October 2, 2025
              </p>

              <div className="space-y-6 text-white/70">
                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    1. Acceptance of Terms
                  </h4>
                  <p className="leading-relaxed mb-3">
                    By accessing and using the Artoraa India website and
                    services, you accept and agree to be bound by the terms and
                    provisions of this agreement. If you do not agree to these
                    terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    2. Services
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Artoraa India provides art brokerage services, including
                    sourcing, evaluation, acquisition support, and advisory
                    services. All transactions are subject to availability and
                    our acceptance of your inquiry.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    3. Artwork Authenticity
                  </h4>
                  <p className="leading-relaxed mb-3">
                    We conduct thorough due diligence on all artworks. However,
                    art valuation and authentication are subject to expert
                    opinion. We provide all available documentation and work
                    with recognized experts, but cannot guarantee future
                    valuations or opinions.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    4. Investment Risk
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Art investment carries inherent risks. Past performance is
                    not indicative of future results. Values can fluctuate based
                    on market conditions, artist reputation, and other factors.
                    We recommend consulting with financial advisors regarding
                    art investments.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    5. Intellectual Property
                  </h4>
                  <p className="leading-relaxed mb-3">
                    All content on this website, including text, graphics,
                    logos, and images, is the property of Artoraa India or its
                    content suppliers and is protected by copyright laws.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === "disclaimer" && (
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-6">Disclaimer</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Last Updated: October 2, 2025
              </p>

              <div className="space-y-6 text-white/70">
                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    1. General Disclaimer
                  </h4>
                  <p className="leading-relaxed mb-3">
                    The information provided on this website is for general
                    informational purposes only. While we strive to keep the
                    information up to date and accurate, we make no
                    representations or warranties of any kind, express or
                    implied, about the completeness, accuracy, reliability,
                    suitability, or availability of the information.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    2. Investment Advice Disclaimer
                  </h4>
                  <p className="leading-relaxed mb-3">
                    The content on this website does not constitute financial or
                    investment advice. Art investment involves risks, and you
                    should conduct your own research and consult with qualified
                    professionals before making investment decisions.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    3. Valuation Disclaimer
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Any valuations, price estimates, or return projections
                    mentioned are based on current market conditions and
                    historical data. Actual results may vary significantly. Art
                    markets can be volatile and illiquid.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    4. Third-Party Links
                  </h4>
                  <p className="leading-relaxed mb-3">
                    This website may contain links to external websites. We have
                    no control over the content and nature of these sites and
                    are not responsible for their content or practices.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    5. Limitation of Liability
                  </h4>
                  <p className="leading-relaxed mb-3">
                    In no event shall Artoraa India be liable for any loss or
                    damage arising from the use of this website or our services,
                    including but not limited to indirect or consequential loss
                    or damage, or any loss or damage whatsoever arising from
                    loss of data, profits, or revenue.
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
