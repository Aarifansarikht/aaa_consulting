import React from "react";
import imf from "../../assets/servicecardimages/Online-Reputation-Management.webp";
import Styles from "./style.module.scss";
function ServiceCardMedium(props) {
  return (
    <div className={Styles.CardContainer}>
      <div className={Styles.ImageContainer}>
        <img src={imf} alt="img" width="100%" height="100%" />
      </div>
      <h2>Suppress Negative Google Results</h2>
      <p>
        A single piece of negative content has the power to destroy the
        reputation and hamper the business of a brand. ORM services are the need
        of the hour for your business to remove negative content from Google
        searches. These contents can be in any form, such as blogs, forums,
        reviews, complaints, videos, etc. We at Build Brand Better help the
        brand clean the same and help the brand control the damage.
      </p>
    </div>
  );
}

export default ServiceCardMedium;
