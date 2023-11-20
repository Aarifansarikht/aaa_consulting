import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import socialmediaconsult from "../../../assets/servicecardimages/socialmediaconsult.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";
import ContactForm from "../../../components/common/form/ContactForm";

import FacebookMarketing from "../../../assets/servicecardimages/FacebookMarketig.jpeg";
import InstagramMarketing from "../../../assets/servicecardimages/InstagramMarketig.jpeg";

import YouTubeMarketing from "../../../assets/servicecardimages/YouTubeMarketin.jpeg";

import LinkedInMarketing from "../../../assets/servicecardimages/LinkedInMarketing.jpeg";

import PinterestMarketing from "../../../assets/servicecardimages/PinterestMarketing.jpeg";

import TwitterMarketing from "../../../assets/servicecardimages/TwitterMarketing.jpeg";

import AnalysisResearch from "../../../assets/servicecardimages/AnalysisResearch.jpeg";

import StrategyPlanning from "../../../assets/servicecardimages/StrategyPlanning.jpeg";

import CreatingUniqueContent from "../../../assets/servicecardimages/CreatingUniqueContent.jpeg";

import SchedulingTimelyPosts from "../../../assets/servicecardimages/SchedulingTimelyPosts.jpeg";

import DrivingUserEngagement from "../../../assets/servicecardimages/DrivingUserEngagement.jpeg";

import SocialMediaAdvertising from "../../../assets/servicecardimages/SocialMediaAdvertising.jpeg";

