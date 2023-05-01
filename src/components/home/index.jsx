import React, { useState } from "react";
import { Wrapper } from "./style";
import { SlBookOpen } from "react-icons/sl";
import { MdVideoLibrary } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import About from "../about";
import Video from "../video";
import Quiz from "../quiz";
const Home = () => {
  let [render, setRender] = useState("dars");
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Flexer>
          <Wrapper.Left>
            <Wrapper.Cont>
              <Wrapper.SubjectName>Fan: Ingliz-tili</Wrapper.SubjectName>
              <Wrapper.Theme>
                Mavzu: <Wrapper.ThemeName>To Be fe'li</Wrapper.ThemeName>
              </Wrapper.Theme>
            </Wrapper.Cont>
            <Wrapper.Wrap>
              {render === "dars" ? (
                <Wrapper.PlanRender>
                  <Wrapper.Plan>Reja:</Wrapper.Plan>
                  <Wrapper.Ul>
                    <Wrapper.Li>To be fe'li nima?</Wrapper.Li>
                    <Wrapper.Li>To be fe'lining ishlatilishi</Wrapper.Li>
                    <Wrapper.Li>To be fe'li orqali gap tuzish </Wrapper.Li>
                    <Wrapper.Li>
                      To be fe'lini darak, inkor va so'roq shakllarda
                      foydalanish
                    </Wrapper.Li>
                  </Wrapper.Ul>
                </Wrapper.PlanRender>
              ) : render === "about" ? (
                <About />
              ) : render === "video" ? (
                <Video />
              ) : (
                <Quiz />
              )}
            </Wrapper.Wrap>
          </Wrapper.Left>
          <Wrapper.Right>
            <Wrapper.RightTitle>Dars menyusi</Wrapper.RightTitle>
            <Wrapper.RightItem onClick={() => setRender("dars")}>
              <SlBookOpen />
              Dars
            </Wrapper.RightItem>
            <Wrapper.RightItem onClick={() => setRender("about")}>
              <HiInformationCircle />
              Dars haqida tushuncha
            </Wrapper.RightItem>
            <Wrapper.RightItem onClick={() => setRender("video")}>
              <MdVideoLibrary /> Video darslik
            </Wrapper.RightItem>
            <Wrapper.RightItem isEnd={true} onClick={() => setRender("quiz")}>
              <FaTasks /> Dars bo'yicha mashq
            </Wrapper.RightItem>
          </Wrapper.Right>
        </Wrapper.Flexer>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Home;
