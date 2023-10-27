import React from "react";
import ServiceImg from "../../assets/servicecardimages/service-card-img1.svg";
import Styles from "./style.module.scss";
export default function ServiceCard({ image, heading, pera }) {
  return (
    <div className={Styles.ServiceCardContainer}>
      <div className={Styles.CardImage}>
        <img src={image} width="100%" height="100%" />
      </div>
      <h1>{heading}</h1>
      <div className={Styles.CardContent}>
        <p>{pera}</p>
        <div className={Styles.CardBtn}>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
