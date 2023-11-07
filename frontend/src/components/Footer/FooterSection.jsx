import React from "react";
import styles from "./FooterSection.module.css";
import commonStyles from "../../styles/common.module.css";

function FooterSection() {
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
          <a href="/terms-of-service">Terms of service</a>
          <br />
          <a href="/privacy-policy">Privacy policy</a>
          <br />
          <a href="/impressum">Impressum</a>
        </span>
        <span>
          <a href="https://facebook.com">Facebook</a>
          <br />
          <a href="https://instagram.com">Instagram</a>
          <br />
          <a href="https://twitter.com">Twitter</a>
        </span>
        <span>
          <a href="https://youtube.com">Youtube</a>
          <br />
          <a href="https://behance.net">Behance</a>
          <br />
          <a href="https://dribbble.com">Dribbble</a>
          <br />
        </span>
        <span className={styles.addressSection}>
          <a href="/open-jobs">Explore open jobs</a>
          <br />
          ©2000—2023 Company Name
        </span>
      </div>
    </div>
  );
}
export default FooterSection;
