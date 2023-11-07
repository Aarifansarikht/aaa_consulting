import React from "react";
import Style from "../style.module.scss";
import Styles from "./style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import ServiceCardMedium from "../../../components/ServiceCommon/ServiceCardMedium";
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
            <ServiceCardMedium />
            <ServiceCardMedium />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
