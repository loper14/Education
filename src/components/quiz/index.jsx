import React, { useState } from "react";
import { Button, Input, Modal, notification } from "antd";
import { Wrapper } from "./style";

function Quiz() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [selectedAnswer, setSelectedAnswer] = useState("");
  let [name, setName] = useState("");
  let [start, setStart] = useState(false);
  let [isClick, setIsClick] = useState(false);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: <Wrapper.Msg>Diqqat!</Wrapper.Msg>,
      description: (
        <Wrapper.ModalText>
          Testni boshlashdan oldin ismingizni kiritishingiz shart!
        </Wrapper.ModalText>
      ),
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (name.length > 0) {
      setStart(true);
      setIsModalOpen(false);
    } else {
      openNotificationWithIcon("warning");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "___ the sun shining today?",
      options: ["Is", "Am", "Are", "It"],
      answer: "Is",
    },
    {
      question: "I ___ five years old when I went to school",
      options: ["am", "were", "was", "is"],
      answer: "was",
    },
    {
      question: "He ___ a good person",
      options: ["are", "is", "it", "the"],
      answer: "is",
    },
    {
      question: "'You is student' Ushbu jumla tog'rimi?",
      options: [
        "Ha to'g'ri",
        "Yo'q noto'g'ri",
        "Bilmadim",
        "To'gri javob yo'q",
      ],
      answer: "Yo'q noto'g'ri",
    },
    {
      question: "We ___ studying hard for the exam",
      options: ["were", "was", "is", "are"],
      answer: "are",
    },
  ];

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };
  const submit = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const success = () => {
    Modal.success({
      onOk: () => {
        setStart(false);
        setCurrentQuestion(0);
      },
      content: (
        <div>
          <Wrapper.Text>Tabriklaymiz {name.toUpperCase()}!</Wrapper.Text>
          <Wrapper.Result>
            Siz {questions.length} ta savoldan {score} tasiga to'gri javob
            berdingiz!
          </Wrapper.Result>
        </div>
      ),
    });
  };

  return (
    <Wrapper>
      <Modal
        title="Test"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Boshlash"
        cancelText="Orqaga"
      >
        <Wrapper.ModalText>
          Testni boshlash uchun ismingizni kiriting:
        </Wrapper.ModalText>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz..."
          onKeyDown={(e) => e.key === "Enter" && handleOk()}
        />
      </Modal>
      {start ? (
        <div>
          {currentQuestion < questions.length ? (
            <Wrapper.Quiz>
              <Wrapper.Question>
                {questions[currentQuestion].question}
              </Wrapper.Question>

              {questions[currentQuestion].options.map((option) => (
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
                Submit
              </Wrapper.Submit>

              <Wrapper.QuestionLength>
                Savol {currentQuestion + 1} / {questions.length}
              </Wrapper.QuestionLength>
            </Wrapper.Quiz>
          ) : (
            success()
          )}
        </div>
      ) : (
        <>
          <Wrapper.Title>
            Siz bu yerda mavzuga oid testlarni bajarasiz. Testni boshlash uchun
            quyidagi tugmani bosing
          </Wrapper.Title>
          <Button
            type="primary"
            onClick={showModal}
            style={{ fontSize: "19px", height: "45px" }}
          >
            Testni boshlash
          </Button>
        </>
      )}
    </Wrapper>
  );
}

export default Quiz;
