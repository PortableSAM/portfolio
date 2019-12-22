import React from "react";
import "./CSS/Expreience.css";

export default class Expreience extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="col s=5 ex-y">
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
        <div className="col s=7 ex-descript">
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              marginTop: "10px"
            }}
          >
            {this.props.jobName}
          </p>
          <p style={{ fontSize: "15px", marginTop: "5px" }}>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
