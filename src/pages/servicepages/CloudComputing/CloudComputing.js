import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import cloudImage from "../../../assets/servicecardimages/service-card-img3.png";
function CloudComputing(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Cloud Computing</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> -Cloud-Computing
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
                <img src={cloudImage} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Cloud Services</h1>
              <p>
                Secure and managed cloud solutions that drive the outcome-based
                modernization you need
              </p>
              <h2>Unlock innovation with the right cloud solutions</h2>
              <p>
                Cloud has emerged as an enabler of transformation, but there are
                still significant barriers to cloud expansion and many
                enterprises are struggling to prove transformation value or to
                tie IT value to business outcomes. AAA Consulting Cloud Services
                provide a 360-degree approach identifying and solving challenges
                and driving transformation forward.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default CloudComputing;
