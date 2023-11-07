// Import the entire React library as 'React'
import * as React from "react";

// Import CSS module for this component
import styles from "./HeroSection.module.css";

// Import the background image
import backgroundImage from "../../images/backgrounds/confidence.jpeg";

// Define a functional component named HeroSection
function HeroSection() {
  // Render JSX content
  return (
    <div className={`${styles.mainContainer}`}>
      {/* Render the background image */}
      <img loading="lazy" alt="confidence" src={backgroundImage} className={`${styles.img}`} />
      
      {/* Render the title */}
      <div className={`${styles.title}`}>Live with Confidence</div>
      
      {/* Render the description */}
      <div className={`${styles.description}`}>
        José Mourinho brings confidence to pan-African Sanlam campaign.
      </div>
      
      {/* Render a button */}
      <button className={`${styles.viewProject}`}>
        View project
      </button>
    </div>
  );
}

// Export the HeroSection component as the default export of this file
export default HeroSection;
