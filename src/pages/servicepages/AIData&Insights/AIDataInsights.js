import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import aidataimg from "../../../assets/servicecardimages/Ai_data.png";
function AIDataInsights(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>AI Data & Insights</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - AI-Data-and-Insights
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
                <img src={aidataimg} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Unlocking Infinite Possibilities</h1>
              <p>
                Your data is your most valuable asset — holding real potential
                to revolutionize what your business can achieve. But without a
                modern solution to unify, process and deliver your analytics,
                you risk missing out on key information to innovate, adapt and
                grow.
              </p>
              <p>
                We’ll assess your current data landscape, modernize existing
                solutions and identify high-value opportunities to use data and
                AI in your organization to consistently deliver success. Through
                a defined strategy and end-to-end capabilities, we establish the
                processes and tools to meet your business objectives.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default AIDataInsights;
