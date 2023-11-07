import React from "react";
import Styles from "./style.module.scss";
import ContentCardImg from "../../assets/servicecardimages/nagative-search4.png";
function ContentCard({ heading, pera, image }) {
  return (
    <div className={Styles.ContentCardContainer}>
      <div className={Styles.ContentCardImg}>
        <img src={image} />
      </div>
      <h2>{heading}</h2>
      <p>{pera}</p>
    </div>
  );
}

export default ContentCard;
