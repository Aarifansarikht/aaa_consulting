import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import softdev from "../../../assets/servicecardimages/service-card-img2.png";
function SoftwareDevelopment(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Software Development</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Software-Development
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
                <img src={softdev} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Software Company in New Delhi</h1>
              <p>
                Boost your business performance with premium software
                development services. Our team is proven to be result-driven and
                well-timed in project delivery.
              </p>
              <p>
                Your business is made smarter with our emerging technology
                development services. Whatever the latest technology, our
                software development Company is here to provide dedicated
                services in that domain. Have a closer look at the wide range of
                modern services, technologies & frameworks we work upon.
              </p>
              <p>
                Advanced mobile application development company to quickly build
                a high-engaging mobile app. We prioritize interactive user
                experience and robust backend functionality. Our custom
                application development services include both native and hybrid
                apps. Know more about our working process.
              </p>
              <p>
                Our software development services include robust web
                applications with stunning & radical UI/UX. Get your web app
                customized that streamlines your business processes & attracts
                more visitors. The smooth layouts and stylish design set you
                apart from the average. Start your growth with us.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default SoftwareDevelopment;
