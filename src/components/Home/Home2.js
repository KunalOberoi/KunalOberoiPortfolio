import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Data Analyst</b> passionate about
              transforming raw data into actionable insights that drive business
              decisions and improve performance.
              <br />
              <br />
              I have experience working with
              <i>
                <b className="purple">
                  {" "}
                  SQL, Python, Power BI, and Excel{" "}
                </b>
              </i>
              to analyze large datasets, build dashboards, and uncover trends
              across domains such as customer behavior, supply chain, and
              revenue analytics.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Data Analysis, Business Intelligence, KPI Tracking, and
                  Predictive Analytics{" "}
                </b>
              </i>
              where I focus on solving real-world problems using data-driven
              approaches.
              <br />
              <br />
              I enjoy building
              <b className="purple"> interactive dashboards </b> and deriving
              insights that help organizations optimize
              <i>
                <b className="purple">
                  {" "}
                  revenue, operations, and customer retention
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;