import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Landing Page",
      description: "Figma UI Design",
      imgUrl: projImg1,
    },
    {
      title: "Weather Forecast Dashboard",
      description: "React + API Integration",
      imgUrl: project1,
    },
    {
      title: "Finance App UI",
      description: "Mobile UX Design",
      imgUrl: project2,
    },
    {
      title: "Apple AirPods Max",
      description: "UI/UX Product Page",
      imgUrl: project3,
    },
    {
      title: "Pizza Order App",
      description: "React + Styled Components",
      imgUrl: project4,
    },
    {
      title: "Data Visualization Dashboard",
      description: "Figma + D3.js Concepts",
      imgUrl: project5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <h2>Projects</h2>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <ul>
                            Creative, social, and collaborative – thrive in
                            teams that learn and grow together. Fast learner and
                            adaptable – comfortable with data-driven work and
                            keeping up with trends. Passionate about health and
                            fitness at a competitive level – developed
                            discipline, focus, and perseverance. Value balance
                            and recovery – recharge through nature and outdoor
                            life with my dog.
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
