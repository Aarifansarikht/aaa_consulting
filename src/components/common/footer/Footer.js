import React from "react";
import Styles from "./style.module.scss";

import { Form, Link } from "react-router-dom";
import BrandLogo from "../../../assets/vector/brand-logo.svg";

import { FaXTwitter, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import AddressIcon from "../../../assets/vector/address-icon.svg";

export default function Footer(props) {
  return (
    <div>
      <section className={Styles.FooterSection}>
        <div className={Styles.Container}>
          <div className={Styles.FooterContent}>
            <div className={Styles.FooterMain}>
              <div className={Styles.FooterTop}>
                <div className={Styles.FooterHead}>
                  <div className={Styles.FooterHeadLeft}>
                    <Link to={"/"}>
                      <img src={BrandLogo} className={Styles.BrandLogo} />
                    </Link>
                  </div>
                  <div className={Styles.SocialIcon}>
                    <FaXTwitter size={18} />
                    <FaLinkedin size={18} />
                    <FaSquareFacebook size={18} />
                    <MdEmail size={18} />
                  </div>
                </div>
                <div className={Styles.FooterHeadBottom}>
                  <div className={Styles.FooterBottom}>
                    <h1>
                      <strong>Our Services</strong>
                    </h1>
                    <div className={Styles.ListItems}>
                      <div className={Styles.LeftList}>
                        <ul>
                          <li>
                            <Link to={""}>Online Reputation Management</Link>
                          </li>
                          <li>
                            <Link to={""}>Search Engine Optimization</Link>
                          </li>
                          <li>
                            <Link to={""}>Digital Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Social Media Consulting</Link>
                          </li>
                          <li>
                            <Link to={""}>Software Development</Link>
                          </li>
                          <li>
                            <Link to={""}>Intelligent Medical Diagnosis</Link>
                          </li>
                        </ul>
                      </div>
                      <div className={Styles.RightList}>
                        <ul>
                          <li>
                            <Link to={""}>Mobile Application Development</Link>
                          </li>
                          <li>
                            <Link to={""}>Website Development</Link>
                          </li>
                          <li>
                            <Link to={""}>Market Research</Link>
                          </li>
                          <li>
                            <Link to={""}>Cloud Computing</Link>
                          </li>
                          <li>
                            <Link to={""}>AI, Data & Insights</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.HeadBottomRight}>
                    <form>
                      <div className={Styles.FormContainer}>
                        <input type="email" placeholder="Your e-mail here" />
                        <button type="submit">Contact me</button>
                      </div>
                    </form>
                    <div className={Styles.Address}>
                      <div className={Styles.AddressIcon}>
                        <img src={AddressIcon} />
                      </div>
                      <p>
                        315, Nimai Place, Sector 114, Gurugram Harayana 122017
                      </p>
                    </div>
                    <div className={Styles.EmailText}>
                      <p>info@aaaconsulting.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={Styles.CopyRights}>
        <p>AAA Consulting © Copyright 2023</p>
      </div>
    </div>
  );
}
