import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { contactInfo } from "../config/content";
import logo from "../assets/new logo white.png";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Artoraa Logo" className="h-10 w-auto mb-4" />
            <p className="text-white/70 leading-relaxed mb-6">
              Investing in timeless beauty. Bridging collectors, artists, and
              masterpieces.
            </p>
            <div className="flex space-x-4">
              {contactInfo.socialMedia.instagram && (
                <a
                  href="https://www.instagram.com/artoraaindia/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.linkedin && (
                <a
                  href="https://www.linkedin.com/company/artoraa-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.twitter && (
                <a
                  href={contactInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Our Process",
                "Art Investment",
                "IDEA",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        `#${item.toLowerCase().replace(" ", "-")}`
                      )
                    }
                    className="text-white/70 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#blog")}
                  className="text-white/70 hover:text-amber-400 transition-colors"
                >
                  Insights & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#faq")}
                  className="text-white/70 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#legal")}
                  className="text-white/70 hover:text-amber-400 transition-colors"
                >
                  Legal & Privacy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Artoraa India. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
