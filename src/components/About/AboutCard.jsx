import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const [visibleParagraphs, setVisibleParagraphs] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const paragraphs = [
    "I am a master's graduate in theoretical physics from Institut Teknologi Sepuluh Nopember Surabaya, with a keen interest in the IT world, aiming to solve real-world problems related to science, quality of life, education, and hobbies. My journey through the realms of science and technology has been a fascinating adventure, driven by the quest for knowledge and the endless possibilities for innovation.",
    "My passion lies in integrating my physics background with cutting-edge technology to create impactful solutions. Whether it's harnessing advanced programming languages, utilizing state-of-the-art frameworks, or applying technological advancements in novel ways, I'm always eager to tackle new challenges. Keeping abreast of the latest developments is essential to me, as I strive to incorporate them into my projects.",
    "Transforming hobbies and interests into meaningful projects is a source of great satisfaction for me. It allows me to blend creativity with technical skills, whether I'm developing educational tools, enhancing quality of life through technology, or exploring scientific applications. Crafting software solutions and web applications that bring ideas to life through code is where I find immense joy.",
    "Above all, my commitment to continuous improvement drives my journey. I firmly believe that success in both the tech and scientific worlds is rooted in lifelong learning. Every day presents an opportunity to expand my knowledge, refine my skills, and embrace new challenges head-on. This unwavering dedication keeps me pushing the boundaries, constantly seeking to merge my scientific expertise with technological innovation."
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVisibleParagraphs(window.innerWidth < 864 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on the current window width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExpand = () => {
    setVisibleParagraphs((prev) => Math.min(prev + 1, paragraphs.length));
  };

  const handleCollapse = () => {
    setVisibleParagraphs((prev) => Math.max(prev - 1, windowWidth < 864 ? 1 : 2));
  };

  return (
    <Card className="quote-card-view">
      <Card.Body className="about-card">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p className="introduction">
              Hi Everyone, I am <span className="text-blue">Gutivan Alief Syahputra</span> 
              from <span className="text-blue">Surabaya, Indonesia.</span>
            </p>
            <br />
            {paragraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
              <p key={index}>&emsp;{paragraph}</p>
            ))}
          </p>
          {visibleParagraphs < paragraphs.length && (
            <button onClick={handleExpand} className="btn btn-primary mt-3">
              Read More
            </button>
          )}
          {visibleParagraphs > (windowWidth < 864 ? 1 : 2) && (
            <button onClick={handleCollapse} className="btn btn-secondary mt-3 ml-2">
              Show Less
            </button>
          )}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
