import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  const [firstTypewriterDone, setFirstTypewriterDone] = useState(false);

  return (
    <>
      {!firstTypewriterDone && (
        <Typewriter
          options={{
            strings: ["Welcome To My Blog"],
            autoStart: true,
            loop: false,
            deleteSpeed: 50,
            wrapperClassName: "typewriter"
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Thanks for visiting")
              .pauseFor(1500)
              .deleteAll()
              .typeString("I'm Currently Interested In")
              .pauseFor(1500)
              .callFunction(() => {
                setFirstTypewriterDone(true);
              })
              .start();
          }}
        />
      )}
      {firstTypewriterDone && (
        <Typewriter
          options={{
            strings: [
              "Theoretical Physics",
              "Big Data Engineering",
              "Deep Learning",
              "Web Development",
              "Blockchain Development",
              "Computational Engineering",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            wrapperClassName: "typewriter"            
          }}
        />
      )}
    </>
  );
}

export default Typing;
