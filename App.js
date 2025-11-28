import Navbar from "./src/components/common/Navbar";
import About from "./src/components/about/About";
import Hero from "./src/components/hero/Hero";
import Skills from "./src/components/skills/Skills";
import Projects from "./src/components/projects/Project";
import Education from "./src/components/education/Education";
import Contact from "./src/components/contact/Contact";
import Footer from "./src/components/common/Footer";
import Certificate from "./src/certificates/Certificate";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Temporary sections to see the navbar */}
      <Hero />

      <About />

      <Skills />

      <Projects />
      <Certificate />

      <Education />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
