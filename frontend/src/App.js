// Import the CSS file for the entire application
import "./App.css";

// Import React components
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection/WhatWeDoSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import BrandSection from "./components/BrandSection/BrandSection";
import FooterSection from "./components/Footer/FooterSection";

// Define the functional component named 'App'
function App() {
  // Render JSX content
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the Navbar component */}
        <Navbar />
        {/* Render the HeroSection component */}
        <HeroSection />
      </header>
      <main className="main-section">
        {/* Render the WhatWeDoSection component */}
        <WhatWeDoSection />
        {/* Render the CaseStudySection component */}
        <CaseStudySection />
        {/* Render the BrandSection component */}
        <BrandSection />
      </main>
      <footer id="contact">
        {/* Render the FooterSection component */}
        <FooterSection />
      </footer>
    </div>
  );
}

// Export the App component as the default export of this file
export default App;