import Optimization from "../../../assets/servicecardimages/customization.jpeg";
import AccurateReporting from "../../../assets/servicecardimages/more-traffic.png";

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
        <div className={Style.MainContent}>
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
          <div className={Style.Container}>
            <h1>
              Scale Your Business With Best Social Media Consulting Company in
              New Delhi
            </h1>
            <p>
              We take pride in being one of the most experienced and
              professional social media marketing providing agencies amongst our
              peers. Our team of experts specialising in social media avenues
              will help you establish your brand through clever and effective
              social media marketing strategies. These strategies are developed
              due to the years of experience of the team, and that has proven to
              provide our clients with positive results in identifying the
              target audience for your products and services, creating
              engagement and helping in increasing the bottom line of our
              clients.
            </p>
            <p>
              Our experts are aware that every client's business and
              requirements are unique; keeping this in mind, they ensure that
              the solution provided to the clients are unique to their business.
              The output of the tailored-made strategies is evident through the
              increase in the views, engagement, retweets, comments and likes.
              In addition, we ensure that the clients increase their online
              presence through the various social media marketing solutions we
              provide, thereby building their brand awareness and brand loyalty
              amongst their consumers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1 style={{ paddingBottom: "2rem" }}>
                At AAA Consulting, We Work on the following Social Media
                Platforms:
              </h1>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading={"Facebook Marketing "}
                  pera={
                    " Reach out to people effectively and efficiently with customized Facebook marketing strategies."
                  }
                  image={FacebookMarketing}
                />
                <ContentCard
                  heading={" Instagram Marketing"}
                  pera={
                    " Connect with people, build your brand, and create trustworthy followers with Instagram marketing."
                  }
                  image={InstagramMarketing}
                />
                <ContentCard
                  heading={" YouTube Marketing"}
                  pera={
                    " Create engaging videos that best reflect your brand and business. Get people to like, share & comment on your videos."
                  }
                  image={YouTubeMarketing}
                />
                <ContentCard
                  heading={" LinkedIn Marketing"}
                  pera={
                    " Find like-minded prospective employees and strengthen your professional network through LinkedIn posts, articles, and images."
                  }
                  image={LinkedInMarketing}
                />
                <ContentCard
                  heading={"Pinterest Marketing "}
                  pera={
                    "Help your customers find your product or service with unique pins and posts and connect with everyone in the world. "
                  }
                  image={PinterestMarketing}
                />
                <ContentCard
                  heading={"Twitter Marketing "}
                  pera={
                    " Connect with users, allow them to share their ideas and opinions, and increase followers using Twitter."
                  }
                  image={TwitterMarketing}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article>
          <div className={Style.MainContent}>
            <div className={Style.Container}>
              <h1>Meet Our Creative Content and Design Team</h1>
              <p>
                At AAA Cnsulting, we believe it is high time you make Social
                Media an integral part of your marketing efforts. We have over
                two decades of combined experience in powering your business
                using avant-garde Social Media Strategies. Our end-to-end Social
                Media Services support small and medium enterprises in various
                sectors, including travel, healthcare, and healthcare
                recruitment. Call us today to supercharge your Social Media
                Marketing and connect with your target audience across all
                Social Media platforms.
              </p>
              <h2>Our SMM Process</h2>
              <ul>
                <li> Data & Insights</li>
                <li>Creative & Strategy </li>

                <li> Creative Designs</li>

                <li> Digital Branding</li>

                <li>Tracking & Optimization </li>

                <li> Increase Revenue</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className={Style.ContactContentContainer}>
          <div className={Style.Container}>
            <div className={Styles.ContactContent}>
              <div className={Styles.ContentLeft}>
                <h2>Why Choose AAA Consulting as your Social Media Partner?</h2>
                <ul>
                  <li>
                    Our work reflects our business goal – to improve your
                    company and brand reputation{" "}
                  </li>
                  <li>
                    Our experienced social media experts have handled multiple
                    projects in various industries{" "}
                  </li>

                  <li>
                    {" "}
                    Our social media managers are passionate about all things
                    creative and launch effective social media campaigns
                  </li>

                  <li>
                    {" "}
                    We can blend seamlessly into your team rather than function
                    independently. We maintain transparency at all times
                  </li>
                </ul>
              </div>
              <ContactForm />
              {/* <div className={Styles.ConsultRight}></div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1 style={{ paddingBottom: "2rem" }}>Our Work Process</h1>
              <div className={Style.CardsContainer}>
                <ContentCard
                  heading={"Analysis & Research  "}
                  pera={
                    "Our experts take time and effort to understand your business and target audience. We use this knowledge to create successful campaigns that are sure to succeed."
                  }
                  image={AnalysisResearch}
                />
                <ContentCard
                  heading={" Strategy & Planning"}
                  pera={
                    "We know your brand is unique and deserves an equally exclusive and tailored campaign to match your objectives and challenges."
                  }
                  image={StrategyPlanning}
                />
                <ContentCard
                  heading={" Creating Unique Content"}
                  pera={
                    "We focus on designing distinctive ads, videos, tag lines, and posts that will make you stand out from the crowd."
                  }
                  image={CreatingUniqueContent}
                />
                <ContentCard
                  heading={" Scheduling & Timely Posts"}
                  pera={
                    "We create compelling posts and ads for your social feed and post them regularly at the scheduled time for maximum impact."
                  }
                  image={SchedulingTimelyPosts}
                />
                <ContentCard
                  heading={"Driving User Engagement"}
                  pera={
                    "Our scaling strategies encourage users to comment, like, and share your posts, thereby boosting your organic engagement and driving website traffic."
                  }
                  image={DrivingUserEngagement}
                />
                <ContentCard
                  heading={"Social Media Advertising"}
                  pera={
                    "We can be your marketing partners, setting up campaigns, monitoring user engagement, and scheduling posts, so you can sit back and relax."
                  }
                  image={SocialMediaAdvertising}
                />
                <ContentCard
                  heading={"Optimization "}
                  pera={
                    "We'll optimize your posts and ads and tweak them using relevant data to ensure your ad spending delivers maximum impact."
                  }
                  image={Optimization}
                />
                <ContentCard
                  heading={"Accurate Reporting"}
                  pera={
                    "We cover your project with accurate reporting to keep you informed about the project at all times."
                  }
                  image={AccurateReporting}
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

export default SocialMediaConsulting;
