import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "../../../assets/vector/sticky-logo.svg";

import Facebooklogo from "../../../assets/social_icon/facebook.svg";
import LinkedinLogo from "../../../assets/social_icon/linkedin.svg";
import MailLogo from "../../../assets/social_icon/mail.svg";
import XLogo from "../../../assets/social_icon/x.svg";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
export default function NavbarSticky(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? Styles.active : "";
  };

  return (
    <header className={Styles.StickyNav}>
      <div
        className={`${Styles.Container} ${
          isMobileMenuOpen ? Styles.MobileNavOpen : ""
        }`}
      >
        <div className={Styles.NavbarContent}>
          <div className={Styles.BrandLogo}>
            <img src={BrandLogo} />
          </div>
          <div
            className={Styles.HamburgerMenu}
            onClick={handleToggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <RxCross1 style={{ color: "#FFBB55" }} size={30} />
            ) : (
              <GiHamburgerMenu style={{ color: "#FFBB55" }} size={30} />
            )}
          </div>
          <nav className={`${isMobileMenuOpen ? Styles.Open : ""}`}>
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li className={Styles.dropdown}>
                <Link to={"#"} className={isActive("/services")}>
                  SERVICES
                </Link>
                <ul className={Styles.servicesMenu}>
                  <li>
                    <Link to={"/service1"} className={isActive("/service1")}>
                      Online Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Social Media Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Intelligent Medical Diagnosis
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Mobile Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Market Research
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service2"} className={isActive("/service2")}>
                      AI, Data & Insights
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/contacts"}>CONTACTS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
