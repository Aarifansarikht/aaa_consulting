import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import medicaldiadnosis from "../../../assets/servicecardimages/intelligentmedical.png";

function IntelligentMedicalDiagnosis(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>
                  Intelligent Medical Diagnosis
                </h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Intelligent-Medical-Diagnosis
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.MainContent}>
          <div className={Style.Container}>
            <section>
              <div className={Style.TopImageContainer}>
                <div className={Style.TopImageContent}>
                  <div className={Style.TopImage}>
                    <img src={medicaldiadnosis} height="100%" width="100%" />
                  </div>
                </div>
              </div>
            </section>
            <div className={Style.MedicalIntelligence}>
              <h1>
                How Artificial Intelligence in diagnostics is transforming
                healthcare
              </h1>
              <h2>Quick Takes</h2>
              <ul>
                <li>
                  Artificial intelligence in diagnostics has the potential to
                  make healthcare more accessible, affordable, and efficien
                </li>
                <li>
                  3 ways AI can potentially have a strong impact include
                  enhancing efficiency and accuracy of diagnostics, improving
                  image recognition, and alleviating administrative and
                  laboratory resource pressures
                </li>

                <li>
                  Experts agree that trust and transparency are essential for
                  AI-based tools to reach their full potential
                </li>
              </ul>
              <p>
                Artificial intelligence (AI) has powerful potential within
                healthcare, promising the ability to analyze vast amounts of
                data quickly and in detail. In a field such as in vitro
                diagnostics (IVD), this could have transformative implications.
              </p>
              <p>
                First, AI in diagnostics has the potential to make high quality
                healthcare more accessible and affordable by assisting
                healthcare providers to more quickly make the most appropriate
                treatment decisions for their patients. Second, AI could
                potentially transform the back office by performing otherwise
                tedious and time consuming administrative tasks, enabling staff
                to focus on those that add value, while decreasing
                inefficiencies and improving the use of resources.
              </p>
              <p>
                Let’s take a closer look at how AI is revolutionizing diagnostic
                and care pathways.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default IntelligentMedicalDiagnosis;
