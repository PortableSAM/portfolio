import React from "react";
import styled from "styled-components";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <LandingContainer>
          <Landing>
            <span>
              <h3>Han Saem's Portfolio</h3>
            </span>
            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
            <SkillIcon>
              <FaHtml5 className="fab fa-html5" />
              <FaCss3 className="fab fa-css3-alt" />
              <JsSquare className="fab fa-js-square" />
              <FaReact className="fab fa-react" />
            </SkillIcon>
          </Landing>
        </LandingContainer>
      </>
    );
  }
}

const LandingContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;
const Landing = styled.div`
  width: 400px;
  & span {
    display: flex;
    justify-content: center;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
  }
  & h3 {
    margin: auto;
  }
  & hr {
    border-top: 2px solid lightslategray;
    width: 80%;
  }
`;
const SkillIcon = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2em;
`;
const FaHtml5 = styled.i`
  font-size: 4.5rem;
  color: #e15f41;
`;
const FaCss3 = styled.i`
  font-size: 4.5rem;
  color: #778beb;
`;
const JsSquare = styled.i`
  font-size: 4.5rem;
  color: #f5cd79;
`;
const FaReact = styled.i`
  font-size: 4.5rem;
  color: #3dc1d3;
  @media (prefers-reduced-motion: no-preference) {
    animation: fa_react_spin infinite 15s linear;
  }
  @keyframes fa_react_spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
