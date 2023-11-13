import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import webdev from "../../../assets/servicecardimages/webdev.png";
function WebsiteDevelopment(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Website Development</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Website-Development
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
                <img src={webdev} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Web Development Company & Digital Agency</h1>
              <p>
                We are a premium web development company in New Delhi with
                extensive experience in delivering a wide range of projects for
                clients across the world. From one-page to 1000+ page websites,
                WooCommerce, and content sites, our highly-experienced
                development team provides solutions compatible with diverse
                business requirements.
              </p>
              <p>
                Our job doesn’t end with building websites – as one of the best
                SEO companies in Chennai, we believe websites are your brand’s
                window to the world. A dynamic website helps you adapt to market
                conditions and builds trust in the business.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default WebsiteDevelopment;
