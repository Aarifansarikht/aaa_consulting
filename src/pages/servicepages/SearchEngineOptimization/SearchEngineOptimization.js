import React from "react";
import Style from "../style.module.scss";
import Styles from "./style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import SeoImg from "../../../assets/servicecardimages/Seo.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";

import IncreasedVisibility from "../../../assets/servicecardimages/Seo.png";
import ImprovedBranding from "../../../assets/servicecardimages/Branding.png";

import MoreTraffic from "../../../assets/servicecardimages/more-traffic.png";

import GreaterROI from "../../../assets/servicecardimages/greater-roi.jpeg";

import MaximisedSales from "../../../assets/servicecardimages/maximized-sales.png";

import WhiteHat from "../../../assets/servicecardimages/whitehat.jpg";

function SearchEngineOptimization(props) {
  return (
    <div className={Style.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Style.HeaderSection}>
          <div className={Style.Banner}>
            <div className={Style.Container}>
              <div className={Style.InnerBannerText}>
                <h2 className={Style.BannerText1}>
                  Search Engine Optimization
                </h2>
                <h2 className={Style.BannerText2}>
                  <a href="/">Home</a> - Search-Engine-Optimization
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
                <img src={SeoImg} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.MainContent}>
            <div className={Style.Container}>
              <h1>Trusted SEO Company in New Delhi</h1>
              <p>
                AAA Consulting can help increase your bottom line with our
                search engine optimization core services that includes Organic
                Search, On-Page SEO, Link Building, Keyword Research & Strategy
                and Activity Report.
              </p>
              <p>
                A key element to your business growth, our Search Engine
                Optimization strategies target the users that has the highest
                probability to convert into leads on your website and directs
                them there. Our experts provide a full-fledged activity report
                of all the SEO strategies executed, link building profile, and
                an account of organic reach activities. Using sustainable
                methods, our customer-driven team improves your website traffic
                flow, builds organic rankings, increases sales, attracts a lot
                of natural links, and creates your mark in the industry.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading="Increased Visibility"
                  pera=" SEO tells users and Google that your site is relevant to
                  search queries. It improves CTR and increases conversions, and
                  helps achieve better sales"
                  image={IncreasedVisibility}
                />
                <ContentCard
                  heading="Improved Branding "
                  pera="  Better SEO ranking translates into more people becoming aware
                  of your brand, thereby gaining influence among targeted
                  audience."
                  image={ImprovedBranding}
                />
                <ContentCard
                  heading=" More Traffic"
                  pera=" On-page & off-page SEO bring organic traffic to your website
                  and help it rank well on search engines."
                  image={MoreTraffic}
                />

                <ContentCard
                  heading="Greater ROI "
                  pera="With consistent SEO, you gain traction in SERPS, making it
                  easier to rank for higher-value keywords. "
                  image={GreaterROI}
                />

                <ContentCard
                  heading=" Maximised Sales"
                  pera="    With better search rankings & results, people tend to consider
                  you as a credible & trustworthy brand, thereby increasing
                  sales. "
                  image={MaximisedSales}
                />

                <ContentCard
                  heading=" 100% White Hat"
                  pera="     Whitehat techniques are update-resistant as they are algorithm
                  friendly. They help build long-term links & save time & money."
                  image={WhiteHat}
                />
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={Styles.WhyAreWeTheBest}>
        <div className={Style.Container}>
          <div className={Style.TextContent}>
            <h1>Why are we the Best SEO company in New Delhi?</h1>
            <p>
              We believe every website is unique, so we tailor our SEO
              strategies to suit each client’s needs. Our team of SEO experts
              takes the time to understand your business, target audience, and
              goals to create a customized SEO plan that delivers measurable
              results.
            </p>
            <p>
              One of our key strengths is our commitment to transparency and
              open communication with our clients. We keep you updated on every
              step of the SEO process, from the initial technical audit to
              ongoing optimization efforts. Our team is always available to
              answer any questions you may have. We focus on building long-term
              relationships with our clients and helping them succeed in the
              online marketplace.
            </p>
            <p>
              With years of experience and a proven track record of success, we
              are confident that we are the best SEO company in New Delhi. We
              use only ethical and effective SEO techniques to improve your
              website’s search engine ranking and drive targeted traffic to your
              site. If you want to take your online business to the next level,
              partner with us today and see the difference our expert SEO
              services can make.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchEngineOptimization;
