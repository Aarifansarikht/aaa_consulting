import React, { useRef, useState } from "react";
import Styles from "./style.module.scss";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import NavbarSticky from "../../components/common/navbar/NavbarSticky";
import AddressIcon from "../../assets/vector/address-icon.svg";
import { MdEmail } from "react-icons/md";
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
              <div className={Styles.ContactFormContainer}>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  name="contactform"
                  method="POST"
                  data-netlify="true"
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    style={{ marginTop: "12px" }}
                  />
                  <input
                    type="email"
                    name="email"
                    autocapitalize="none"
                    required
                    placeholder="Email"
                    style={{ marginTop: "12px" }}
                  />
                  <input
                    type="number"
                    name="phone"
                    required
                    placeholder="Phone"
                    style={{ marginTop: "12px" }}
                  />
                  <div className={Styles.textcontact}>
                    <textarea
                      name="message"
                      placeholder="Message"
                      style={{ marginTop: "12px" }}
                    ></textarea>
                  </div>
                  <button className={Styles.btn} type="submit">
                    Send
                  </button>
                </form>
              </div>
              <div className={Styles.AddressCardContainer}>
                <h3>AAA Consulting</h3>
                <div>
                  <img src={AddressIcon} />
                  <p>
                    509, Aggarwal Millennium Tower 1, Netaji Subhash Place, New
                    Delhi.
                  </p>
                </div>
                <div>
                  <MdEmail />
                  <p>info@aaaconsulting.in</p>
                </div>
              </div>
            </div>
            <div className={Styles.BottomContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.653090300446!2d77.14037364959721!3d28.692240833145178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023370000001%3A0x5aa938c44e5943c8!2sAAA%20Consulting!5e0!3m2!1sen!2sin!4v1698649565838!5m2!1sen!2sin"
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
