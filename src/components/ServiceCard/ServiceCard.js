import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
export default function ServiceCard({ image, heading, pera, link }) {
  return (
    <div className={Styles.ServiceCardContainer}>
      <div className={Styles.CardImage}>
        <img src={image} width="100%" height="100%" />
      </div>
      <h1>{heading}</h1>
      <div className={Styles.CardContent}>
        <p>{pera}</p>
        <div className={Styles.CardBtn}>
          <Link to={link}>
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
