import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoHomeOutline,IoPersonOutline ,IoNewspaper    } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import logo from "../assets/logo-gutivanian.png" ;
import React, { useState, useEffect } from 'react';

function NavBar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <Navbar 
        expand="xl" 
        className={`fixed-top ${isScrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#Home">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle 
                aria-controls="basic-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id= "responsive-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        <Nav.Item>
                            <Nav.Link href = "#home">
                                <IoHomeOutline></IoHomeOutline>
                                <span className='ms-2'>
                                    Home
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#about">
                                <IoPersonOutline></IoPersonOutline>
                                <span className='ms-2'>
                                    About
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#projects">
                            <PiProjectorScreenChartBold></PiProjectorScreenChartBold>
                                <span className='ms-2'>
                                    Projects
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#resume">
                                <IoNewspaper></IoNewspaper>
                                <span className='ms-2'>
                                    Resume
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href = "#blogs">
                                <GrBlog></GrBlog>
                                <span className='ms-2'>
                                    Blogs
                                </span>
                            </Nav.Link>
                        </Nav.Item> */}
                        <NavDropdown title = "Follow Me" id = "basic-nav-dropdown">
                            <NavDropdown.Item href="http://github.com/gutivanian" target="_blank" rel="noopener noreferrer">
                                Github
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://id.linkedin.com/in/gutivan-alief-syahputra-47b69318b" target="_blank" rel="noopener noreferrer">
                                Linked In
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://facebook.com/starefondofne" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.instagram.com/gutivanian/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="http://x.com/gutivanian" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar