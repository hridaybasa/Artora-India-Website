import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Investment from "./pages/Investment";
import IDEA from "./pages/IDEA";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="our-process">
          <Process />
        </section>
        <section id="art-investment">
          <Investment />
        </section>
        <section id="idea">
          <IDEA />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="legal">
          <Legal />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
