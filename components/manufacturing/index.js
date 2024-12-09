import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../heading";
import classes from "./index.module.scss";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const Manufacturing = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Initially set to false
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) { // Check if the video element exists
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={classes.customize}>
      <Container>
        <Row className="p-0 align-items-center">
          <Col lg={6}>
            <Heading
              handCrafted
              subHeading="Manufacturing"
              title="PRODUCTION PROCESS"
              subtitle="Our shoes are crafted with precision, combining expert craftsmanship and high-quality materials at every stage of production. From design to final assembly, we ensure durability, comfort, and style in every pair."
            />
          </Col>
          <Col lg={6}>
            <div className={classes.videoBg}>
              <div className={`img-box ${classes.video}`}>
                <video ref={videoRef} className={classes.backgroundVideo} loop>
                  <source src="/images/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button className={classes.playButton} onClick={handlePlayPause}>
                  {isPlaying ? <CiPause1 /> : <CiPlay1 />}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Manufacturing;
