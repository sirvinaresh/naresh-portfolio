import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import Card from 'react-bootstrap/Card';
import "aos/dist/aos.css";
function Skills() {

const frontend = [
    {image:'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',name:'HTML'},
    {image:'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000',name:'CSS'},
    {image:'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',name:'JavaScript'},
    {image:'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000',name:'React.Js'},
    {image:'https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000',name:'Bootstrap'},
    {image:'https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000',name:'Material Ui'},
    {image:'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',name:'Tailwind'},
    {image:'https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000',name:'Redux'},
]

const backend =[
    {image:'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',name:'Node.Js'},
    {image:'https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000',name:'Express.Js'},
    {image:'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',name:'MongoDB'},
    {image:'https://img.icons8.com/?size=100&id=MjLQiLrhFlNy&format=png&color=000000',name:'Rest API'},
]

const tools =[
    {image:'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',name:'Git'},
    {image:'https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000',name:'GitHub'},
    {image:'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000',name:'VS Code'},
    {image:'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',name:'Vercel'},
    {image:'https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg',name:'Render'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5yPOAbr-LrEa8ANO47RBo4f2txsvjPL-fw&s',name:'Postman'}
]
 
useEffect(() => {
  AOS.init({
    duration: 1000,
  });

  setTimeout(() => {
    AOS.refresh(); 
  }, 500);
}, []);

  return (
    <>
      <Container className="my-5" data-aos="fade-up">
        <Row className="d-flex justify-content-between">
            <div className="position-relative text-center my-5">
                <h1 className="display-4 fw-bold text-shadow">SKILLS</h1>
                <h1 className="position-absolute top-0 start-50  translate-middle fw-bold text-white">SKILLS</h1>
            </div>

            <Col lg={4} md={6} sm={12} className="px-4 mb-3" data-aos="fade-up">
             <Row className="p-3 box ">
                <h3 className="text-light text-center">Frontend</h3>
                {
                    frontend.map((val,i)=>{
                        return(
                            <Col lg={6} sm={6} xs={6} className="m-auto my-2">
                                <div className="logo d-lg-flex gap-1 align-items-center justify-content-center">
                                <Image src={val.image} fluid style={{height:'40px'}}/>
                                <Card.Text>{val.name}</Card.Text>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>

        <Col lg={4} md={6} sm={12} className="px-4 mb-3" data-aos="fade-up">
             <Row className="p-3 box ">
                <h3 className="text-light text-center">Backend</h3>
                {
                    backend.map((val,i)=>{
                        return(
                            <Col lg={6} sm={6} xs={6} className="m-auto my-2">
                                <div className="logo d-lg-flex gap-1 align-items-center justify-content-center">
                                <Image src={val.image} fluid style={{height:'40px'}}/>
                                <Card.Text>{val.name}</Card.Text>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
        
        <Col lg={4} md={6} sm={12} className="px-4 mb-3" data-aos="fade-up">
             <Row className="p-3 box ">
                <h3 className="text-light text-center">Tools & Platforms</h3>
                {
                    tools.map((val,i)=>{
                        return(
                            <Col lg={6} sm={6} xs={6} className="m-auto my-2">
                                <div className="logo d-lg-flex gap-1 align-items-center justify-content-center">
                                <Image src={val.image} fluid style={{height:'40px'}}/>
                                <Card.Text>{val.name}</Card.Text>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;
