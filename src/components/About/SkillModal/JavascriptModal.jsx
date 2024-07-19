import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import javascript from "../../../assets/javascript.png"
import Carousel from 'react-bootstrap/Carousel'; 
import formvalidation from "../../../assets/project/js/form-validation.png"
import travelWebImage from '../../../assets/project/js/travel-web.png';
import digitalClock from '../../../assets/project/js/digital-clock.png';
import sliderProject from '../../../assets/project/js/slider.png';


function JavascriptModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='modal-title'>
          Javascript
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row className='skill-level'>
                <Col className="modal-container" sm = {4}>
                    <img src={javascript} className='modal-logo' />
                </Col>
                <Col className="modal-container modal-text" sm = {8}>
                  <br />
                  <Row>
                    <span className='skill-title skill-text'>My skill level</span>
                    <div className='skill-bar'>
                      <div className="advanced"></div>
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-title skill-text'>Skill Use Rate</span>
                    <div className='skill-bar'>
                      <div className="advanced"></div>
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-text'>Using the program since 2023</span>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-text'>I commonly use python for:</span>
                    <ul className='modal-list'>
                      <li>DOM Manipulation</li>
                      <li>Web App Development</li>
                      <li>Backend Development</li>
                      <li>Web Animation</li>
                    </ul>
                  </Row>
                </Col>
            </Row>
            {/* <br /> */}
            <br />
            <Row className='carousel-row'>
              <br />
              {/* <br /> */}
              <h3>My Project with Javascript</h3>
              <br/>
              <div className='carousel-container'>
                <Carousel>
                  <Carousel.Item>
                    <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/JS%201.%20Form%20Validation'>
                      <img 
                        className="d-block w-100"
                        src= {formvalidation}
                        alt="Image One"
                      /> 
                    </a>
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/JS%201.%20Form%20Validation'>
                        Form Validation
                      </a>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/travel'>
                      <img 
                        className="d-block w-100"
                        src={travelWebImage}
                        alt="Second slide"
                      />
                    </a> 
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/travel'>
                        <h5>FocalorTrip Travel Web</h5>
                      </a>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/1.%20Digital%20Clock'>
                      <img 
                        className="d-block w-100"
                        src={digitalClock}
                        alt="Third slide"
                      /> 
                    </a>
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/1.%20Digital%20Clock'>
                        <h5>Digital Clock</h5>
                      </a>
                      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/geeksforgeeks/1.%20Price%20Range%20Slider'>
                      <img 
                        className="d-block w-100"
                        src={sliderProject}
                        alt="Third slide"
                      /> 
                    </a>
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/Vanilla-JS-Project/tree/master/geeksforgeeks/1.%20Price%20Range%20Slider'>
                        <h5>Slider</h5>
                      </a>
                      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </div>
                  </Carousel.Item>
                  
                </Carousel>  
              </div>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JavascriptModal;
