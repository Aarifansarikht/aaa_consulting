import React from "react";
import Styles from "../style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import ServiceCardMedium from "../../../components/ServiceCommon/ServiceCardMedium";
export default function OnlineRepuManage(props) {
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
                  Online Reputation Management
                </h2>
                <h2 className={Styles.BannerText2}>
                  <a href="/">Home</a> - Online-Reputation-Management
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <ServiceCardMedium />
          <ServiceCardMedium />
        </div>
      </section>
      <Footer />
    </div>
  );
}
