import React from "react";
import styles from "./Footer.module.css";
import commonStyles from "../../styles/common.module.css";

function Footer() {
  return (
    <div
      className={`${commonStyles.sectionMainContainer} ${styles.footerContainer}`}
    >
      <div id={styles.footerHeading} className={commonStyles.sectionHeading}>
        <span className={commonStyles.line}></span>
        <span>Contact us</span>
      </div>
      <div className={styles.footerTop}>
        <span
          id={styles.footerSubHeading}
          className={commonStyles.sectionSubHeading}
        >
          Have a project in mind? <br />
          Let's make it happen
        </span>
        <span>
          22 Street Name, Suburb, 8000,
          <br />
          Cape Town, South Africa
          <br />
          +27 21 431 0001
          <br />
          enquirie@website.co.za
          <br />
        </span>
      </div>
      <div className={styles.footerBottom}>
        <span>
          Terms of service
          <br />
          Privacy policy
          <br />
          Impressum
        </span>
        <span>
          Facebook
          <br />
          Instagram
          <br />
          Twitter
        </span>
        <span>
          Youtube
          <br />
          Behance
          <br /> 
          Dribbble
          <br />
        </span>
        <span>
          Explore open jobs
          <br />
          <br />
          ©2000—2023 Company Name
        </span>
      </div>
    </div>
  );
}
export default Footer;
