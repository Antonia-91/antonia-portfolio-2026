// Other.jsx
import { Container, Row, Col } from "react-bootstrap";

export const Other = () => {
  return (
    <section className="skill" id="other">
      <Container>
        <Row>
          <Col xs={12}>
            {/* använder samma mörka box som Experience */}
            <div className="skill-bx wow zoomIn">
              <Row>
                <Col lg={12} md={6} xl={5}>
                  <h3>INTERESTS</h3>
                  <ul>
                    <li>Programming • UX & Design • Gym & Fitness</li>
                  </ul>
                </Col>

                <Col lg={12} md={6} xl={5}>
                  <h3>COMMUNICATION & LANGUAGES</h3>
                  <ul>
                    <li>Swedish: Native</li>
                    <li>English: Fluent</li>
                  </ul>
                </Col>

                <Col lg={12} md={6} xl={5}>
                  <h3>EDUCATION</h3>
                  <ul>
                    <li>Frontend Developer, Medieinstitutet – Stockholm (2022)</li>
                    <li>Digital Marketing, IHM Business School – Gothenburg (2018)</li>
                    <li>Diploma of Fitness, TAFE – Australia (2015)</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
