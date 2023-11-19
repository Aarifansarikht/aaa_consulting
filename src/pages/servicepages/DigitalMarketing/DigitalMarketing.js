import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import digitalimg from "../../../assets/servicecardimages/digitalMarket.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";
import hybriddev from "../../../assets/servicecardimages/hybrid.jpeg";

import localseo from "../../../assets/servicecardimages/local-seo.jpg";
import Googlemapmarket from "../../../assets/servicecardimages/googlemap-marketing.jpg";

import conversionrate from "../../../assets/servicecardimages/conversion-rate.jpg";

import digitalconsult from "../../../assets/servicecardimages/marketresearch.png";

import youtubepromotion from "../../../assets/servicecardimages/youtubepromotion.jpeg";

import maximazedsale from "../../../assets/servicecardimages/maximized-sales.png";
import WhiteHat from "../../../assets/servicecardimages/whitehat.jpg";
import platformwework from "../../../assets/servicecardimages/platform-we -work.jpeg";
import VideoMarketing from "../../../assets/servicecardimages/video-marketing.jpeg";

import EmailMarketing from "../../../assets/servicecardimages/email-marketing.jpeg";

import MobileMarketing from "../../../assets/servicecardimages/mobile-marketing.jpeg";

import CompanyOnline from "../../../assets/servicecardimages/company-online-presence.jpeg";
import OnlineReputation from "../../../assets/servicecardimages/ContentImg1.png";
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
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1 style={{ paddingBottom: "2rem" }}>Platforms We Work With</h1>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading="Platforms We Work With"
                  pera=" SEO tells users and Google that your site is relevant to
                  search queries. It improves CTR and increases conversions, and
                  helps achieve better sales"
                  image={platformwework}
                />
                <ContentCard
                  heading="Local SEO"
                  pera="  Better SEO ranking translates into more people becoming aware
                  of your brand, thereby gaining influence among targeted
                  audience."
                  image={localseo}
                />
                <ContentCard
                  heading=" Google Maps Marketing"
                  pera=" On-page & off-page SEO bring organic traffic to your website
                  and help it rank well on search engines."
                  image={Googlemapmarket}
                />

                <ContentCard
                  heading="Conversion Rate Optimization "
                  pera="With consistent SEO, you gain traction in SERPS, making it
                  easier to rank for higher-value keywords. "
                  image={conversionrate}
                />

                <ContentCard
                  heading=" YouTube Video Promotion"
                  pera="    With better search rankings & results, people tend to consider
                  you as a credible & trustworthy brand, thereby increasing
                  sales. "
                  image={youtubepromotion}
                />

                <ContentCard
                  heading=" 100% White Hat"
                  pera="     Whitehat techniques are update-resistant as they are algorithm
                  friendly. They help build long-term links & save time & money."
                  image={WhiteHat}
                />

                <ContentCard
                  heading="Digital Consultancy "
                  pera="  Together, we concoct, create and deliver Digital Strategies to
                  our clients that bring the right change enabled by
                  cost-effective solutions."
                  image={digitalconsult}
                />
                <ContentCard
                  heading=" Video Marketing"
                  pera=" We take your thoughts and opinions, turn them into creative
                  concepts, find specialized videos that fit the bill and
                  ultimately help you get the desired results. "
                  image={VideoMarketing}
                />

                <ContentCard
                  heading="Mobile Marketing "
                  pera="      Mobile marketing is any advertising activity that promotes
                  products and services via mobile devices, such as tablets and
                  smartphones."
                  image={MobileMarketing}
                />

                <ContentCard
                  heading="Email Marketing "
                  pera="    We customize marketing plans for each part of your audience to
                  promote products and services and bring in new customers in an
                  efficient and effective way."
                  image={EmailMarketing}
                />

                <ContentCard
                  heading="Reputation Management "
                  pera="   Upgrade your Brand Recognition, develop Brand Equity and
                  protect your most important asset from negative reviews all
                  the while building your online reputation with our Reputation."
                  image={OnlineReputation}
                />
                <ContentCard
                  heading=" Pay-Per-Click Management"
                  pera="  Pay Per Click has an instant impact and gives your brand a
                  much larger reach and exposure as a result of first page
                  exposure on major search engines."
                  image={maximazedsale}
                />
                <ContentCard
                  heading="Company Online Presence Analysis & Audit "
                  pera=" The first step to planning and creating a strong and
                  successful digital strategy begins with a precise study of
                  your digital presence. "
                  image={CompanyOnline}
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

export default DigitalMarketing;
