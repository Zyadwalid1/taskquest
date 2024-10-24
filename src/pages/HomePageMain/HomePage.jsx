import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomePage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dashBoardImg from "../../assets/dashboard.png";

const Homepage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("homepage.main");
  }, [t]);

  useGSAP(() => {
    gsap.from(".text", 0.8, {
      y: 40,
      opacity: 0,
      ease: "power2.inOut",
      delay: 1,
    });
    gsap.from(".language-select2", 0.8, {
      y: 40,
      opacity: 0,
      ease: "power4.inOut",
      delay: 1,
    });
    gsap.from(".loader", 2, {
      width: 0,
      ease: "power4.inOut",
      delay: 1,
    });

    gsap.to(".pre-loader", 2, {
      top: "-100%",
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.from(".row", 0.9, {
      y: 0,
      opacity: 0,
      ease: "power4.inOut",
      delay: 4,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(".img", 0.9, {
      y: 0,
      opacity: 0,
      ease: "power4.inOut",
      delay: 4,
      stagger: {
        amount: 0.3,
      },
    });
  });
  const { i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };

  return (
    <div className="homepage-container">
      <div className="navbar">
        <div className="logo">{t("homepage.title")}</div>
        <div className="dummy-info">
          <em>{t("homepage.footer")}&copy;</em>
        </div>
        <div className="dummy-info">
          <select
            name="lang"
            id="language-select2"
            onChange={handleLanguageChange}
            className="language-select2"
          >
            <option value="">{t("profile.lang")}</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
      <div className="hero-section">
        <img src={dashBoardImg} className="img dashboard-img" alt="Dashboard" />
        <div className="copy">
          <h1 className="homepageHead">{t("homepage.title")}</h1>
          <h5 className="noAccountRequired">{t("homepage.subtitle")}</h5>
          <div className="row row-1">
            <div className="h1">{t("homepage.features.trackTasks")}</div>
            <div className="h1">{t("homepage.features.productivity")}</div>
            <div className="span">{t("homepage.description")}</div>
            <ul>
              <li>{t("homepage.select1")}</li>
              <li>{t("homepage.select2")}</li>
            </ul>
            <Link to={"/dashboard"} className="learnMore">
              {t("homepage.button")}
            </Link>
          </div>
        </div>
      </div>
      <div className="pre-loader">
        <div className="content">
          <div className="text">
            <h1>{t("homepage.title")}</h1>
          </div>
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
