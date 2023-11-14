import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import softdev from "../../../assets/servicecardimages/service-card-img2.png";
function SoftwareDevelopment(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Software Development</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Software-Development
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
                <img src={softdev} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Software Company in New Delhi</h1>
              <p>
                Boost your business performance with premium software
                development services. Our team is proven to be result-driven and
                well-timed in project delivery.
              </p>
              <p>
                Your business is made smarter with our emerging technology
                development services. Whatever the latest technology, our
                software development Company is here to provide dedicated
                services in that domain. Have a closer look at the wide range of
                modern services, technologies & frameworks we work upon.
              </p>
              <p>
                Advanced mobile application development company to quickly build
                a high-engaging mobile app. We prioritize interactive user
                experience and robust backend functionality. Our custom
                application development services include both native and hybrid
                apps. Know more about our working process.
              </p>
              <p>
                Our software development services include robust web
                applications with stunning & radical UI/UX. Get your web app
                customized that streamlines your business processes & attracts
                more visitors. The smooth layouts and stylish design set you
                apart from the average. Start your growth with us.
              </p>
              <h1>Our Major Modules</h1>
              <ul>
                <li>Sales</li>
                <li>Finance </li>

                <li> CRM</li>

                <li>HR & Payroll</li>

                <li>Multi Company</li>

                <li>Multi Branch</li>

                <li>MRP</li>

                <li>BOP</li>
                <li>Production</li>

                <li>Purchase</li>

                <li>Inventory</li>
                <li>Warehouse</li>
              </ul>
              <h1>Why choose Us?</h1>
              <p>
                A single platform solution providing a suite of tools to enable
                digital freight forwarding. We manage end-to-end workflows from
                quotations to shipments, jobs and invoices. We connect to your
                booking agents and custom brokers for electronic data exchange.
                We keep track of every account receivable and payable for
                maximum profitability.
              </p>
              <ul>
                <li>
                  <h2>Improved Productivity</h2>
                </li>

                <p>
                  Drive operational efficiency by reducing time on manual or
                  repetitive tasks.
                </p>
                <li>
                  <h2>Enhanced Accountability</h2>
                </li>

                <p>
                  Maintain an audit trail of key business decisions to establish
                  best in class compliance.
                </p>
                <li>
                  <h2>Increase Profits </h2>
                </li>

                <p>
                  We keep track of all revenue and costs to prevent profit
                  leaks.
                </p>
                <li>
                  <h2>Customer Satisfaction</h2>
                </li>

                <p>
                  Receive insights and alerts on any operational issues to
                  ensure you exceed customer expectations.
                </p>
                <li>
                  <h2>Customization</h2>
                </li>

                <p>
                  We understand that every business is unique, and that's why we
                  offer customizable options for our products and services.
                </p>
                <li>
                  <h2>24/7 Customer Support</h2>
                </li>

                <p>
                  We're committed to providing our customers with the best
                  possible experience.
                </p>
                <li>
                  <h2>Tally Integration</h2>
                </li>

                <p>
                  Some times, business needs a third party integration to
                  achieve their goals in a better way.
                </p>
                <li>
                  <h2>Artificial Intelligence</h2>
                </li>

                <p>
                  Enabling better decision making by analyzing data and
                  identifying trends.
                </p>
                <li>
                  <h2>A Central Platform</h2>
                </li>

                <p>
                  Manage all operations on one platform with data shared across
                  different departments.
                </p>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default SoftwareDevelopment;
