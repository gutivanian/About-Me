// ProjectCard.js
import React from 'react';

const ProjectCard = ({ postsToRender }) => {
  return (
    <div className="grid-container">
      {postsToRender.map((post, index) => (
        <div key={index} className="grid-item">
          <img src={post.image} alt={post.title} className="project-image" />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p><strong>Programs Used:</strong> {post.program}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
