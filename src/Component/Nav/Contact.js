import React from "react";
import "./CSS/Contact.css";
import img from "./About/Img/img";
import { Container, Image } from "react-bootstrap";

export default class Contact extends React.Component {
  render() {
    return (
      <Container>
        <div className="c-container">
          <div className="contact">
            <h2>Contact</h2>
            <hr />
          </div>
          <div className="contact-contents">
            <div className="img-box">
              <Image
                src={img}
                roundedCircle
                style={{ width: "171px", height: "180px" }}
              />
            </div>
            <div className="contact-text">
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
      </Container>
    );
  }
}

/*
<div className="contactPage">
        <div className="title">
          <h2>Contact</h2>
          <hr className="contact-hr" style={{ width: "50%" }} />
        </div>
        <div className="contact-content">
          <div className="imgbox">
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

      */
