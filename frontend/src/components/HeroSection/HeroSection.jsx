import * as React from "react";
import styles from "./HeroSection.module.css";

import backgroundImage from "../../images/backgrounds/confidence.jpeg";

function HeroSection() {
  return (
    <div className={`${styles.mainContainer}`}>
      <img loading="lazy" 
      alt="confidence" 
      src={backgroundImage}
      className={`${styles.img}`} />
      <div className={`${styles.title}`}>Live with Confidence</div>
      <div className={`${styles.description}`}>
        José Mourinho brings confidence to pan-African Sanlam campaign.
      </div>
      <button  className={`${styles.viewProject}`}>
        View project
      </button>
      
    </div>
  );
}

export default HeroSection;