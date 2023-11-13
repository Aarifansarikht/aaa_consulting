import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import digitalimg from "../../../assets/servicecardimages/digitalMarket.png";
function DigitalMarketing(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Digital Marketing</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Digital-Marketing
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.TopImageContainer}>
          <div className={Style.Container}>
            <div className={Style.TopImageContent}>
              <div className={Style.TopImage}>
                <img src={digitalimg} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Platforms We Work With</h1>
              <ul>
                <li>
                  <h2>Brand Building and Management</h2>
                </li>
                <p>
                  Your name is not a brand until it reaches that recognition.
                  And a good branding agency helps your business to become a
                  brand.
                </p>
                <li>
                  <h2>Local SEO</h2>
                </li>
                <p>
                  Local SEO is a search engine optimization (SEO) strategy that
                  helps your business be more visible in local search results on
                  Google.
                </p>
                <li>
                  <h2>Google Maps Marketing</h2>
                </li>
                <p>
                  Whether you run a big company or own a small or mid-sized
                  business, all you need to do is promote your business.
                </p>
                <li>
                  <h2>Conversion Rate Optimization</h2>
                </li>
                <p>
                  We can assist you in optimizing your website and enhancing the
                  content that's posted on it, which should lead to an increase
                  in conversion rate.
                </p>
                <li>
                  <h2>YouTube Video Promotion</h2>
                </li>
                <p>
                  YouTube is a popular business promoting platform. We are ready
                  to help you spread your roots worldwide.
                </p>
                <li>
                  <h2>Digital Consultancy</h2>
                </li>
                <p>
                  Together, we concoct, create and deliver Digital Strategies to
                  our clients that bring the right change enabled by
                  cost-effective solutions.
                </p>
                <li>
                  <h2>Video Marketing</h2>
                </li>
                <p>
                  We take your thoughts and opinions, turn them into creative
                  concepts, find specialized videos that fit the bill and
                  ultimately help you get the desired results.
                </p>
                <li>
                  <h2>Mobile Marketing</h2>
                </li>
                <p>
                  Mobile marketing is any advertising activity that promotes
                  products and services via mobile devices, such as tablets and
                  smartphones.
                </p>
                <li>
                  <h2>Email Marketing</h2>
                </li>
                <p>
                  We customize marketing plans for each part of your audience to
                  promote products and services and bring in new customers in an
                  efficient and effective way.
                </p>
                <li>
                  <h2>Reputation Management</h2>
                </li>
                <p>
                  Upgrade your Brand Recognition, develop Brand Equity and
                  protect your most important asset from negative reviews all
                  the while building your online reputation with our Reputation.
                </p>
                <li>
                  <h2>Pay-Per-Click (PPC) Management</h2>
                </li>
                <p>
                  Pay Per Click has an instant impact and gives your brand a
                  much larger reach and exposure as a result of first page
                  exposure on major search engines.
                </p>
                <li>
                  <h2>Company Online Presence Analysis & Audit</h2>
                </li>
                <p>
                  The first step to planning and creating a strong and
                  successful digital strategy begins with a precise study of
                  your digital presence.
                </p>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default DigitalMarketing;
