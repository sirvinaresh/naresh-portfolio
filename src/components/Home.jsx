import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { IoDocumentText } from "react-icons/io5";
import { MdWork } from 'react-icons/md';
import { Link } from 'react-scroll';
import "aos/dist/aos.css";
import AOS from "aos";
import { TypeAnimation } from 'react-type-animation';
function Home() {
   useEffect(() => {
          AOS.init({
              duration: 1000,
          });
          AOS.refresh();
      }, []);
  return (
    <>
        <Container className='my-3 text-light' data-aos="fade-down"  data-aos-duration="1500">
          <Row className='d-flex align-items-center'>
            <Col className='' lg={6} md={8} sm={12} >
              <h5 >Hello,</h5>

              <h1 style={{fontSize:'60px',fontWeight:'bold'}}>I'm Naresh Sirvi</h1>
              
              <h3 >Full Stack Developer <span style={{ color: "#61DAFB" }}>
                  
                    <TypeAnimation
                  sequence={[
                    'MongoDB', 
                    1500, 
                    'Express Js', 
                    1500, 
                    'React Js',
                    1500,
                    'Node Js', 
                    () => {
                      console.log('Sequence completed');
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
                  
                </span></h3>
              <h3>
              </h3>
              <p style={{color:'#D1D5DB'}}>
                I turn ideas into real-world applications with clean code and modern development practices, using MongoDB, Express.js, React, and Node.js. <span style={{ color: "#61DAFB",fontWeight:'bold' }}>(MERN)</span>
              </p>
              
               <Link to="contact" smooth={true} duration={100} spy={true} offset={-100} activeClass='active' className="cta-btn hire-me-btn" style={{cursor:'pointer'}}><MdWork /> Hire Me</Link>

              <a href="https://drive.google.com/file/d/1-3dxhGOG7K0KLF8T9WH9XK9KcN9gK8Ee/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="cta-btn download-cv-btn"><IoDocumentText />View Resume</a>
              
            </Col>

            <Col className=' text-center' lg={6} md={4} sm={12}>
              <Image src={require('../images/moodel.png')}  className='rounded-4' fluid />
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Home