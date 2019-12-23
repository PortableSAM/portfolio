import React from "react";
import "./CSS/Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="pro_section">
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Current Weather</td>
                  <td className="descript">
                    <i className="fab fa-react" />
                    <p>위치기반 날씨 정보 구현</p>
                  </td>
                  <td className="link">
                    <a
                      href="https://currentweatherapp-b65b2.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                    <a
                      href="https://github.com/PortableSAM/CurrentWthrApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Clock</td>
                  <td className="descript">
                    <i className="fab fa-react" />
                    <p>현재 날짜와 시간 출력</p>
                  </td>
                  <td className="link">
                    <a
                      href="https://portablesam.github.io/Clock-App/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                    <a
                      href="https://github.com/PortableSAM/Clock-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Movie List</td>
                  <td className="descript">
                    <i className="fab fa-react" />
                    <p>국내 개봉영화 정보에 대한 리스트</p>
                  </td>
                  <td className="link">
                    <a
                      href="https://movielistapp-b39ef.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                    <a
                      href="https://github.com/PortableSAM/Movie_App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
