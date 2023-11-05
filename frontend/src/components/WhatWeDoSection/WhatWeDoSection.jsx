import React from "react";
import commonStyles from "../../styles/common.module.css";
import styles from "./WhatWeDoSection.module.css";
import webDevIcon from "../../images/assets/web-development-icon.svg";
import uxDesignIcon from "../../images/assets/ui-design-icon.svg";
import mobileDevelopmentIcon from "../../images/assets/mobile-development-icon.svg";
import blockchainIcon from "../../images/assets/blockchain-icon.svg";

function WhatWeDoSection() {
  return (
    <div className={`${commonStyles.sectionMainContainer}`}>
      <div className={`${commonStyles.sectionHeading}`}>
        <span className={`${commonStyles.line}`}></span>
        <span>What We Do</span>
      </div>
      <p className={`${commonStyles.sectionSubHeading}`}>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </p>
      <div className={`${styles.cardWrapper}`}>
        <div className={`${styles.doCard}`}>
          <img
            src={webDevIcon}
            alt="web development"
            className={`${styles.doCardImage}`}
          />

          <div className={`${styles.doCardHeading}`}>
            <span>Web development</span>
          </div>
          <div className={`${styles.doCardDescription}`}>
            We use cutting-edge web development technologies to help our clients
            fulfill their business goals through functional, reliable solutions.
          </div>
        </div>
        <div className={`${styles.doCard}`}>
          <img
            src={uxDesignIcon}
            alt="ui design"
            className={`${styles.doCardImage}`}
          />

          <div className={`${styles.doCardHeading}`}>
            <span>User experience & design</span>
          </div>
          <div className={`${styles.doCardDescription}`}>
            Our complete web design services will bring your ideas to life and
            provide you with a sleek, high-performing product that elevates your
            business.
          </div>
        </div>
        <div className={`${styles.doCard}`}>
          <img
            src={mobileDevelopmentIcon}
            alt="mobile development"
            className={`${styles.doCardImage}`}
          />

          <div className={`${styles.doCardHeading}`}>
            <span>Mobile app development</span>
          </div>
          <div className={`${styles.doCardDescription}`}>
            Our extensive mobile development experience allows us to create
            custom native and cross-platform iOS and Android mobile solutions
            for our clients.
          </div>
        </div>
        <div className={`${styles.doCard}`}>
          <img
            src={blockchainIcon}
            alt="blockchain"
            className={`${styles.doCardImage}`}
          />

          <div className={`${styles.doCardHeading}`}>
            <span>Blockchain solutions</span>
          </div>
          <div className={`${styles.doCardDescription}`}>
            We conduct market research to determine the optimal blockchain-based
            solutions to help you grow your company and achieve your business
            goals.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSection;
