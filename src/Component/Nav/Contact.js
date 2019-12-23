import React from "react";
import "./CSS/Contact.css";
import img from "./About/Img/img";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactPage">
        <div className="title">
          <h2>Contact</h2>
          <hr className="contact-hr" style={{ width: "50%" }} />
        </div>
        <div className="contact-content">
          <div className="col s12 m6 imgbox">
            <img src={img} alt="img" />
          </div>
          <div className="content-item">
            <h4>
              <i className="fas fa-envelope-square" />
              hanmti00@naver.com
            </h4>
            <h4>
              <i className="fas fa-comment-dots" />
              KakoTalk : portableSAM
            </h4>
            <h4>
              <i className="fab fa-facebook-messenger" />
              hanSaemLicht
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
