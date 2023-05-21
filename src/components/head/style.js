import { Button } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  background-color: #1076dd;
  height: 100px;
`;
Wrapper.Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding-top: 20px;
`;
Wrapper.Left = styled.div``;
Wrapper.Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 7px;
`;
Wrapper.Text = styled.span`
  font-size: 18px;
  width: 120px;
  display: inline;
`;
Wrapper.Right = styled.div``;
Wrapper.TextContainer = styled.div`
  display: flex;
  grid-gap: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
Wrapper.LogoutBtn = styled(Button)`
  margin-top: 10px;
  width: 200px;
  height: 45px;
  font-size: 20px;
`;
