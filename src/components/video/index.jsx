import React from "react";
import vid1 from "../../assets/videos/video1.mp4";
import vid2 from "../../assets/videos/video2.mp4";
import { Wrapper } from "./style";

const Video = () => {
  return (
    <Wrapper>
      <Wrapper.Text>1-Video darslik</Wrapper.Text>
      <Wrapper.Video controls src={vid1}></Wrapper.Video>
      <Wrapper.Text>2-Video darslik</Wrapper.Text>
      <Wrapper.Video controls src={vid2}></Wrapper.Video>
    </Wrapper>
  );
};

export default Video;
