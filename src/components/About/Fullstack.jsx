import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import html5 from "../../assets/Fullstack/html5.png";
import css3 from "../../assets/Fullstack/css3.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/Fullstack/bootstrap.png";
import tailwind from "../../assets/Fullstack/tailwind.png";
import react from "../../assets/Fullstack/react.png";
import redux from "../../assets/Fullstack/redux.png";
import nodejs from "../../assets/Fullstack/nodejs.png";
import express from "../../assets/Fullstack/express.png";
import redis from "../../assets/Fullstack/redis.png";
import mongo from "../../assets/Fullstack/mongo.png";
import postgresql from "../../assets/Data Analyst/postgresql.png";

// Import modal components
import Html5Modal from "./SkillModal/Html5Modal.jsx";
import Css3Modal from "./SkillModal/Css3Modal.jsx";
import JavascriptModal from "./SkillModal/JavascriptModal.jsx";
import BootstrapModal from "./SkillModal/BootstrapModal.jsx";
import TailwindModal from "./SkillModal/TailwindModal.jsx";
import ReactModal from "./SkillModal/ReactModal.jsx";
import ReduxModal from "./SkillModal/ReduxModal.jsx";
import NodejsModal from "./SkillModal/NodejsModal.jsx";
import ExpressModal from "./SkillModal/ExpressModal.jsx";
import RedisModal from "./SkillModal/RedisModal.jsx";
import MongoModal from "./SkillModal/MongoModal.jsx";
import PostgreSQLModal from "./SkillModal/PostgreSQLModal.jsx";

function Fullstack() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleButtonClick = (skillName) => {
    setSelectedSkill(skillName);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('html5')}>
        <img src={html5} alt="HTML 5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('css3')}>
        <img src={css3} alt="CSS 3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('javascript')}>
        <img src={javascript} alt="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('bootstrap')}>
        <img src={bootstrap} alt="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('tailwind')}>
        <img src={tailwind} alt="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('react')}>
        <img src={react} alt="React JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('redux')}>
        <img src={redux} alt="React Redux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('nodejs')}>
        <img src={nodejs} alt="Node JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('express')}>
        <img src={express} alt="Express JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('redis')}>
        <img src={redis} alt="Redis" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('postgresql')}>
        <img src={postgresql} alt="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('mongo')}>
        <img src={mongo} alt="MongoDB" />
      </Col>

      {selectedSkill === 'html5' && <Html5Modal show={true} onHide={handleClose} />}
      {selectedSkill === 'css3' && <Css3Modal show={true} onHide={handleClose} />}
      {selectedSkill === 'javascript' && <JavascriptModal show={true} onHide={handleClose} />}
      {selectedSkill === 'bootstrap' && <BootstrapModal show={true} onHide={handleClose} />}
      {selectedSkill === 'tailwind' && <TailwindModal show={true} onHide={handleClose} />}
      {selectedSkill === 'react' && <ReactModal show={true} onHide={handleClose} />}
      {selectedSkill === 'redux' && <ReduxModal show={true} onHide={handleClose} />}
      {selectedSkill === 'nodejs' && <NodejsModal show={true} onHide={handleClose} />}
      {selectedSkill === 'express' && <ExpressModal show={true} onHide={handleClose} />}
      {selectedSkill === 'redis' && <RedisModal show={true} onHide={handleClose} />}
      {selectedSkill === 'postgresql' && <PostgreSQLModal show={true} onHide={handleClose} />}
      {selectedSkill === 'mongo' && <MongoModal show={true} onHide={handleClose} />}
    </Row>
  );
}

export default Fullstack;
