import React, { useState, useEffect } from "react";
import styles from "./BrandSection.module.css";
import commonStyles from "../../styles/common.module.css";

// Define a functional component named BrandSection
function BrandSection() {
  // Define a state variable 'brands' and a function 'setBrands' to update it
  const [brands, setBrands] = useState([]);

  // Use the 'useEffect' hook to perform side effects in function components
  useEffect(() => {
    // Fetch data from the specified URL when the component mounts
    fetch('http://localhost:5000/brands')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Update the 'brands' state with the received data
        setBrands(data.data); 
      })
      .catch(error => {
        console.error('Error:', error)
      });
  }, []); // The empty dependency array ensures this effect runs once when component mounts
  
  // Render the JSX content
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

// Export the BrandSection component as the default export of this file
export default BrandSection;
