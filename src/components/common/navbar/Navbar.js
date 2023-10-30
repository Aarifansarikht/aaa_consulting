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
          <nav>
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
              <li>
                <Link to={"#"} className={isActive("/services")}>
                  SERVICES
                </Link>
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
