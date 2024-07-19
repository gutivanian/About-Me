import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import excel from "../../assets/Data Analyst/excel.png";
import ggplot from "../../assets/Data Analyst/ggplot.png";
import pandas from "../../assets/Data Analyst/pandas.png";
import numpy from "../../assets/Data Analyst/numpy.png";
import scrapy from "../../assets/Data Analyst/scrapy.png";
import matplotlib from "../../assets/Data Analyst/matplotlib.png";
import seaborn from "../../assets/Data Analyst/seaborn.png";
import plotly from "../../assets/Data Analyst/plotly.png";
import sqlite from "../../assets/Data Analyst/SQLite.png";
import powerbi from "../../assets/Data Analyst/powerbi.png";
import tableau from "../../assets/Data Analyst/tableau.png";
import sklearn from "../../assets/Data Analyst/sklearn.png";
import keras from "../../assets/Data Analyst/keras.png";
import postgresql from "../../assets/Data Analyst/postgresql.png";

// Import modal components
import ExcelModal from "./SkillModal/ExcelModal.jsx";
import GGPlotModal from "./SkillModal/GGPlotModal.jsx";
import PandasModal from "./SkillModal/PandasModal.jsx";
import NumpyModal from "./SkillModal/NumpyModal.jsx";
import ScrapyModal from "./SkillModal/ScrapyModal.jsx";
import MatplotlibModal from "./SkillModal/MatplotlibModal.jsx";
import SeabornModal from "./SkillModal/SeabornModal.jsx";
import PlotlyModal from "./SkillModal/PlotlyModal.jsx";
import SQLiteModal from "./SkillModal/SQLiteModal.jsx";
import PowerBIModal from "./SkillModal/PowerBIModal.jsx";
import TableauModal from "./SkillModal/TableauModal.jsx";
import SklearnModal from "./SkillModal/SklearnModal.jsx";
import KerasModal from "./SkillModal/KerasModal.jsx";
import PostgreSQLModal from "./SkillModal/PostgreSQLModal.jsx";

function DataAnalysis() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleButtonClick = (skillName) => {
    setSelectedSkill(skillName);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('excel')}>
        <img src={excel} alt="Excel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('ggplot')}>
        <img src={ggplot} alt="ggplot2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('pandas')}>
        <img src={pandas} alt="Pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('numpy')}>
        <img src={numpy} alt="Numpy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('scrapy')}>
        <img src={scrapy} alt="Scrapy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('matplotlib')}>
        <img src={matplotlib} alt="matplotlib" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('seaborn')}>
        <img src={seaborn} alt="Seaborn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('plotly')}>
        <img src={plotly} alt="Plotly" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('sqlite')}>
        <img src={sqlite} alt="SQLite3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('postgresql')}>
        <img src={postgresql} alt="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('powerbi')}>
        <img src={powerbi} alt="Power BI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('tableau')}>
        <img src={tableau} alt="Tableau" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('sklearn')}>
        <img src={sklearn} alt="Scikit-Learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('keras')}>
        <img src={keras} alt="Keras" />
      </Col>

      {selectedSkill === 'excel' && <ExcelModal show={true} onHide={handleClose} />}
      {selectedSkill === 'ggplot' && <GGPlotModal show={true} onHide={handleClose} />}
      {selectedSkill === 'pandas' && <PandasModal show={true} onHide={handleClose} />}
      {selectedSkill === 'numpy' && <NumpyModal show={true} onHide={handleClose} />}
      {selectedSkill === 'scrapy' && <ScrapyModal show={true} onHide={handleClose} />}
      {selectedSkill === 'matplotlib' && <MatplotlibModal show={true} onHide={handleClose} />}
      {selectedSkill === 'seaborn' && <SeabornModal show={true} onHide={handleClose} />}
      {selectedSkill === 'plotly' && <PlotlyModal show={true} onHide={handleClose} />}
      {selectedSkill === 'sqlite' && <SQLiteModal show={true} onHide={handleClose} />}
      {selectedSkill === 'postgresql' && <PostgreSQLModal show={true} onHide={handleClose} />}
      {selectedSkill === 'powerbi' && <PowerBIModal show={true} onHide={handleClose} />}
      {selectedSkill === 'tableau' && <TableauModal show={true} onHide={handleClose} />}
      {selectedSkill === 'sklearn' && <SklearnModal show={true} onHide={handleClose} />}
      {selectedSkill === 'keras' && <KerasModal show={true} onHide={handleClose} />}
    </Row>
  );
}

export default DataAnalysis;
