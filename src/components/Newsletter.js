import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>INTERESTS</h3>
            <p>Programming • UX & Design • Gym & Fitness</p>
          </Col>

          <Col lg={12} md={6} xl={5}>
            <h3>COMMUNICATION & LANGUAGES</h3>
            <ul>
              {" "}
              <li> Swedish: Native </li>
              <li> English: Fluent</li>
            </ul>
          </Col>

          <Col lg={12} md={6} xl={5}>
            <h3>EDUCATION</h3>
            <ul>
              <li>Frontend Developer, Medieinstitutet – Stockholm (2022)</li>
              <li>
                Digital Marketing, IHM Business School – Gothenburg (2018)
              </li>
              <li>Diploma of Fitness, TAFE – Australia (2015)</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
