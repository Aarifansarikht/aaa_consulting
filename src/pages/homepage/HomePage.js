import React from "react";
import Styles from "./style.module.scss";
import Navbar from "../../components/common/navbar/Navbar";
import BannerImage from "../../assets/vector/banner-image.png";
import BannerTriangle from "../../assets/vector/triangle.svg";
import Footer from "../../components/common/footer/Footer";
import RightCorner from "../../assets/vector/right-corner.svg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import ServiceImg1 from "../../assets/servicecardimages/service-card-img1.png";
import ServiceImg2 from "../../assets/servicecardimages/service-card-img2.png";
import ServiceImg3 from "../../assets/servicecardimages/service-card-img3.png";
import ServiceImg4 from "../../assets/servicecardimages/service-card-img4.png";
import ServiceImg5 from "../../assets/servicecardimages/ContentImg1.png";
import ServiceImg6 from "../../assets/servicecardimages/mobileappdev.png";

import NavbarSticky from "../../components/common/navbar/NavbarSticky";

import Clientimg1 from "../../assets/clientsimages/Group 1.png";
import Clientimg2 from "../../assets/clientsimages/Group 2.png";
import Clientimg3 from "../../assets/clientsimages/Group 3.png";
import Clientimg4 from "../../assets/clientsimages/Group 4.png";
import Clientimg5 from "../../assets/clientsimages/Group 5.png";
import Clientimg6 from "../../assets/clientsimages/Group 6.png";
import Clientimg7 from "../../assets/clientsimages/Group 7.png";
import Clientimg8 from "../../assets/clientsimages/Group 8.png";
import Clientimg9 from "../../assets/clientsimages/Group 9.png";
import Clientimg10 from "../../assets/clientsimages/Group 10.png";
import Clientimg11 from "../../assets/clientsimages/Group 11.png";
import Clientimg12 from "../../assets/clientsimages/Group 12.png";
import Clientimg13 from "../../assets/clientsimages/Group 13.png";
import Clientimg14 from "../../assets/clientsimages/Group 14.png";
import Clientimg15 from "../../assets/clientsimages/Group 15.png";
import Clientimg16 from "../../assets/clientsimages/Group 16.png";
import Clientimg17 from "../../assets/clientsimages/Group 17.png";
import Clientimg18 from "../../assets/clientsimages/Group 18.png";
import Clientimg19 from "../../assets/clientsimages/Group 19.png";
import Clientimg20 from "../../assets/clientsimages/Group 20.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ClientimgArray = [
  Clientimg1,
  Clientimg2,
  Clientimg3,
  Clientimg4,
  Clientimg5,
  Clientimg6,
  Clientimg7,
  Clientimg8,
  Clientimg9,
  Clientimg10,
  Clientimg11,
  Clientimg12,
  Clientimg13,
  Clientimg14,
  Clientimg15,
  Clientimg16,
  Clientimg17,
  Clientimg18,
  Clientimg19,
  Clientimg20,
];

export default function HomePage(props) {
  return (
    <div className={StyleSheet.Wrapper}>
      <NavbarSticky />
      <Navbar />
      <section className={Styles.HeroSection}>
        <div className={Styles.Container}>
          <div className={Styles.HeroLeft}>
            <h2>Elevating brands in the digital age.</h2>
            <div className={Styles.bannerLeftContent}>
              <h1>
                Your <b>success</b>, our<b>Journey</b>
              </h1>
              <div className={Styles.BannerBtn}>
                <button>Get Quote</button>
              </div>
            </div>
          </div>
          <div className={Styles.HeroRight}>
            <img src={BannerTriangle} className={Styles.BannerImageInnner} />
            <img src={BannerImage} className={Styles.BannerImageUpper} />
          </div>
        </div>
      </section>
      {/* =================OurClientSection=======================
      <section className={Styles.OurClientSection}>
        <div className={Styles.Container}>
          <h1>Our Clients</h1>
          <div className={Styles.Clients}>
            <div className={Styles.Grid}>
              {[...Array(19)].map((_, index) => (
                <div key={index} className={Styles.GridItem}>
                  <img src={ClientimgArray[index]} />
                </div>
              ))}
            </div>
            <div className={Styles.Swiper}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  600: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                loop
              >
                {ClientimgArray.slice(0, 20).map((img, index) => (
                  <SwiperSlide key={index} className={Styles.CenterImage}>
                    <img src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
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
            {/* <ServiceCard
              image={ServiceImg1}
              heading={"Digital Marketing & Market Research"}
              pera={
                "Digital marketing is a great way to build brand awareness and loyalty. But only when it is relevant because content without context is useless. At AAA Consulting, we not only aim to make your content impactful but profitable as well."
              }
              link="/Digital-Marketing"
            /> */}
            <ServiceCard
              image={ServiceImg5}
              heading={"Online Reputation Management"}
              pera={
                "AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients."
              }
              link="/Online-Reputation-Management"
            />
            <ServiceCard
              image={ServiceImg2}
              heading={"Software Development"}
              pera={
                "As companies grow larger, communication can become more complex and difficult to manage. Departments and teams can become isolated, making it challenging to share information and collaborate effectively."
              }
              link="/Software-Development"
            />
            {/* <ServiceCard
              image={ServiceImg3}
              heading={"Cloud Services"}
              pera={
                "Cloud has emerged as an enabler of transformation, but there are still significant barriers to cloud expansion and many enterprises are struggling to prove transformation value or to tie IT value to business outcomes. AAA Consulting provide a 360-degree approach identifying and solving challenges and driving transformation forward."
              }
              link="/Cloud-Computing"
            />
            <ServiceCard
              image={ServiceImg4}
              heading={"AI Medical Diagnosis"}
              pera={
                "Artificial intelligence in diagnostics has the potential to make healthcare more accessible, affordable, and efficient. 3 ways AI can potentially have a strong impact include enhancing efficiency and accuracy of diagnostics, improving image recognition, and alleviating administrative and laboratory resource pressures"
              }
              link="/Intelligent-Medical-Diagnosis"
            /> */}
            <ServiceCard
              image={ServiceImg6}
              heading={"Mobile Application Development"}
              pera={
                "As the world becomes increasingly digital, mobile devices have become an integral part of our daily lives. People use mobile apps for everything from shopping and socializing to banking and entertainment. With so many people using mobile devices, it’s important for businesses to have a strong mobile presence."
              }
              link="/Mobile-Application-Development"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
