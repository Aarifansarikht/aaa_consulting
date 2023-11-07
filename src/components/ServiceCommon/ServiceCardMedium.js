import React from "react";
import imf from "../../assets/servicecardimages/Online-Reputation-Management.png";
import Styles from "./style.module.scss";
function ServiceCardMedium({ heading, pera, image }) {
  return (
    <div className={Styles.CardContainer}>
      <div className={Styles.ImageContainer}>
        <img src={image} alt="img" width="100%" height="100%" />
      </div>
      <h2>{heading}</h2>
      <p>{pera}</p>
    </div>
  );
}

export default ServiceCardMedium;
