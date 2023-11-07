import React from "react";
import Styles from "./style.module.scss";
import ContentCardImg from "../../assets/servicecardimages/contentcard.png";
function ContentCard(props) {
  return (
    <div className={Styles.ContentCardContainer}>
      <div className={Styles.ContentCardImg}>
        <img src={ContentCardImg} />
      </div>
      <h2>Review Management</h2>
      <p>
        We maintain a careful check on the reviews to earn more positive reviews
        and improve your brand trust while removing those that interfere with
        your business reputation with cutting-edge review management solutions.
      </p>
    </div>
  );
}

export default ContentCard;
