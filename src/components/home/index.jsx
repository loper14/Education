import React, { useEffect, useState } from "react";
import App from "../../Particles";
import { Wrapper } from "./style";
import About from "../about";
import Video from "../video";
import Quiz from "../quiz";
const Home = () => {
  const [show, setShow] = useState(false);
  let [render, setRender] = useState("dars");
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <Wrapper.Container>
          <Wrapper.Flexer>
            <Wrapper.Left>
              <Wrapper.Cont className={`active ${show && "hidden"}`}>
                <Wrapper.Theme>
                  Mavzu: <Wrapper.ThemeName>To Be fe'li</Wrapper.ThemeName>
                </Wrapper.Theme>
              </Wrapper.Cont>
              <Wrapper.Wrap>
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

                <About />

                <Video />
              </Wrapper.Wrap>
            </Wrapper.Left>
            {/* <Wrapper.Right>
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
            </Wrapper.Right> */}
          </Wrapper.Flexer>
        </Wrapper.Container>
      </Wrapper>
      <App />
    </>
  );
};

export default Home;
