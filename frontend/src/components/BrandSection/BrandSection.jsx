import React, { useState, useEffect } from "react";
import styles from "./BrandSection.module.css";
import commonStyles from "../../styles/common.module.css";

function BrandSection() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBrands(data.data); 
      })
      .catch(error => {
        console.error('Error:', error)
      });
  }, []);
  
  return (
    <div id="industries" className={commonStyles.sectionMainContainer}>
      <div className={commonStyles.sectionHeading}>
        <span className={commonStyles.line}></span>
        <span>You’ll be in good company</span>
      </div>
      <p className={commonStyles.sectionSubHeading}>
        Trusted by leading brands
      </p>
      <div className={styles.brandContainer}>
        {brands.map(brand => (
          <div key={brand._id} className={styles.brandItem}>
            <img src={brand.imageURL} alt={brand.name} className={styles.brandLogo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSection;
