// Import the React library
import React from "react";

// Import CSS modules
import commonStyles from "../../styles/common.module.css";
import styles from "./CaseStudySection.module.css";

// Import the CaseStudiesSlider component
import CaseStudiesSlider from "./CaseStudiesSlider";

// Define a functional component named CaseStudySection
function CaseStudySection() {
  // Render JSX content
  return (
    <div id="cases" className={`${commonStyles.sectionMainContainer}`}>
      <div
        className={`${commonStyles.sectionHeading} ${styles.caseStudyHeader}`}
      >
        <span className={`${commonStyles.line}`}></span>
        <span>Case studies</span>
      </div>
      <div className={`${styles.caseWrapper}`}>
        {/* Render the CaseStudiesSlider component */}
        <CaseStudiesSlider />
      </div>
    </div>
  );
}

// Export the CaseStudySection component as the default export of this file
export default CaseStudySection;
