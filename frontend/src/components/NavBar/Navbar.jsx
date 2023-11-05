import React, { useState } from "react";
import logo from '../../images/logos/logo.svg'; // Assuming logo file path is correct
import styles from './Navbar.module.css';


/**
 * Navbar Component
 *
 * This component represents the navigation bar of the website.
 * It includes a logo, navigation links, and a mobile menu for smaller screens.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Navbar.
 */
function Navbar() {
  // State to manage active state of mobile menu
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggle Active Class
   *
   * Function to toggle the active class of the mobile menu.
   * This is triggered when the hamburger menu icon is clicked.
   *
   * @function
   * @returns {void}
   */
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  /**
   * Remove Active Class
   *
   * Function to remove the active class from the mobile menu.
   * This is triggered when a menu item is clicked.
   *
   * @function
   * @returns {void}
   */
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* Navigation */}
        <nav className={`${styles.navbar}`}>

          {/* Logo */}
          <img src={logo} alt="Brand" className={`${styles.logo}`} />

          {/* Menu items */}
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#services' className={`${styles.navLink}`}>Services</a>
            </li>
            <li onClick={removeActive}>
              <a href='#industries' className={`${styles.navLink}`}>Industries</a>
            </li>
            <li onClick={removeActive}>
              <a href='#cases' className={`${styles.navLink}`}>Cases</a>
            </li>
            <li onClick={removeActive}>
              <a href='#Contact' className={`${styles.navLink}`}>Contact</a>
            </li>
            <li className={`${styles.buttonItem}`}>
              <button className={`${styles.contactButton}`}>Let’s Talk</button>
            </li>
          </ul>

          {/* Hamburger menu for mobile */}
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;
