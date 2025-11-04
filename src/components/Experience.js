import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Row } from "react-bootstrap";

export const Experience = () => {
  const experiences = [
    {
      title: "IT Consultant / Frontend Developer – Weskill AB, Stockholm",
      date: "📆 Feb 2025 - Oct 2025",
      desc: "Frontend development in Svelte + TypeScript and Tailwind CSS for B2C/B2B web applications. Implementing designs from Figma, user flows, and interaction logic. Active participation in requirements discussions, sprint planning, and documentation. Close collaboration with Product Owners, UX designers, and design teams.",
    },
    {
      title: "System Developer / Frontend Developer – Alstra AB, Stockholm",
      date: "📆 Sep 2022 – Dec 2024",
      desc: "Built web features using Vue.js and TypeScript with a focus on UX and performance. Created reusable components in Figma and collaborated closely with marketing and product teams to optimize customer flows.",
    },
    {
      title: "E-commerce & Content Manager – TwoAngels AB, Gothenburg",
      date: "📆 Aug 2019 – Apr 2020",
      desc: "Responsible for product content, SEO optimization and UX improvements on the e-commerce platform. Produced marketing campaigns and social media content for Instagram and TikTok.",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>RELEVANT EXPERIENCES</h2>

              <Row>
                {experiences.map((exp, index) => (
                  <Col key={index} xs={12} md={4} className="mb-4">
                    <div className="exp-card">
                      <h6>{exp.title}</h6>
                      <p className="date">{exp.date}</p>
                      <p>{exp.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
