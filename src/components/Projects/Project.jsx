import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import project from './projectArray';
import { Container, Button } from 'react-bootstrap';
import './project-style.css'

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
      setHasMore(false);
    }
    setShowLess(true);
  };

  const handleShowLessPosts = () => {
    const reducedPosts = postsToShow.slice(0, postsToShow.length - postsPerPage);
    setPostsToShow(reducedPosts);
    setNext(reducedPosts.length);
    setHasMore(true);
    setShowLess(reducedPosts.length > postsPerPage);
  };

  return (
    <>
    <div className='projects'>
    <h1 className="project-heading">
          <strong className="main-name">Projects </strong>
    </h1>
    </div>
    <Container>
      <ProjectCard postsToRender={postsToShow} />
      <div className="text-center mt-4">
  {hasMore && <Button variant="primary" onClick={handleShowMorePosts} className="me-3">Load more</Button>}
  {showLess && <Button variant="secondary" onClick={handleShowLessPosts}>Show less</Button>}
</div>
    </Container>
    </>
  );
};

export default Project;
