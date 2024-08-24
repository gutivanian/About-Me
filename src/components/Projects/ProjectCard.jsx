import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProjectCard = ({ postsToRender }) => {
  return (
    <Row xs={1} md={3} className="g-4 css-selector">
      {postsToRender.map((post, index) => (
        <Col key={index}>
          <Card className="h-100 project-card">
            <Card.Img variant="top" src={post.image} alt={post.title} className="project-image" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{post.title}</Card.Title>
              <div className="description-container">
                <Card.Text>
                  {post.description}
                </Card.Text>
              </div>
              <div className="mt-auto">
                {post.tools && post.tools.map((tool, i) => (
                  <span key={i} className="badge bg-secondary ms-1">{tool}</span>
                ))}
              </div>
              <div className="mt-3 d-flex justify-content-between">
                {post.demoURL && (
                  <Button variant="outline-primary" href={post.demoURL} target="_blank" id = "project-demo">Demo</Button>
                )}
                {post.sourceURL && (
                  <Button variant="outline-success" href={post.sourceURL} target="_blank" id = "project-source">Source</Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectCard;
