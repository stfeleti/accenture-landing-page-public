import React from "react";
import commonStyles from "../../styles/common.module.css";
import styles from "./CaseStudySection.module.css";
import CaseStudiesSlider from "./CaseStudiesSlider";


function CaseStudySection() {
  return (
    <div className={`${commonStyles.sectionMainContainer}`}>
      <div
        className={`${commonStyles.sectionHeading} ${styles.caseStudyHeader}`}
      >
        <span className={`${commonStyles.line}`}></span>
        <span>Case studies</span>
      </div>
      <div className={`${styles.caseWrapper}`}>
      <CaseStudiesSlider />
      </div>
    </div>
  );
}

export default CaseStudySection;
