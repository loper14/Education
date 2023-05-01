import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1300px;
  margin: auto;
`;
Wrapper.Flexer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 50px;
  padding-top: 100px;
`;
Wrapper.Cont = styled.div`
  background-color: rgb(93, 155, 231);
  padding: 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 95%;
  color: white;
  background: rgb(17, 162, 182);
  background: linear-gradient(
    90deg,
    rgba(17, 162, 182, 1) 3%,
    rgba(255, 253, 253, 1) 90%
  );
`;
Wrapper.Left = styled.div`
  width: 800px;
  border-right: 2px solid grey;
`;
Wrapper.SubjectName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
Wrapper.Theme = styled.div`
  font-size: 30px;
  padding-top: 16px;
`;
Wrapper.PlanRender = styled.div``;
Wrapper.ThemeName = styled.span`
  font-size: 30px;
  font-style: italic;
  padding-top: 16px;
`;
Wrapper.Plan = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-top: 50px;
`;
Wrapper.Ul = styled.ul``;
Wrapper.Li = styled.li`
  font-family: "Forum", cursive;
  font-size: 20px;
`;
Wrapper.Right = styled.div``;
Wrapper.RightTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
`;
Wrapper.RightIcon = styled.div``;
Wrapper.RightItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  margin-bottom: 22px;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  border-bottom: ${({ isEnd }) =>
    !isEnd ? "1px solid rgba(164, 157, 157, 0.5)" : ""};
  width: 290px;
  padding-bottom: 10px;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;
