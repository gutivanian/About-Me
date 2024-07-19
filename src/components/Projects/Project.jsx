import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import project from "./projectArray";

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const Project = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = project.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div>
      <ProjectCard postsToRender={postsToShow} />
      <button onClick={handleShowMorePosts}>Load more</button>
    </div>
  );
};

export default Project;
