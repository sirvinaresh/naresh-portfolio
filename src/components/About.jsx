import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
   AOS.init({
    duration: 3000, 
  });
  AOS.refresh(); 
  }, []);
  return (
    <>
      <Container className=" my-5 text-light " data-aos="fade-up">
        <Row>
            <div className="position-relative text-center my-5">
                <h1 className="display-4 fw-bold text-shadow">ABOUT ME</h1>
                <h1 className="position-absolute top-0 start-50  translate-middle fw-bold text-white">ABOUT ME</h1>
            </div>

          <Col className=" text-center pb-4" lg={6} md={12} sm={12}>
            <Image src={require("../images/d1.jpg")} fluid />
          </Col>

          <Col
            className="d-flex align-items-center" style={{ textAlign: "justify" }} lg={6} md={12} sm={12}>
            <h5 style={{ color: "#9daabbff" }}>
              "Hello! I'm <span className="fw-bold">NARESH SIRVI</span>, a
              passionate MERN Stack Developer from Surat, Gujarat, currently in
              my third year of a Bachelor of Computer Applications degree. I
              specialize in building end-to-end web solutions, taking ideas from
              initial concept and architecture all the way to a deployed,
              user-friendly application.
              <br /> <br />
              My core strength lies in my enjoyment of the full development
              lifecycle. I'm just as comfortable designing a RESTful API with
              Node.js and Express as I am creating a dynamic, responsive
              front-end with React. One of my most formative experiences was
              delivering a complete web application for a local client, which
              taught me invaluable lessons in translating business needs into
              clean, efficient, and maintainable code.
              <br />
              <br />I am always eager to dive into new technologies and
              methodologies, and I'm actively seeking an opportunity where I can
              contribute to meaningful projects and continue to grow as a
              developer. When I'm not at my keyboard, I enjoy gaming."
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
