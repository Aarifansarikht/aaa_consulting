import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import webdev from "../../../assets/servicecardimages/webdev.png";
import ContentCard from "../../../components/ServiceCommon/ContentCard";

import checklist from "../../../assets/servicecardimages/checklist.jpg";
import PowerfulServer from "../../../assets/servicecardimages/PowerfulServer.jpg";

import PremiumDesign from "../../../assets/servicecardimages/PremiumDesign.jpg";

import UnlimitedDesignRevisions from "../../../assets/servicecardimages/unlimiteddesign.jpg";

import PremiumWebsite from "../../../assets/servicecardimages/PremiumWebsite.jpg";

import GoogleFriendlyWebsite from "../../../assets/servicecardimages/googlefriendly.jpg";
import ECommerceWebsite from "../../../assets/servicecardimages/E-CommerceWebsite.jpg";

import FreeStagingWebsite from "../../../assets/servicecardimages/freestagingwebsite.jpg";

import CodeLevelSEO from "../../../assets/servicecardimages/codelevelseo.jpg";

function WebsiteDevelopment(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Website Development</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Website-Development
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
                <img src={webdev} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.Container}>
          <div className={Style.TextContent}>
            <h1>Web Development Company & Digital Agency</h1>
            <p>
              We are a premium web development company in New Delhi with
              extensive experience in delivering a wide range of projects for
              clients across the world. From one-page to 1000+ page websites,
              WooCommerce, and content sites, our highly-experienced development
              team provides solutions compatible with diverse business
              requirements.
            </p>
            <p>
              Our job doesn’t end with building websites – as one of the best
              SEO companies in Chennai, we believe websites are your brand’s
              window to the world. A dynamic website helps you adapt to market
              conditions and builds trust in the business.
            </p>

            <h1>Effective Web Development Solutions</h1>
            <p>
              We are one of the best WordPress web development companies in New
              Delhi, creating clean, functional, intuitive, and secure websites.
              With user experience at the center stage, our designs seek to
              compel users to engage with your website, thereby elevating your
              brand and business.
            </p>
            <p>
              You’ll interact with proficient and certified developers who
              ensure 100% customer satisfaction and guaranteed on-time project
              delivery. Our strict testing protocols provide a bug-free,
              seamless website delivery.
            </p>
          </div>
        </div>
      </section>
      <section>
        <article>
          <div className={Style.TextContent}>
            <div className={Style.Container}>
              <h1>
                International Standard WordPress Development Company In New
                Delhi
              </h1>
              <div
                className={Style.CardsContainer}
                style={{ marginTop: "1rem" }}
              >
                <ContentCard
                  heading={"90+ Dev Checklist "}
                  pera={" "}
                  image={checklist}
                />
                <ContentCard
                  heading={"Powerful Server "}
                  pera={" "}
                  image={PowerfulServer}
                />

                <ContentCard
                  heading={"Premium Design"}
                  pera={" "}
                  image={PremiumDesign}
                />

                <ContentCard
                  heading={"Unlimited Design Revisions"}
                  pera={" "}
                  image={UnlimitedDesignRevisions}
                />

                <ContentCard
                  heading={"Premium Website"}
                  pera={" "}
                  image={PremiumWebsite}
                />

                <ContentCard
                  heading={"Google Friendly Website "}
                  pera={" "}
                  image={GoogleFriendlyWebsite}
                />

                <ContentCard
                  heading={"E-Commerce Website"}
                  pera={" "}
                  image={ECommerceWebsite}
                />
                <ContentCard
                  heading={"Free Staging Website"}
                  pera={" "}
                  image={FreeStagingWebsite}
                />

                <ContentCard
                  heading={"Code Level SEO"}
                  pera={" "}
                  image={CodeLevelSEO}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className={Style.MainContent}>
          <div className={Style.Container}>
            <h1>How we handle your website development project?</h1>
            <p>
              We have implemented an international standard website development
              checklist to provide an integrated experience that is hassle-free,
              smooth, and easy to use. The entire project is divided into 90
              tasks and assigned to nine teams who work simultaneously and
              consistently to deliver your project at the promised time.
            </p>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>
                Here’s a timeline sheet to explain how the project is executed
                from start to finish:
              </h1>
              <h2>Business Analysis</h2>
              <p>
                The Business Analysis Team is your first point of contact for
                the project. Our business analysts gather information from the
                client regarding their business, target audience, and industry
                in general. We also discuss the type of website that justifies
                your requirements, number of pages, sitemap design, etc. The
                team is also responsible for daily project-related updates and
                other communication.
              </p>

              <h2>Keyword Researchers</h2>
              <p>
                Based on this information, our Keyword Researchers work on
                appropriate keywords and other search terms related to your
                business. We then discuss the Deep Keyword Research Report with
                the client to ensure they’re relevant enough to target the
                intended audience. We’ll assign keywords to all elements,
                including images.
              </p>

              <h2>Server Team</h2>
              <p>
                The Server Team performs technical analysis of the current
                website and server to look for potential issues. The team offers
                suggestions for choosing a suitable server for clients who do
                not have a website. With over two decades of combined
                experience, our Server Team is perfectly capable of handling all
                current and potential issues and achieving optimum server
                performance. We even develop the client’s website on their
                server.
              </p>

              <h2>WordPress Developers</h2>
              <p>
                With an average experience of 6 to 9 years, our WordPress
                developers can ensure a premium website development experience.
                We offer unlimited design revisions, i.e., we’ll work with you
                to ensure each page does what it’s supposed to do when the
                client visits. The Web Development Team then sets about to
                ensure the website passes Core Web Vitals, achieving a page
                speed of 93+ for desktops.
              </p>

              <h2>Testing Team</h2>
              <p>
                The Testing Team performs cross-browser and cross-device testing
                to ensure each website page works as intended when accessed
                through different browsers and devices. Interoperability and
                cross-browser compatibility are the keys to user experience and
                responsiveness.
              </p>

              <h2>Content Team</h2>
              <p>
                The Content Team uses approved keywords to write relevant and
                unique content for all pages. We’ll also write unique metadata
                for each page, including meta title, meta description, and H1
                content.
              </p>

              <h1>
                The SEO Team ensures the website is search-friendly. This is how
                it’s done:
              </h1>
              <ul>
                <li>
                  {" "}
                  We collect existing website and image URLs and create 301
                  Redirects to ensure the existing SEO value on these pages
                  passes on to the new URLs.
                </li>
                <li>
                  The Technical SEO team coordinates with the Server Team to
                  ensure all technical aspects of the website are correct.{" "}
                </li>

                <li>
                  The SEO Team also works with developers to check for on-page
                  SEO parameters like title tags, structured data, keyword
                  density, etc.{" "}
                </li>

                <li>
                  The team also coordinates with our graphic designers and web
                  developers to ensure image optimization, i.e., images are of
                  the right size, in the correct format, have the right file
                  name and alt tags, include captions, etc.{" "}
                </li>

                <li>
                  The Graphic Design Team works with our SEO specialists, web
                  developers, and business analysts to ensure the images are
                  unique and likable by both search engines and human users. The
                  team is responsible for all designs related to the website,
                  including logos and favicons. As an SEO-friendly web
                  development company, SEO is at the core of all our web
                  development efforts.{" "}
                </li>

                <li>
                  The Social Media Team collates social media profiles and
                  customizes them to match your brand and target audience. Our
                  developers integrate social media buttons into your website.{" "}
                </li>
                <li>
                  We provide value-added tasks: Business Email setup, Contact
                  Form setup, Google reCAPTCHA integration, Google Tag Manager
                  integration, Google Search Console setup, GA 4 setup, SSL
                  Certification installation, and WooCommerce integration.{" "}
                </li>
                <li>
                  Are you a small or micro business looking to leverage the
                  digital ecosystem? At Wizi Digital, we have put together a
                  website development & promotion package that’s just right for
                  you – it fits your budget but includes everything you will
                  need to get your business on the internet. Visit us to learn
                  more about our customized website development package for
                  small businesses.
                </li>
                <li>
                  After completion, the Server Team moves the website from
                  staging to live. The SEO team then monitors the website for
                  one week to look for potential issues and ensure everything
                  goes smoothly.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div className={Style.MainContent}>
          <div className={Style.Container}>
            <h1>Why Choose AAA Consulting as your Web Development Company?</h1>
            <ul>
              <li>100% Quality Guaranteed </li>
              <li>Excellent Customer Support </li>

              <li> Long Term Trusted Relationships</li>

              <li> Strategic Approach</li>

              <li>Proven Results </li>

              <li>We're Industry Leaders </li>

              <li> 100% Safe & Secure</li>

              <li>Get Dedicated Team </li>
              <li>Transparency</li>
              <li>Never Outsource Your Work</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WebsiteDevelopment;
