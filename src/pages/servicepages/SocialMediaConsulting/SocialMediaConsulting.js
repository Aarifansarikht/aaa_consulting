import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import socialmediaconsult from "../../../assets/servicecardimages/socialmediaconsult.png";
function SocialMediaConsulting(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Social Media Consulting</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Social-Media-Consulting
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
                <img src={socialmediaconsult} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.MainContent}>
            <div className={Style.Container}>
              <h1>
                Scale Your Business With Best Social Media Consulting Company in
                New Delhi
              </h1>
              <p>
                We take pride in being one of the most experienced and
                professional social media marketing providing agencies amongst
                our peers. Our team of experts specialising in social media
                avenues will help you establish your brand through clever and
                effective social media marketing strategies. These strategies
                are developed due to the years of experience of the team, and
                that has proven to provide our clients with positive results in
                identifying the target audience for your products and services,
                creating engagement and helping in increasing the bottom line of
                our clients.
              </p>
              <p>
                Our experts are aware that every client's business and
                requirements are unique; keeping this in mind, they ensure that
                the solution provided to the clients are unique to their
                business. The output of the tailored-made strategies is evident
                through the increase in the views, engagement, retweets,
                comments and likes. In addition, we ensure that the clients
                increase their online presence through the various social media
                marketing solutions we provide, thereby building their brand
                awareness and brand loyalty amongst their consumers.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default SocialMediaConsulting;
