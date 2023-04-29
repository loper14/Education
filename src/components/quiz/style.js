import { Button } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.ModalText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
Wrapper.Quiz = styled.div`
  width: 90%;
  box-shadow: 1px 1px 10px grey;
  border-radius: 10px;
  margin-top: 35px;
  padding-left: 20px;
  height: 440px;
`;
Wrapper.Question = styled.div`
  font-size: 32px;
  padding-top: 30px;
  border-bottom: 1px solid rgba(164, 157, 157, 0.7);
  margin-bottom: 40px;
  padding-left: 10px;
  padding-bottom: 8px;
`;
Wrapper.Option = styled.div`
  font-size: 18px;
  border: 1px solid skyblue;
  width: 80%;
  border-radius: 10px;
  margin-top: 15px;
  padding: 8px;
  padding-left: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ isClick }) => (isClick ? "white" : "")};
  background-color: ${({ isClick }) => (isClick ? "rgb(93, 127, 231)" : "")};
  :hover {
    background-color: rgb(93, 127, 231);
    color: white;
  }
`;
Wrapper.QuestionLength = styled.div`
  padding-top: 40px;
`;
Wrapper.Text = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  font-family: "Forum", cursive;
`;
Wrapper.Result = styled.div`
  font-size: 20px;
  text-align: center;
`;
Wrapper.Submit = styled(Button)`
  float: right;
  margin-right: 30px;
  margin-top: 30px;
  font-size: 20px;
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Title = styled.div`
  font-size: 24px;
  padding: 30px 0;
`;
Wrapper.Msg = styled.div`
  font-size: 24px;
`;
