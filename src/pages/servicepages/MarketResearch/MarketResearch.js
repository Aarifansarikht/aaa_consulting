import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import marketresearch from "../../../assets/servicecardimages/marketresearch.png";
function MarketResearch(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Market Research</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Market-Research
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
                <img src={marketresearch} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>
                Setting A Benchmark – Market Research Services That Scale your
                Business for Growth
              </h1>
              <p>
                Want to obtain actionable awareness into technology,
                competition, customers, products, and marketplace for getting a
                decision that is data-driven for your company? AAA consultancy
                is the right destination for all your market research
                requirements.
              </p>
              <p>
                Our market research team of experts help your business in
                identifying the potential growth opportunities and building a
                viable strategy based on detailed understanding of the overall
                marketplace and customers.
              </p>
              <p>
                We focus on employing a strong and inclusive market research
                strategy that helps our clients in maximizing research coverage.
                Our services involve solicitation of the right methods for the
                primary as well as secondary sources for gathering market
                intelligence. The consultants and experts at AAA consultancy
                highly proof read the fine prints from the data for generating
                accurate customized market research data.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default MarketResearch;
