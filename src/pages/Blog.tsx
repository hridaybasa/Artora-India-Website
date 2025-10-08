import { Calendar, ArrowRight } from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import { blogPosts } from "../config/content";

export default function Blog() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <SectionContainer
      id="blog"
      className="bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Insights & Perspectives
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Explore thought leadership, market insights, and stories from the
          world of fine art investment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center text-purple-400 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.date)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <button className="flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="bg-gradient-to-br from-purple-400/10 to-purple-600/10 border border-purple-400/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Get exclusive insights, market updates, and early access to featured
            artworks delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-400 text-black font-semibold rounded-lg hover:bg-purple-300 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Popular Topics</h3>
          <div className="flex flex-wrap gap-2">
            {[
              {
                label: "Contemporary Art",
                link: "https://www.google.com/search?q=contemporary+art&rlz=1C1CHBF_enIN916IN916&oq=Contemporary+Art&gs_lcrp=EgZjaHJvbWUqDwgAEAAYFBiHAhixAxiABDIPCAAQABgUGIcCGLEDGIAEMgcIARAAGIAEMgcIAhAAGIAEMhAIAxAuGK8BGMcBGIAEGI4FMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGDwyBggHEEUYPNIBCTEwMTMyajBqN6gCCLACAfEFfLq1QBnB-pTxBXy6tUAZwfqU&sourceid=chrome&ie=UTF-8",
              },
              {
                label: "Investment Strategies",
                link: "https://www.google.com/search?q=art+investment+strategies&sca_esv=75f9aadc3d86adc0&rlz=1C1CHBF_enIN916IN916&sxsrf=AE3TifPE78eFAw6kxvpwJChTuRRQj3WEJQ%3A1759833008705&ei=sOvkaK_lKsaNseMP7ZzfuAE&ved=0ahUKEwiv_ePq8JGQAxXGRmwGHW3OFxcQ4dUDCBA&uact=5&oq=art+investment+strategies&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFydCBpbnZlc3RtZW50IHN0cmF0ZWdpZXMyBBAjGCcyBBAAGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyBRAAGO8FMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FSMQNUNwFWLELcAF4AZABAJgB-QGgAbkGqgEFMC4yLjK4AQPIAQD4AQGYAgWgApEHwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgcQIxiwAhgnwgIGEAAYBxgewgIHEAAYgAQYDcICBxAuGIAEGA3CAggQABgHGAgYHpgDAIgGAZAGCpIHBTEuMS4zoAfhJrIHBTAuMS4zuAeGB8IHAzMtNcgHRg&sclient=gws-wiz-serp",
              },
              {
                label: "Emerging Artists",
                link: "https://www.google.com/search?q=emerging+artists&sca_esv=75f9aadc3d86adc0&rlz=1C1CHBF_enIN916IN916&sxsrf=AE3TifPShgb0AgAkpZRNVCqJC7aDyLsn5w%3A1759833173576&ei=VezkaKj5IvqaseMPhtXCqAQ&oq=emerging+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmVtZXJnaW5nIGEqAggBMgoQABiABBhDGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyBRAuGIAEMgUQABiABDIFEAAYgAQyChAAGIAEGAIYywEyBRAuGIAEMgUQLhiABDIFEAAYgARIihpQAFiuDnAAeAGQAQCYAcQBoAHTDKoBBDAuMTC4AQHIAQD4AQGYAgqgAtwNwgIKECMYgAQYJxiKBcICEBAuGIAEGNEDGMcBGCcYigXCAgsQABiABBixAxiDAcICEBAuGIAEGEMYxwEYigUYrwHCAggQABiABBixA8ICDRAAGIAEGLEDGEMYigXCAggQLhiABBixA8ICEBAAGIAEGLEDGIMBGBQYhwLCAgoQABiABBgUGIcCmAMAkgcFMC43LjOgB-lKsgcFMC43LjO4B9wNwgcJMi00LjUuMC4xyAd0&sclient=gws-wiz-serp",
              },
              {
                label: "Market Trends",
                link: "https://www.google.com/search?q=art+Market+Trends&sca_esv=75f9aadc3d86adc0&rlz=1C1CHBF_enIN916IN916&sxsrf=AE3TifMw9ygek0XwkIN2v4kQYiV94LpY6w%3A1759833211961&ei=e-zkaJq2OuWgnesP5JzomQI&ved=0ahUKEwja39nL8ZGQAxVlUGcHHWQOOiMQ4dUDCBA&uact=5&oq=art+Market+Trends&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWFydCBNYXJrZXQgVHJlbmRzMgUQABiABDILEAAYgAQYkQIYigUyBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5I3JYDUPB4WLGVA3AEeAGQAQCYAcwBoAHFCKoBBTAuNi4xuAEDyAEA-AEB-AECmAILoAL-CMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIGEAAYBxgewgINEAAYgAQYsQMYgwEYDcICBxAAGIAEGA3CAggQABgHGAoYHsICCBAAGAcYCBgemAMAiAYBkAYKkgcFNC42LjGgB_8rsgcFMC42LjG4B-oIwgcHMC4yLjguMcgHKg&sclient=gws-wiz-serp",
              },
              {
                label: "Art Authentication",
                link: "https://www.google.com/search?q=Art+Authentication&rlz=1C1CHBF_enIN916IN916&oq=Art+Authentication&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIMCAYQABgUGIcCGIAEMgYIBxBFGDzSAQczODBqMGo5qAIGsAIB8QUY9B2e9MJwrw&sourceid=chrome&ie=UTF-8",
              },
              {
                label: "Portfolio Building",
                link: "https://www.google.com/search?q=art+portfolio+building&sca_esv=75f9aadc3d86adc0&rlz=1C1CHBF_enIN916IN916&sxsrf=AE3TifPKSgiZAkIJeTWXsWlq3J6lrc6O2w%3A1759833330996&ei=8uzkaN3TPIygseMP98z5iAQ&ved=0ahUKEwjdlLuE8pGQAxUMUGwGHXdmHkEQ4dUDCBA&uact=5&oq=art+portfolio+building&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmFydCBwb3J0Zm9saW8gYnVpbGRpbmcyBRAAGIAEMgQQABgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVIrA9QuQdY4A1wAXgBkAEAmAGvAaABggWqAQMwLjS4AQPIAQD4AQGYAgWgAqYFwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgcQIxiwAhgnwgIHEAAYgAQYDcICBhAAGAcYHsICCBAAGAcYCBgewgIIEAAYBRgHGB6YAwCIBgGQBgqSBwMxLjSgB9UisgcDMC40uAefBcIHBTItNC4xyAcZ&sclient=gws-wiz-serp",
              },
              {
                label: "Indian Art",
                link: "https://www.google.com/search?q=Indian+Art&sca_esv=75f9aadc3d86adc0&rlz=1C1CHBF_enIN916IN916&sxsrf=AE3TifOWjvbWH8OO-_X28DKqAAu4Fq-X4Q%3A1759833335744&ei=9-zkaMiaLZjuseMPkbbU6AY&ved=0ahUKEwiI8tyG8pGQAxUYd2wGHREbFW0Q4dUDCBA&uact=5&oq=Indian+Art&gs_lp=Egxnd3Mtd2l6LXNlcnAiCkluZGlhbiBBcnQyBBAjGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTIKEAAYgAQYFBiHAjIFEAAYgAQyBRAuGIAEMgUQABiABEjBpQFQ46ABWOOgAXABeAGQAQCYAasBoAGrAaoBAzAuMbgBA8gBAPgBAvgBAZgCAqACtgHCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcDMS4xoAfWDbIHAzAuMbgHrwHCBwMyLTLIBwg&sclient=gws-wiz-serp",
              },
              {
                label: "Collection Management",
                link: "https://www.google.com/search?q=collection+management&rlz=1C1CHBF_enIN916IN916&oq=Collection+Management&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgyMjE4ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
              },
            ].map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-purple-400/20 border border-white/20 hover:border-purple-400/50 rounded-full text-white/80 hover:text-purple-400 text-sm transition-all duration-300"
              >
                {topic.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
