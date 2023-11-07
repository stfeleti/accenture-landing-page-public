import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection/WhatWeDoSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import BrandSection from "./components/BrandSection/BrandSection";
import FooterSection from "./components/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HeroSection />
      </header>
      <main className="main-section">
        <WhatWeDoSection />
        <CaseStudySection />
        <BrandSection />
        
      </main>
      <footer id="contact">
      <FooterSection/>
      </footer>
    </div>
  );
}

export default App;
