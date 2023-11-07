import React from "react";
import Style from "../style.module.scss";
import Styles from "./style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import ServiceCardMedium from "../../../components/ServiceCommon/ServiceCardMedium";
import ContentCard from "../../../components/ServiceCommon/ContentCard";
import ContactForm from "../../../components/common/form/ContactForm";
import rating from "../../../assets/servicecardimages/Online-Reputation-Management.png";
import NegativeSearch from "../../../assets/servicecardimages/nagative-search.png";
export default function OnlineRepuManage(props) {
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
                  Online Reputation Management
                </h2>
                <h2 className={Style.BannerText2}>
                  <a href="/">Home</a> - Online-Reputation-Management
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.Container}>
          <div className={Styles.ServiceCardMedContainer}>
            <ServiceCardMedium
              heading={"Suppress Negative Google Results"}
              pera={
                "A single piece of negative content has the power to destroy the reputation and hamper the business of a brand. ORM services are the need of the hour for your business to remove negative content from Google searches. These contents can be in any form, such as blogs, forums, reviews, complaints, videos, etc. We at Build Brand Better help the brand clean the same and help the brand control the damage."
              }
              image={NegativeSearch}
            />
            <ServiceCardMedium
              heading={"Impress Everyone"}
              pera={
                "We at Build Brand Better use our professional, cutting-edge software to get your comprehensive reputation report. We help you to minimize your risk factors in Google and social media, maximize positive visibility, and monitor your reputation through the best online reputation management agency. We also use our technology to replace negative search results with positive online assets you control."
              }
              image={rating}
            />
          </div>
        </div>
      </section>

      <section>
        <div className={Styles.ScheduleConsulationContainer}>
          <div className={Style.Container}>
            <div className={Styles.ScheduleContent}>
              <h1>Online Reputation Management Services</h1>
              <div className={Styles.Schedulebtn}>
                <button>SHEDULE A FREE CONSULATION</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Styles.ReputationMangeCards}>
          <div className={Style.Container}>
            <div className={Styles.ReputationMangeContent}>
              <ContentCard />
              <ContentCard />
              <ContentCard />
              <ContentCard />
              <ContentCard />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Styles.ReputationConsult}>
          <div className={Style.Container}>
            <div className={Styles.ReputationConsultContent}>
              <div className={Styles.ConsultLeft}>
                <h2>Free Reputation Consultation</h2>
                <p>
                  Build an impressive online presence with us Manage your
                  business’ online reviews.
                </p>
                <h3>Let us do it for you; consult today!</h3>
                <div className={Styles.Consultbtn}>
                  <button>REQUEST A CALL</button>
                </div>
              </div>
              <ContactForm />
              {/* <div className={Styles.ConsultRight}></div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
