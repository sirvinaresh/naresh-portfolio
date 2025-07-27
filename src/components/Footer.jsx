import React from "react";
import { Container } from "react-bootstrap";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <Container className="foot" fluid>
        <footer className=" text-center text-white">
          {/* Social Media Section */}
          <Container className="p-4 pb-0">
            <section className="mb-4 ">
              <a
                className="btn btn-primary btn-floating m-1 rounded-5 border-0"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/naresh-sirvi04"
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                className="btn btn-primary btn-floating m-1 rounded-5 border-0"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/sirvinaresh"
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                className="btn btn-primary btn-floating m-1 rounded-5 border-0"
                style={{ backgroundColor: "red" }}
                href="https://www.instagram.com/naresh_.04?igsh=MXJnZGR3dTRodTJlNA=="
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                className="btn btn-primary btn-floating m-1 rounded-5 border-0"
                style={{ backgroundColor: "#55acee" }}
                rel="noopener noreferrer"
                role="button"
              >
                <FaTwitter />
              </a>
            </section>
          </Container>

          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © {new Date().getFullYear()} NARESH SIRVI. All Rights Reserved.
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
