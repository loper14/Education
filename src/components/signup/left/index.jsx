import React from "react";
import { Wrapper } from "./style";
import back from "../../../assets/imgs/login-back.svg";

const Left = () => {
  return (
    <Wrapper>
      <Wrapper.Img src={back} />
    </Wrapper>
  );
};

export default Left;
