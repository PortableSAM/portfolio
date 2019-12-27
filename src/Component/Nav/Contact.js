import React from "react";
import "./CSS/Contact.css";
import img from "./About/Img/img";
import { Container, Image, Col, Row } from "react-bootstrap";

export default class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={4} md={"auto"} sm={"auto"}>
            <h2 style={{ textAlign: "left", margin: "0", padding: "5px" }}>
              Contact
            </h2>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={3} md={"auto"} sm={"auto"}></Col>
          <Col lg={6} md={"auto"} sm={"auto"}>
            <Row>
              <Col></Col>
              <Col lg={8} md={"auto"} sm={"auto"}>
                <Image
                  src={img}
                  roundedCircle
                  style={{ width: "150px", height: "150px" }}
                />
                <Col lg={"auto"} md={"auto"} sm={"auto"}>
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
                </Col>
              </Col>
              <Col></Col>
            </Row>
            <Col />
          </Col>
          <Col lg={3} md={"auto"} sm={"auto"}></Col>
        </Row>
      </Container>
    );
  }
}
