import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import vscode from "../../assets/Tool/vscode.png";
import cmd from "../../assets/Tool/cmd.png";
import git from "../../assets/Tool/git.png";
import github from "../../assets/Tool/github.png";
import pycharm from "../../assets/Tool/pycharm.png";
import docker from "../../assets/Tool/docker.png";
import jitbit from "../../assets/Tool/jitbit.png";
import wolfram from "../../assets/Tool/wolfram.png";
import jupyter from "../../assets/Tool/jupyter.png";
import texstudio from "../../assets/Tool/texstudio.png";

import VSCodeModal from "./SkillModal/VSCodeModal";
import CmdModal from "./SkillModal/CmdModal";
import GitModal from "./SkillModal/GitModal";
import GithubModal from "./SkillModal/GithubModal";
import PyCharmModal from "./SkillModal/PyCharm";
import DockerModal from "./SkillModal/DockerModal";
import JitbitModal from "./SkillModal/JitbitModal";
import MathematicaModal from "./SkillModal/MathematicaModal";
import JupyterModal from "./SkillModal/JupyterModal";
import TEXStudioModal from "./SkillModal/TEXStudioModal";

function Tool() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleButtonClick = (skillName) => {
    setSelectedSkill(skillName);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
<>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('VSCode')}>
          <img src={vscode} alt="VSCode" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('cmd')}>
          <img src={cmd} alt="cmd" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('git')}>
          <img src={git} alt="git" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('Github')}>
          <img src={github} alt="Github" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('PyCharm')}>
          <img src={pycharm} alt="PyCharm" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('Docker')}>
          <img src={docker} alt="Docker" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('Jitbit')}>
          <img src={jitbit} alt="Jitbit" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('Mathematica')}>
          <img src={wolfram} alt="Mathematica" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('Jupyter')}>
          <img src={jupyter} alt="Jupyter" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('TEXStudio')}>
          <img src={texstudio} alt="TEXStudio" />
        </Col>
      </Row>
      {/* Modal components based on selectedSkill */}
      {selectedSkill === 'VSCode' && <VSCodeModal show={true} onHide={handleClose} />}
      {selectedSkill === 'cmd' && <CmdModal show={true} onHide={handleClose} />}
      {selectedSkill === 'git' && <GitModal show={true} onHide={handleClose} />}
      {selectedSkill === 'Github' && <GithubModal show={true} onHide={handleClose} />}
      {selectedSkill === 'PyCharm' && <PyCharmModal show={true} onHide={handleClose} />}
      {selectedSkill === 'Docker' && <DockerModal show={true} onHide={handleClose} />}
      {selectedSkill === 'Jitbit' && <JitbitModal show={true} onHide={handleClose} />}
      {selectedSkill === 'Mathematica' && <MathematicaModal show={true} onHide={handleClose} />}
      {selectedSkill === 'Jupyter' && <JupyterModal show={true} onHide={handleClose} />}
      {selectedSkill === 'TEXStudio' && <TEXStudioModal show={true} onHide={handleClose} />}
</>
  );
}

export default Tool;
