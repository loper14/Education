import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Text = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;
Wrapper.Video = styled.video`
  width: 80%;
  height: 500px;
  display: block;
  margin-bottom: 35px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  transition: all 0.3s ease-out;
  :hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
