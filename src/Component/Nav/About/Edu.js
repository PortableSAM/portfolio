import React from "react";
import "./CSS/Edu.css";

export default class Edu extends React.Component {
  render() {
    return (
      <div className="content">
        <div className=" edu-y">
          <p
            style={{
              fontSize: "20px",
              marginTop: "15px",
              marginBottom: "25px"
            }}
          >
            {this.props.startYear} ~ {this.props.endYear}
          </p>
        </div>
        <div className="edu-descript">
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              marginTop: "10px"
            }}
          >
            {this.props.schoolName}
          </p>
          <p style={{ fontSize: "15px", marginTop: "5px" }}>
            {this.props.Department}
          </p>
        </div>
      </div>
    );
  }
}
