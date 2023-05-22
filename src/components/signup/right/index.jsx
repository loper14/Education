import React, { useState } from "react";
import { Wrapper } from "./style";
import signLogo from "../../../assets/imgs/sign-logo.jpg";
import { Select, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

const Right = () => {
  const [playingAnimaton, setPlayingAnimaton] = useState(false);
  const warningAnimationHandler = () => {
    setPlayingAnimaton(true);
    setTimeout(() => {
      setPlayingAnimaton(false);
    }, 1000);
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: <Wrapper.WarningTitle>Diqqat!</Wrapper.WarningTitle>,
      description: (
        <Wrapper.WarningTitle2>
          Iltimos barcha maydonlarni to'ldiring
        </Wrapper.WarningTitle2>
      ),
    });
  };
  let signin = useSignIn();
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState({ name: "", surname: "", group: "" });

  let onSubmit = () => {
    if (!data.name || !data.surname || !data.group) {
      openNotificationWithIcon("warning");
      warningAnimationHandler();
      return;
    }
    signin({
      token: "21n2ln2njn3undun",
      tokenType: "Bearer",
      authState: {
        name: data.name,
        surname: data.surname,
        group: data.group,
        id: Math.floor(Math.random() * 10000),
      },
      expiresIn: 3600,
    });

    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Wrapper>
      {contextHolder}
      <Wrapper.Left>
        <Wrapper.LeftImgDiv>
          <Wrapper.LeftImg src={signLogo} />
        </Wrapper.LeftImgDiv>
        <Wrapper.Label>Ismingiz:</Wrapper.Label>
        <Wrapper.Input
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="ism kiriting"
        />
        <Wrapper.Label>Familiyangiz:</Wrapper.Label>
        <Wrapper.Input
          onChange={(e) => setData({ ...data, surname: e.target.value })}
          placeholder="familiya kiriting"
        />
        <Wrapper.Label>Guruhingizni tanlang:</Wrapper.Label>
        <Select
          defaultValue="1 - guruh"
          size="large"
          style={{
            width: 120,
            fontSize: "20px",
          }}
          onChange={(e) => setData({ ...data, group: e })}
          options={[
            {
              value: "1 - guruh",
              label: "1 - guruh",
            },
            {
              value: "2 - guruh",
              label: "2 - guruh",
            },
            {
              value: "3 - guruh",
              label: "3 - guruh",
            },
            {
              value: "4 - guruh",
              label: "4 - guruh",
            },
            {
              value: "5 - guruh",
              label: "5 - guruh",
            },
          ]}
        />
        <Wrapper.SubmitBtn
          warningAnimation={playingAnimaton}
          type="primary"
          onClick={onSubmit}
        >
          {loading ? <LoadingOutlined /> : "Jo'natish"}
        </Wrapper.SubmitBtn>
      </Wrapper.Left>
    </Wrapper>
  );
};

export default Right;
