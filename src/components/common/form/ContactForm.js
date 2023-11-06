import React, { useRef, useState } from "react";
import Styles from "./style.module.scss";
export default function ContactForm(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className={Styles.ContactFormContainer}>
      <form
        ref={form}
        onSubmit={sendEmail}
        name="contactform"
        method="POST"
        data-netlify="true"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          style={{ marginTop: "12px" }}
        />
        <input
          type="email"
          name="email"
          autocapitalize="none"
          required
          placeholder="Email"
          style={{ marginTop: "12px" }}
        />
        <input
          type="number"
          name="phone"
          required
          placeholder="Phone"
          style={{ marginTop: "12px" }}
        />
        <div className={Styles.textcontact}>
          <textarea
            name="message"
            placeholder="Message"
            style={{ marginTop: "12px" }}
          ></textarea>
        </div>
        <button className={Styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
