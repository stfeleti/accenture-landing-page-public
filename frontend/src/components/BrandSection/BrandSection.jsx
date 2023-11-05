import React from "react";
import styles from "./BrandSection.module.css";
import commonStyles from "../../styles/common.module.css";

function BrandSection() {
  return (
    <div className={`${commonStyles.sectionMainContainer}`}>
      <div
        className={`${commonStyles.sectionHeading}`}
      >
        <span className={`${commonStyles.line}`}></span>
        <span>You’ll be in good company</span>
      </div>
      <p className={`${commonStyles.sectionSubHeading}`}>
      Trusted by leading brands
      </p>
      
    </div>
  );
}


export default BrandSection;
