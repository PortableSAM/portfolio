import React from "react";
import img from "../Nav/About/Img/img";
import { Edu, Expreience } from "./About/index";
import styled from "styled-components";

export const About = () => {
  return (
    <Styles>
      <AboutContainer>
        <AboutTitle>
          <h2>About Me</h2>
        </AboutTitle>
        <AboutInfo>
          <article>
            <img src={img} width={150} height={150} alt="pic" />
            <div className="about-text">
              <p>늦게 시작했지만 배우는 것에 늦은 것은 없다.</p>
            </div>
          </article>
          <InfoRight>
            <EduTitle>
              <h4>Education</h4>
            </EduTitle>
            <Edu
              startYear={2004}
              endYear={2007}
              schoolName={"YongSan Technical High School"}
              Department={"Electron department"}
            />
            <Eduhr />
            <ExpTitle>
              <h4>Social Expreience</h4>
            </ExpTitle>
            <Expreience
              startYear={2018}
              endYear={2019}
              jobName={"jin-heung Technology"}
              description={
                "Gas scrubber Maintenance and Vacuum pump Maintenance"
              }
            />
            <Expreience
              startYear={2017.04}
              endYear={2017.12}
              jobName={"Dajin Digital Solution"}
              description={"Office Complex Maintenance Printer Repair"}
            />
            <Expreience
              startYear={2009}
              endYear={2016}
              jobName={"Republic of Korea, Army"}
              description={"Army Field Artillery, Maintenance Team"}
            />
          </InfoRight>
        </AboutInfo>
      </AboutContainer>
    </Styles>
  );
};

const AboutContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  padding: 10px;
  width: 1140px;
  @media (max-width: 450px) {
    width: 400px;
  }
  & h4 {
    text-align: left;
    margin: 0;
    padding: 5px;
    padding-left: 10px;
  }
`;
const AboutTitle = styled.div`
  margin-bottom: 10px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  & h2 {
    margin: 0;
    width: 200px;
  }
`;
const AboutInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  & article {
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: 220px;
    align-items: center;
    @media (max-width: 450px) {
      width: 300px;
    }
    & img {
      margin-top: 50px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }
`;
const InfoRight = styled.div`
  padding: 10px;
  width: 700px;
  @media (max-width: 450px) {
    width: 390px;
  }
`;
const EduTitle = styled.div`
  display: flex;
  & h4 {
    width: 150px;
  }
`;
const ExpTitle = styled.div`
  display: flex;
  & h4 {
    width: 250px;
  }
`;
const Eduhr = styled.hr`
  border-top: 3px solid #6610f2;
`;

const Styles = styled.div`
  .about-text {
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-top: 2px solid purple;
    text-align: center;
    font-family: "Yeon Sung", cursive;
    font-size: 1.5em;
  }
`;
