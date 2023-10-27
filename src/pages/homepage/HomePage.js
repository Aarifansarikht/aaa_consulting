import React from "react";
import Styles from "./style.module.scss";
import Navbar from "../../components/common/navbar/Navbar";
import BannerImage from "../../assets/vector/banner-image.svg";
import Footer from "../../components/common/footer/Footer";
import RightCorner from "../../assets/vector/right-corner.svg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import ServiceImg1 from "../../assets/servicecardimages/service-card-img1.svg";
import ServiceImg2 from "../../assets/servicecardimages/service-card-img2.svg";
import ServiceImg3 from "../../assets/servicecardimages/service-card-img3.svg";
import ServiceImg4 from "../../assets/servicecardimages/service-card-img4.svg";
export default function HomePage(props) {
  return (
    <div className={StyleSheet.Wrapper}>
      <Navbar />
      <section className={Styles.HeroSection}>
        <div className={Styles.Container}>
          <div className={Styles.HeroLeft}>
            <h2>Elevating brands in the digital age.</h2>
            <h1>
              Your <b>success</b>, our<b>Journey</b>
            </h1>
            <div className={Styles.BannerBtn}>
              <button>Get Quote</button>
            </div>
          </div>
          <div className={Styles.HeroRight}>
            <img src={BannerImage} />
          </div>
        </div>
      </section>
      {/* =================OurClientSection=======================*/}
      <section className={Styles.OurClientSection}>
        <div className={Styles.Container}>
          <h1>Our Clients</h1>
          <div className={Styles.Clients}></div>
        </div>
      </section>
      {/* ==================whowearesection=========================== */}
      <section className={Styles.WhoWeAreSection}>
        <div className={Styles.Container}>
          <div className={Styles.WhoWeAreContent}>
            <h1>Who we are?</h1>
            <p>
              <strong>Welcome to AAA Consulting</strong> – where expertise and
              innovation unite! We're a leading tech-powered consulting firm
              with specialists in Reputation Management, SEO, Digital Marketing,
              and PR. Dedicated to customized solutions, we help businesses
              thrive online through strategic insights, security management, and
              expert threat handling. Join us for a transformative journey to
              success!
            </p>
          </div>
        </div>
      </section>
      {/* =====================What we do section================= */}

      <section className={Styles.WhatWeDoSection}>
        <div className={Styles.WhatWeDoOuterSection}>
          <h1>What We do?</h1>
        </div>
        <div className={Styles.ServiceCardsOuter}>
          <img src={RightCorner} className={Styles.RightCorner} />
          <div className={Styles.Container}>
            <ServiceCard
              image={ServiceImg1}
              heading={"Digital Marketing & Market Research"}
              pera={
                "AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients."
              }
            />
            <ServiceCard
              image={ServiceImg2}
              heading={"Software Development"}
              pera={
                "AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients."
              }
            />
            <ServiceCard
              image={ServiceImg3}
              heading={"Cloud Services"}
              pera={
                "AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients."
              }
            />
            <ServiceCard
              image={ServiceImg4}
              heading={"AI Medical Diagnosis"}
              pera={
                "AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients."
              }
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
