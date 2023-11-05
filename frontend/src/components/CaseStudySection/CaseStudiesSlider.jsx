import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import olympianImage from "../../images/backgrounds/olympian.jpeg";
import dragonImage from "../../images/backgrounds/dragon.jpeg";
import skhokhoImage from "../../images/backgrounds/skhokho.jpeg";
import commonStyles from "../../styles/common.module.css";
import styles from "./CaseStudySection.module.css";


const CaseStudiesSlider = () => {
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
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        adaptiveHeight: true,
        speed: 800, // Decreased animation speed for a smoother transition
        autoplaySpeed: 3500, // Increased interval between slides for a more relaxed pace
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Provides a smooth, ease-in-out transition
    };
  
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
  
  export default CaseStudiesSlider;
  