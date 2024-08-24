import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { MdFacebook } from "react-icons/md";
import logo from "../assets/logo-gutivanian.png" ;

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
          </Col>
          <Col md="4" className="footer-body">
            <Row className = "footer-connect">
              Connect With Me
            </Row>
            <Row>
            <ul className="social-icons">
                <li><a href="https://facebook.com/starefondofne" className="social-icon"> <i className="fab fa-facebook icon fb-footer"></i></a></li>
                <li><a href="https://www.instagram.com/gutivanian/" className="social-icon"> <i className="fab fa-instagram icon ig-footer"></i></a></li>
                <li><a href="http://x.com/gutivanian" className="social-icon"> <i className="fab fa-twitter icon tw-footer"></i></a></li>
                <li><a href="https://id.linkedin.com/in/gutivan-alief-syahputra-47b69318b" className="social-icon"> <i className="fab fa-linkedin icon li-footer"></i></a></li>
                <li><a href="http://github.com/gutivanian" className="social-icon"> <i className="fab fa-github icon gh-footer"></i></a></li>
            </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer