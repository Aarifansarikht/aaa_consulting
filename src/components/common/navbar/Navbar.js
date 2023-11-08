import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "../../../assets/vector/brand-logo.svg";

import { FaXTwitter, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
export default function Navbar(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? Styles.active : "";
  };

  return (
    <header>
      <div
        className={`${Styles.Container} ${
          isMobileMenuOpen ? Styles.MobileNavOpen : ""
        }`}
      >
        <div className={Styles.NavbarContent}>
          <div className={Styles.BrandLogo}>
            <Link to={"/"}>
              <img src={BrandLogo} />
            </Link>
          </div>
          <div
            className={Styles.HamburgerMenu}
            onClick={handleToggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <RxCross1
                className={Styles.crossbtn}
                style={{ color: "#FFBB55" }}
                size={30}
              />
            ) : (
              <GiHamburgerMenu style={{ color: "#FFBB55" }} size={30} />
            )}
          </div>
          <nav className={`${isMobileMenuOpen ? Styles.Open : ""}`}>
            <div className={Styles.SocialIcons}>
              <FaXTwitter size={18} />
              <FaLinkedin size={18} />
              <FaSquareFacebook size={18} />
              <MdEmail size={18} />
            </div>
            <ul>
              <li>
                <Link to={"/"} className={isActive("/")}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to={"/about"} className={isActive("/about")}>
                  ABOUT
                </Link>
              </li>
              <li className={Styles.dropdown}>
                <Link to={"#"} className={isActive("/services")}>
                  SERVICES
                </Link>
                <ul className={Styles.servicesMenu}>
                  <li>
                    <Link
                      to={"/Online-Reputation-Management"}
                      className={isActive("/Online-Reputation-Management")}
                    >
                      Online Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Search-Engine-Optimization"}
                      className={isActive("/Search-Engine-Optimization")}
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Digital-Marketing"}
                      className={isActive("/Digital-Marketing")}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Social-Media-Consulting"}
                      className={isActive("/Social-Media-Consulting")}
                    >
                      Social Media Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Software-Development"}
                      className={isActive("/Software-Development")}
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Intelligent-Medical-Diagnosis"}
                      className={isActive("/Intelligent-Medical-Diagnosis")}
                    >
                      Intelligent Medical Diagnosis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Mobile-Application-Development"}
                      className={isActive("/Mobile-Application-Development")}
                    >
                      Mobile Application Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Website-Development"}
                      className={isActive("/Website-Development")}
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Market-Research"}
                      className={isActive("/Market-Research")}
                    >
                      Market Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Cloud-Computing"}
                      className={isActive("/Cloud-Computing")}
                    >
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/AI-Data-and-Insights"}
                      className={isActive("/AI-Data-and-Insights")}
                    >
                      AI, Data & Insights
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/contacts"} className={isActive("/contacts")}>
                  CONTACTS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
