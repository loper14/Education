import { Button, Input } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  width: 400px;
`;

Wrapper.Left = styled.div``;
Wrapper.LeftImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.LeftImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
Wrapper.Label = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 20px;
`;
Wrapper.Input = styled(Input)`
  width: 400px;
  height: 45px;
  font-size: 18px;
`;
Wrapper.SubmitBtn = styled(Button)`
  width: 400px;
  height: 50px;
  font-size: 20px;
  margin-top: 25px;
`;
Wrapper.WarningTitle = styled.div`
  font-size: 20px;
`;
Wrapper.WarningTitle2 = styled.div`
  font-size: 16px;
`;
