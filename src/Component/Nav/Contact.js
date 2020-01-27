import React from "react";
import img from "./About/Img/img";
import styled from "styled-components";

export default class Contact extends React.Component {
  render() {
    return (
      <ContacInfo>
        <ContacTitle>
          <h2>Contact</h2>
        </ContacTitle>
        <section>
          <img src={img} alt="pic" />
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
        </section>
      </ContacInfo>
    );
  }
}
const ContacInfo = styled.div`
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & section {
    margin-top: 20px;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
      width: 390px;
    }
    & img {
      margin: 10px;
      width: 200px;
      height: 200px;
      border-radius: 10em;
    }
    & h4 {
      margin: 5px;
      width: 305px;
      text-align: left;
      & i {
        padding-right: 20px;
      }
    }
  }
`;

const ContacTitle = styled.div`
  margin-top: 10px;
  width: 700px;
  display: flex;
  @media (max-width: 450px) {
    width: 390px;
  }
  & h2 {
    margin: 0;
    padding: 5px;
    width: 150px;
  }
`;
