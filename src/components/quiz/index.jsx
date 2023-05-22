import React, { useState } from "react";
import { Button, Input, Modal, notification } from "antd";
import { Wrapper } from "./style";
import { setScoreByRedux } from "../../redux/slices/slice";
import { useDispatch } from "react-redux";

function Quiz({ data }) {
  let dispatch = useDispatch();
  let [selectedAnswer, setSelectedAnswer] = useState("");
  let [name, setName] = useState("");
  let [start, setStart] = useState(false);
  let [isClick, setIsClick] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };
  const submit = () => {
    if (selectedAnswer === data[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const success = () => {
    Modal.success({
      onOk: () => {
        setStart(false);
        setCurrentQuestion(0);
        dispatch(setScoreByRedux(score));
      },
      content: (
        <div>
          <Wrapper.Text>Tabriklaymiz {name.toUpperCase()}!</Wrapper.Text>
          <Wrapper.Result>
            Siz {data.length} ta savoldan {score} tasiga to'gri javob berdingiz!
          </Wrapper.Result>
        </div>
      ),
    });
  };

  return (
    <Wrapper>
      {start ? (
        <div>
          {currentQuestion < data.length ? (
            <Wrapper.Quiz>
              <Wrapper.Question>
                {data[currentQuestion].question}
              </Wrapper.Question>

              {data[currentQuestion].options.map((option) => (
                <Wrapper.Option
                  key={option}
                  isClick={option === isClick ? true : false}
                  onClick={() => {
                    handleAnswer(option);
                    setIsClick(option);
                  }}
                >
                  {option}
                </Wrapper.Option>
              ))}
              <Wrapper.Submit type="primary" onClick={submit}>
                Jo'natish
              </Wrapper.Submit>

              <Wrapper.QuestionLength>
                Savol {currentQuestion + 1} / {data.length}
              </Wrapper.QuestionLength>
            </Wrapper.Quiz>
          ) : (
            success()
          )}
        </div>
      ) : (
        <>
          <Button
            type="primary"
            onClick={() => setStart(true)}
            style={{ fontSize: "18px", height: "40px", marginTop: "15px" }}
          >
            Testni boshlash
          </Button>
        </>
      )}
    </Wrapper>
  );
}

export default Quiz;
