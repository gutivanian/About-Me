import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import project from "./projectArray";
import "./project-style.css";

const postsPerPage = 3;

const Project = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(postsPerPage);
  const [hasMore, setHasMore] = useState(true);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    // Initialize with the first set of projects
    setPostsToShow(project.slice(0, postsPerPage));
  }, []);

  const handleShowMorePosts = () => {
    const endIndex = next + postsPerPage;
    const newPosts = project.slice(next, endIndex);

    if (newPosts.length > 0) {
      setPostsToShow((prevPosts) => [...prevPosts, ...newPosts]);
      setNext(endIndex);
    } else {
      setHasMore(false); // No more posts to load
    }
    setShowLess(true); // Show less button should be available
  };

  const handleShowLessPosts = () => {
    const reducedPosts = postsToShow.slice(0, postsToShow.length - postsPerPage);
    setPostsToShow(reducedPosts);
    setNext(reducedPosts.length);
    setHasMore(true); // Always set hasMore to true when showing less
    setShowLess(reducedPosts.length > postsPerPage); // Show less button should only appear if there are more posts to show
  };

  return (
    <div>
      <div className="grid-container">
        {postsToShow.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.image} alt={item.title} className="project-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p><strong>Program:</strong> {item.program}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <button onClick={handleShowMorePosts}>
          Load more
        </button>
      )}
      {showLess && (
        <button onClick={handleShowLessPosts}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Project;
