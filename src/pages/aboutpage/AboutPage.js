import React from "react";
import Styles from "./style.module.scss";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import NavbarSticky from "../../components/common/navbar/NavbarSticky";
import AboutImg from "../../assets/aid5.png";
export default function AboutPage(props) {
  return (
    <div className={Styles.Wrapper}>
      <NavbarSticky />
      <Navbar />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.AboutBanner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>About Us</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - About Us
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
              <h1>
                <strong>Who</strong>
                We are
              </h1>
            </div>

            <div className={Styles.BottomContainer}>
              <div className={Styles.LeftContainer}>
                <img src={AboutImg} />
              </div>
              <div className={Styles.RightContainer}>
                <p>
                  AAA Consulting is a Consulting firm that is tech-empowered for
                  multidisciplinary solutions. Instituted by highly professional
                  solutions providers, we lead the industry for customized
                  strategies for every client as per their goals and
                  requirements. Our team of highly skilled engineers are experts
                  in their respective fields, ensuring the highest quality of
                  work and innovative solutions.
                </p>
                <p>
                  Our services include software development, where we design and
                  develop custom software solutions tailored to our client's
                  specific requirements. We also specialize in managing online
                  reputations, helping businesses build and maintain a positive
                  online image through strategic planning and effective
                  reputation management techniques.
                </p>
                <p>
                  Additionally, we offer cloud computing services, enabling
                  businesses to securely store and access their data and
                  applications on remote servers. This allows for flexibility,
                  scalability, and cost-efficiency.
                </p>
                <p>
                  With our decade of experience in the industry, we have
                  successfully served a diverse range of clients from various
                  sectors, including small businesses, startups, and large
                  corporations. We pride ourselves on delivering timely and
                  efficient solutions that address our clients' problems and
                  help them achieve their objectives.
                </p>
                <p>
                  At our core, we prioritize client satisfaction and strive to
                  provide constituting services that meet their specific needs.
                  We believe in building long-term relationships with our
                  clients, becoming their trusted partners in technology and
                  innovation.
                </p>
                <p>
                  Contact us today to discuss your requirements and let us
                  provide you with the customised solutions you need to succeed
                  in today's fast-paced and ever-changing technological
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
