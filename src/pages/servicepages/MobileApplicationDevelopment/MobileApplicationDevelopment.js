import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import mpobileapp from "../../../assets/servicecardimages/mobileappdev.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";
import iosdev from "../../../assets/servicecardimages/iosdev.jpeg";
import androiddev from "../../../assets/servicecardimages/androiddev.jpeg";

import hybriddev from "../../../assets/servicecardimages/hybrid.jpeg";

function MobileApplicationDevelopment(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>
                  Mobile Application Development
                </h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Mobile-Application-Development
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.MainContent}>
          <section>
            <div className={Style.TopImageContainer}>
              <div className={Style.Container}>
                <div className={Style.TopImageContent}>
                  <div className={Style.TopImage}>
                    <img src={mpobileapp} height="100%" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={Style.Container}>
            <h1>Mobile App Development Company</h1>
            <p>
              As the world becomes increasingly digital, mobile devices have
              become an integral part of our daily lives. People use mobile apps
              for everything from shopping and socializing to banking and
              entertainment. With so many people using mobile devices, it’s
              important for businesses to have a strong mobile presence. This is
              where a mobile app development company can help.
            </p>
            <p>
              We are a team of skilled and experienced mobile app developers
              dedicated to helping businesses and organizations bring their
              ideas to life. We specialize in creating custom mobile
              applications for iOS and Android devices, tailored to your
              specific needs and requirements.
            </p>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1 style={{ paddingBottom: "2rem" }}>
                Our Mobile App Development Services
              </h1>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading="Ios App Development"
                  pera="  We are a full service iOS app development company with expertise
                  in Apple User Interface guidelines & latest apple app frameworks
                  like Swift Ul, Adaptivity."
                  image={iosdev}
                />
                <ContentCard
                  heading="Android App Development"
                  pera="  As a leading Android app development company, we have developed
                  and deployed various applications for the Android ecosystem from
                  Mobile, TV to Wearables."
                  image={androiddev}
                />
                <ContentCard
                  heading="Hybrid App Developmen"
                  pera=" Our Hybrid app development team have developed apps for multiple
                  platforms with a single code base with frameworks like Xamarin,
                  lonic, React Native & Phonegap."
                  image={hybriddev}
                />
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default MobileApplicationDevelopment;
