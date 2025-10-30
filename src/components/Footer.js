import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/AP.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/antoniapettersson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2025. Antonia Pettersson</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
