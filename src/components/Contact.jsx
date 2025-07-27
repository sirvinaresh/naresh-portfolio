import React, { useEffect, useRef } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import { MdOutlineEmail } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FaLocationDot } from "react-icons/fa6";
function Contact() {

    
    
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    
      setTimeout(() => {
        AOS.refresh(); 
      }, 500);
    }, []);
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
            emailjs
                .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                { publicKey: process.env.REACT_APP_PUBLIC_KEY }
                )
                .then(() => {
                console.log('SUCCESS!');
                toast.success('Message sent successfully!');
                form.current.reset(); 
                })
                .catch((error) => {
                console.error('FAILED...', error);
                toast.e('Email failed: ' + (error.text || 'Unknown error'));
                });
            };

  return (
    <>
        <Container className=" my-5 text-light " data-aos="fade-up">
            <Row className=' border-top'>
                <div className="position-relative text-center my-5">
                    <h1 className="display-4 fw-bold text-shadow">CONTACT</h1>
                    <h1 className="position-absolute top-0 start-50  translate-middle fw-bold text-white">CONTACT</h1>
                </div>
                
            <Col lg={6} md={6} sm={12}> 
                <h1>Let’s Connect</h1>
                <p>I'm always open to discussing new projects, creative ideas,<br /> or opportunities to be part of your vision. Let's connect!</p>
                <div className=' d-flex flex-column gap-3 mb-5'>
                    
                    <div><MdOutlineEmail /> <a className='text-light text-decoration-none' href="mailto:nssirvi1807@gmail.com?subject=Hello&body=Hi Naresh, I saw your portfolio!">nssirvi1807@gmail.com</a></div>
                    <div><FaLocationDot /> Surat, Gujarat, IN</div>
                </div>
            </Col>

            <Col lg={6} md={6} sm={12} className='border border-2 border-secondary rounded-2 contact'>
                <Form className='my-5' ref={form} onSubmit={sendEmail} >
                    <Row className="mb-4">
                        <Form.Group  className="" as={Col}  >
                        <Form.Control type="text" name='fname' required placeholder="First Name" className=' bg-transparent border-0  border-bottom rounded-0 text-light'/>
                        </Form.Group>

                        <Form.Group  className="" as={Col} >
                        <Form.Control type="text" name='lname' placeholder="Last Name" className=' bg-transparent border-0  border-bottom rounded-0 text-light'/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="py-4">
                        <Form.Control placeholder="Email" type='email' required name='email' className=' bg-transparent border-0  border-bottom rounded-0 text-light'/>
                    </Form.Group>

                    <Form.Group className="py-4" >
                        <Form.Control
                        as="textarea"
                        placeholder="Message"
                        name='message'
                        style={{ height: '100px' }}
                        className=' bg-transparent border-0  border-bottom rounded-0 text-light'
                        required
                        />
                    </Form.Group>

                    <Button variant="" type="submit" className='send-btn px-5'> 
                        Send
                    </Button>
                </Form>
            </Col>

            </Row>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />
        </Container>
    </>
  )
}

export default Contact