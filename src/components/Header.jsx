import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';

function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Navbar expand="lg" sticky='top' style={{backgroundColor:'#0f1624'}}>
      <Container className=' my-1 py-2 px-lg-5'>
        <Navbar.Brand href="#home" className='b-name'>NARESH SIRVI</Navbar.Brand>
        <div className=' d-lg-none text-light'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <Navbar.Collapse in={isOpen}>
          <Nav className="ms-auto d-lg-flex gap-lg-5" style={{cursor:'pointer'}}>
            <Link to="home"     onClick={() => setOpen(false)} smooth={true} duration={100} spy={true} offset={-100} activeClass='active' className="nav-link">Home</Link>
            <Link to="about"    onClick={() => setOpen(false)} smooth={true} duration={100} spy={true}  offset={-100} activeClass='active' className="nav-link">About</Link>
            <Link to="skills"   onClick={() => setOpen(false)} smooth={true} duration={100} spy={true}  offset={-100} activeClass='active' className="nav-link">Skills</Link>
            <Link to="projects" onClick={() => setOpen(false)} smooth={true} duration={100} spy={true}  offset={-100} activeClass='active' className="nav-link">Projects</Link>
            <Link to="contact"  onClick={() => setOpen(false)} smooth={true} duration={100} spy={true}  offset={-100} activeClass='active' className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header