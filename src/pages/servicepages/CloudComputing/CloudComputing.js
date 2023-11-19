import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import Style from "../style.module.scss";
import cloudImage from "../../../assets/servicecardimages/service-card-img3.png";
function CloudComputing(props) {
  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <NavbarSticky />
      <section>
        <div className={Styles.HeaderSection}>
          <div className={Styles.Banner}>
            <div className={Styles.Container}>
              <div className={Styles.InnerBannerText}>
                <h2 className={Styles.BannerText1}>Cloud Computing</h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> -Cloud-Computing
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
                <img src={cloudImage} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <article>
          <div className={Style.Container}>
            <div className={Style.TextContent}>
              <h1>Cloud Services</h1>
              <p>
                Secure and managed cloud solutions that drive the outcome-based
                modernization you need
              </p>
              <h2>Unlock innovation with the right cloud solutions</h2>
              <p>
                Cloud has emerged as an enabler of transformation, but there are
                still significant barriers to cloud expansion and many
                enterprises are struggling to prove transformation value or to
                tie IT value to business outcomes. AAA Consulting Cloud Services
                provide a 360-degree approach identifying and solving challenges
                and driving transformation forward.
              </p>

              <h1>Cloud Consulting</h1>
              <p>
                Leverage our decades of experience with some of the world's most
                complicated IT environments to create your optimal cloud
                strategy, streamline your IT architecture, and achieve your
                desire business results.
              </p>
              <p>
                AAA Consulting accelerates digital transformation by aligning
                business outcomes with the technology that drives them –
                technology underpinned by decades of mission critical
                experiences and a shared culture of continuous modernization.
              </p>

              <p>
                Our global network of technology strategy and implementation
                consultants, architects and engineers have deep domain knowledge
                based on decades of experience with some of the world’s most
                complex IT environments.
              </p>

              <h1>Private Cloud Services</h1>
              <p>
                {" "}
                Experience the perfect combination of cloud efficiency and
                private infrastructure performance, compliance, and security
                that empowers you to modernize and manage your enterprise. We
                offer a unified, consistent approach across all the cloud
                landscape with our dedicated on-prem resources and our seamless
                integration with public cloud workloads.
              </p>
              <p>
                {" "}
                Private cloud managed services from AAA Consulting enables your
                cloud strategy and builds a strong foundation for your hybrid
                cloud environment. Our solutions help you modernize and manage
                your IT with the efficiency of cloud and the performance,
                compliance, and security of a private infrastructure. With
                services ranging from consultation to building and managing your
                own infrastructure to fully-managed platform as a service (PaaS)
                in an OpEx model, AAA Consulting Private Cloud Services can
                support all your needs.
              </p>

              <h1>Public Cloud Services</h1>
              <p>
                {" "}
                Our proven, standardized, and repeatable services are
                meticulously designed to empower you to effortlessly design and
                deploy your applications and workloads on the optimal public
                cloud platform for your enterprise. AAA Consulting Public Cloud
                services prioritize security and ease of management in addition
                to offering flexible deployment options tailored to your
                specific needs. From initial design to ongoing management, our
                Public Cloud Services provide comprehensive, integrated, and
                full-lifecycle support for cloud environments, all built on
                industry best practices, and fully aligned with the unique cloud
                adoption and management frameworks of each hyperscaler.
              </p>
              <p>
                {" "}
                AAA Consulting Public Cloud Services offer an all-encompassing
                suite of integrated, full-lifecycle services for cloud
                environments, spanning from design to implementation to
                management. These services are meticulously crafted on the
                bedrock of industry best practices and tailored to meet the
                unique cloud adoption and management frameworks of each
                hyperscaler platform.
              </p>
              <p>
                We help accelerate client adoption, eliminate barriers to
                innovation, optimize cloud spend, and expedite time to revenue.
                With our seasoned experts and jumpstart services, our steadfast
                commitment to excellence, and unwavering focus on driving
                impactful outcomes, we’re here to help thrive in the dynamic
                world of cloud computing.
              </p>

              <h1>Modern Operations</h1>
              <p>
                AAA Consulting seamlessly integrates people, processes, and
                cutting-edge technology to provide unparalleled value that
                iterates on your current state, anticipated future needs, and
                the precise steps required to optimize your operational
                processes and maximize efficiency. Our evolved operating model
                is specifically tailored to meet the challenges and
                opportunities of today's rapidly evolving digital landscape, and
                expertly managed to facilitate ongoing business growth.
              </p>
              <p>
                Modernizing Operations (ModernOps) is a business model that
                iterates on an organization’s digital journeys and desired
                outcomes.  It leverages predefined work packages of people,
                processes and technology to deliver an agile approach for our
                clients’ digital transformations.
              </p>
              <p>
                Our ModernOps approach provides skilled/certified practitioners,
                industry open practices, and modern tooling to accelerate
                operations, lower costs, and reduce resource and capital waste.
              </p>
              <h1></h1>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
}

export default CloudComputing;
