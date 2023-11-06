import React, { useRef, useState } from "react";
import Styles from "./style.module.scss";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import NavbarSticky from "../../components/common/navbar/NavbarSticky";
import AddressIcon from "../../assets/vector/address-icon.svg";
import { MdEmail } from "react-icons/md";
import ContactForm from "../../components/common/form/ContactForm";
export default function ContactPage(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className={Styles.Wrapper}>
      <NavbarSticky />
      <Navbar />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.AboutBanner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Contact Us</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Contact Us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Styles.MainContainer}>
          <div className={Styles.Container}>
            <div className={Styles.TopContainer}>
              <ContactForm />
              <div className={Styles.AddressCardContainer}>
                <h3>AAA Consulting</h3>
                <div>
                  <img src={AddressIcon} />
                  <p>315, Nimai Place, Sector 114, Gurugram Harayana 122017</p>
                </div>
                <div>
                  <MdEmail />
                  <p>info@aaaconsulting.in</p>
                </div>
              </div>
            </div>
            <div className={Styles.BottomContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2339662100962!2d77.00666767510424!3d28.532686488608487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d10a06997276b%3A0x6dc988f6eeea7798!2sNimai%20Place!5e0!3m2!1sen!2sin!4v1698666213819!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
