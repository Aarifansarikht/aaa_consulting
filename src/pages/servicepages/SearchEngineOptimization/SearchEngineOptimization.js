import React from "react";
import Style from "../style.module.scss";
import Styles from "./style.module.scss";
import Navbar from "../../../components/common/navbar/Navbar";
import NavbarSticky from "../../../components/common/navbar/NavbarSticky";
import Footer from "../../../components/common/footer/Footer";
import SeoImg from "../../../assets/servicecardimages/Seo.png";
function SearchEngineOptimization(props) {
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
                  Search Engine Optimization
                </h2>
                <h2 className={Style.BannerText2}>
                  <a href="/">Home</a> - Search-Engine-Optimization
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
                <img src={SeoImg} height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchEngineOptimization;
