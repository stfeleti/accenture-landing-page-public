// Import the Slider component from the 'react-slick' library
import Slider from "react-slick";

// Import the CSS files for the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images and CSS modules
import olympianImage from "../../images/backgrounds/olympian.jpeg";
import dragonImage from "../../images/backgrounds/dragon.jpeg";
import skhokhoImage from "../../images/backgrounds/skhokho.jpeg";
import commonStyles from "../../styles/common.module.css";
import styles from "./CaseStudySection.module.css";

// Define a functional component named CaseStudiesSlider
const CaseStudiesSlider = () => {
  // Define an array of case studies with their details
  const caseStudies = [
    {
      id: 1,
      title: "The Olympian",
      description: "The only athlete in the world to do her Olympic routine in 2020.",
      image: olympianImage,
    },
    {
      id: 2,
      title: "The Savings Jar",
      description: "Grow your savings treasure and grow your dragon.",
      image: dragonImage,
    },
    {
      id: 3,
      title: "Skhokho seMali",
      description: "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
      image: skhokhoImage,
    },
    // Add other case studies as needed
  ];

  // Define settings for the Slider component
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    speed: 1000, 
    autoplaySpeed: 3500, 
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", 
  };

  // Render the Slider component with case study cards
  return (
    <Slider {...settings}>
      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.id} className={`${styles.caseCard} ${styles.olympian}`}>
          <img src={caseStudy.image} alt={caseStudy.title} className={`${styles.caseCardImage}`} />
          <div className={`${styles.caseCardTextWrapper}`}>
            <span className={`${commonStyles.line}`}></span>
            <p className={`${styles.caseCardHeading}`}>{caseStudy.title}</p>
            <p className={`${styles.caseCardDetail}`}>{caseStudy.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

// Export the CaseStudiesSlider component as the default export of this file
export default CaseStudiesSlider;
