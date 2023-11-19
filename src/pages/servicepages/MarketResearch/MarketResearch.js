import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import marketresearch from "../../../assets/servicecardimages/marketresearch.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";
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
      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1>Our Services</h1>
              <div
                className={Style.CardsContainer}
                style={{ marginTop: "1rem" }}
              >
                <ContentCard
                  heading={"Product Development "}
                  pera={
                    "Launch tests | Concept tests | Product tests | Packaging Tests "
                  }
                  image={" "}
                />
                <ContentCard
                  heading={"Tracking Market "}
                  pera={
                    " Purchase / Consumption Tracker | Brand Health check | Communication test | Promotion test | BTL activity test | Opinion polls |"
                  }
                  image={" "}
                />

                <ContentCard
                  heading={"CX Studies"}
                  pera={
                    " Customer satisfaction | Customer transaction | Employee satisfaction | Net promoter score | Mystery Shopping"
                  }
                  image={" "}
                />

                <ContentCard
                  heading={"Data Handling and management"}
                  pera={
                    "Our services here include Quality Data collection, Data entry, Data Processing and Data Mining"
                  }
                  image={" "}
                />

                <ContentCard
                  heading={"Analytics Support and Data Analysis"}
                  pera={
                    "Our expert team gather valuable customer information, which helps in more accurate and deeper customer profiles that in turn support personalization and customization."
                  }
                  image={" "}
                />

                <ContentCard
                  heading={"Market Research for Startups"}
                  pera={
                    "Starting a business is easy but to make it successful is complex. MarketGenics ensures how to take off your business for a long run, with accurate facts and figures."
                  }
                  image={" "}
                />

                <ContentCard
                  heading={"E-Commerce Website"}
                  pera={" "}
                  image={" "}
                />
                <ContentCard
                  heading={"Free Staging Website"}
                  pera={" "}
                  image={" "}
                />

                <ContentCard
                  heading={"Code Level SEO"}
                  pera={" "}
                  image={" "}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className={Style.MainContent}>
          <div className={Style.Container}>
            <h1>Why Us Effective Market Research Solutions</h1>
            <ul>
              <li>
                We are the pioneers of carrying out research works for startups
              </li>
              <li>Customized Research Solutions in fastest turnaround time</li>

              <li>True insights for market analysis</li>

              <li> Real-time respondents spread across Pan India.</li>

              <li>Accurate data collection for proper analysis</li>

              <li>Internal resources</li>

              <li>Competitive pricing</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MarketResearch;
