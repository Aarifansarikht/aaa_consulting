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

              <h1>
                AI in diagnostics to enhance efficiency and accuracy of clinical
                decisions
              </h1>
              <p>
                As we move towards a digital world, the global datasphere is
                projected to grow from 33 zettabytes in 2018 to 175 zettabytes
                by 20251 (equal to 175 billion terabytes). Compared to
                manufacturing, financial, and media & entertainment industries,
                healthcare data is set to grow the most with a compound annual
                growth rate of 36%.
              </p>
              <p>
                Given this vast amount of data being generated (including the
                advancement of medical knowledge), physicians today are faced
                with an overwhelming amount of information when working to
                diagnose even a single patient. AI, however, has the potential
                to provide healthcare professionals the ability to speed up and
                improve their diagnostic capabilities by helping to extract
                clinically-relevant insights from the wealth of information
                available.
              </p>
              <p>
                The power of AI to help diagnose diseases at their early stage
                was recently highlighted in a study that evaluated its use to
                identify COVID-19 positive patients. An AI algorithm that
                integrated chest computed tomography (CT) findings with clinical
                symptoms, exposure history and laboratory testing was shown to
                perform equally well in correctly identifying COVID-19 patients
                compared to a senior thoracic radiologist.2 Additionally, the
                algorithm outperformed radiologists in identifying patients
                positive for COVID-19 via reverse transcription-polymerase chain
                reaction (RT-PCR) who presented with normal CT results in the
                early stage of disease.
              </p>
              <p>
                This study showed the potential of AI as a useful screening tool
                to aid in the quick diagnosis of infectious diseases such as
                COVID-19, especially when access to specialists is limited and
                time is of essence in order to start appropriate treatment.
              </p>

              <h1>
                AI in improving image recognition in the diagnostic work-up
              </h1>
              <p>
                AI technologies are making great strides in medical imaging.
                Studies have shown that the use of AI may be able to enable
                earlier disease detection, while also enhancing the workflows by
                accelerating reading time and automatically prioritizing urgent
                cases.{" "}
              </p>
              <p>
                AI can look at vast numbers of medical images and then quickly
                and regularly identify patterns, including variations that
                humans cannot.3 This may not only improve patient outcomes, but
                also save money – earlier diagnosis and treatment of many
                cancers, for example, may cut treatment costs by more than 50%.
              </p>
              <p>
                There is applicability for AI systems to aid in making diagnoses
                based on medical imaging across many disease areas including
                oncology and cardiology, gastroenterology or hepatology, and
                neurology.5 This adds to the huge potential of AI to support
                clinical decisions in time critical situations or when there is
                a lack of expert knowledge available, such as in remote or
                poorly funded medical facilities.
              </p>

              <h1>
                Alleviating administrative and laboratory resource pressures
                with AI
              </h1>
              <p>
                From 1990 to 2012, the U.S. healthcare workforce grew by 75
                percent – but 95% of that growth was in administrative roles,
                not physicians.6 There are now 10 administrators for every
                doctor.6 This rapid growth in administration is driven by
                increasingly complex regulations, technology and inefficiencies
                in the system.
              </p>
              <p>
                A slowdown in the use of technology or a relaxation of
                regulatory requirements are unlikely, so harnessing tools like
                AI-powered back office software to help offset this holds
                incredible value. A recent report by Accenture estimates that by
                2026, AI applications that streamline the administrative
                workflow of healthcare organizations could lead to annual cost
                savings of US$18 billion in the US alone.
              </p>
              <p>
                AI also has the potential to help address the shortage of
                laboratory staff/technicians that has plagued the field for
                years. The US Bureau of Labor Statistics estimates about 25,900
                openings for clinical laboratory technologists and technicians
                each year, on average, between 2020 and 2030.8 However, less
                than 5000 students are graduating from accredited programs each
                year.
              </p>
              <p>
                While AI has incredible potential for analysis and diagnosis as
                discussed above, the majority of time and effort in a lab is
                spent on pre- and postanalytical processes. AI could help bring
                significant improvements to the workflow and operations, saving
                time, labor, and costs.
              </p>
              <h1>
                AI experts provide insights into its successful implementation
              </h1>
              <p>
                To be successful, the use of AI in diagnostics needs to be
                guided. Machines are very good at specific but limited tasks –
                narrow and deep. Humans will need to play a critical role in
                defining the intended use of any AI-based tool, as well as its
                design and implementation.
              </p>
              <p>
                We have spoken to several experts in recent years, and here are
                some of the perspectives and insights they have contributed to
                the discussion around AI in healthcare.
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
