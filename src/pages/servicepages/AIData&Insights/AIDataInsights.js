import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import aidataimg from "../../../assets/servicecardimages/Ai_data.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";

import MaximizeValue from "../../../assets/servicecardimages/maximizevaluedata.jpg";
import ServicesAtScale from "../../../assets/servicecardimages/serviceatscale.jpg";
import customersatisfration from "../../../assets/servicecardimages/customer-satisfaction.jpeg";
import ReduceRepeattask from "../../../assets/servicecardimages/reducerepeattask.jpg";
import ImproveEfficency from "../../../assets/servicecardimages/improveefficiency.jpg";
import MakeMoreDecision from "../../../assets/servicecardimages/makemoredecision.jpg";
import aicenter from "../../../assets/servicecardimages/aicenter.jpeg";
import faststart from "../../../assets/servicecardimages/faststart.jpeg";
import mlq from "../../../assets/servicecardimages/mlq.jpeg";
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

              <h1>86%</h1>
              <p>
                of organizations have already adopted or are considering
                data-driven projects.*
              </p>
              <h1>64%</h1>
              <p>
                of leaders agree that data collection and analysis changed how
                they’ve conducted business in the past three years.*
              </p>
              <h1>39%</h1>
              <p>
                of IT decision-makers report that data and business analytics
                would receive the most IT investment in their organization.*
              </p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1 style={{ paddingBottom: "2rem" }}>
                Meaningful outcomes delivered through data
              </h1>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading="Maximize the value of your data assets."
                  pera="Modern platforms collect, analyze and manage data from diverse sources to harness untapped business potential and grow return on investment."
                  image={MaximizeValue}
                />
                <ContentCard
                  heading="Quickly innovate products and services at scale."
                  pera="Predictive analytics and AI-powered trend forecasting enables you to identify new business opportunities and gain a competitive advantage."
                  image={ServicesAtScale}
                />
                <ContentCard
                  heading="Improve customer experiences."
                  pera="Processing customer data allows you to automate inventory management, better understand purchasing decisions and market to your audience more effectively."
                  image={customersatisfration}
                />
                <ContentCard
                  heading="Reduce repetitive tasks.
                  "
                  pera="Automation solutions fill workflow gaps and enhance productivity — so your team can focus on high-value tasks."
                  image={ReduceRepeattask}
                />
                <ContentCard
                  heading="Improve efficiency and reduce human error."
                  pera={
                    "Analytics reveal opportunities to optimize processes and boost performance, all while making your operations more reliable."
                  }
                  image={ImproveEfficency}
                />
                <ContentCard
                  heading="Make more informed business decisions."
                  pera="Business intelligence solutions provide a comprehensive view of data to answer critical questions and determine the next steps to meet your needs."
                  image={MakeMoreDecision}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className={Style.TextContent}>
          <div className={Style.Container}>
            <h1 style={{ paddingBottom: "2rem" }}>Consulting Services</h1>
            <p>
              Our consulting services — including our fast starts, workshops and
              accelerators — guide you toward becoming a business of the future
              through expert advice and thoughtful strategies.
            </p>
            <div className={Style.CardsContainer}>
              <ContentCard
                heading="AI Center of Excellence"
                pera="Work with an experienced team of data scientists, solutions architects and consultants to maximize the value of AI. In 12 weeks, you’ll get a complete assessment of your AI development program, use cases for AI in your organization, a custom roadmap for future projects, and one high-value AI model taken from ideation to execution.

                  "
                image={aicenter}
              />
              <ContentCard
                heading="Insight Lens Fast Start"
                pera="Maximizing the impact of your analytics requires merging data from multiple sources to see the full story of your IT landscape. However, it can be challenging to determine how your technology should interact and how to transition from legacy systems to a modern solution. Insight Lens accelerates your journey to a modern data platform with tailored support to drive efficiency and adoption."
                image={faststart}
              />
              <ContentCard
                heading="MLOps Accelerator"
                pera="The MLOps Accelerator reduces friction and cost of delivering AI in six weeks, working hand in hand with your stakeholders to build a sustainable and actionable framework around your model building."
                image={mlq}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AIDataInsights;
