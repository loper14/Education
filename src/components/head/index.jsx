import React, { useState } from "react";
import { Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Avatar, Drawer, Input, Modal } from "antd";
import { ExclamationCircleFilled, LoginOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Head = () => {
  let { count } = useSelector((state) => state.data);
  let signout = useSignOut();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  let auth = useAuthUser();

  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: "Siz rostdan ham hisobingizdan chiqishni xoxlaysizmi?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        signout();
        navigate("/signup");
      },
      onCancel() {},
    });
  };
  return (
    <Wrapper>
      <Drawer
        width={600}
        title="Profile"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Wrapper.TextContainer>
          <Wrapper.Text>Ismingiz:</Wrapper.Text>
          <Input size="large" value={auth().name} />
        </Wrapper.TextContainer>
        <Wrapper.TextContainer>
          <Wrapper.Text>Familyangiz:</Wrapper.Text>
          <Input size="large" value={auth().surname} />
        </Wrapper.TextContainer>
        <Wrapper.TextContainer>
          <Wrapper.Text>Guruhingiz:</Wrapper.Text>
          <Input size="large" value={auth().group} />
        </Wrapper.TextContainer>
        <Wrapper.TextContainer>
          <Wrapper.Text>ID raqam:</Wrapper.Text>
          <Input size="large" value={auth().id} />
        </Wrapper.TextContainer>
        <Wrapper.TextContainer>
          <Wrapper.Text>O'zlashtirish darajangiz:</Wrapper.Text>
          <Input size="large" value={(count / 5) * 70 + "%"} />
        </Wrapper.TextContainer>
        <Wrapper.LogoutBtn danger onClick={showConfirm}>
          Chiqish <LoginOutlined style={{ fontSize: "20px" }} />
        </Wrapper.LogoutBtn>
      </Drawer>

      <Wrapper.Container>
        <Wrapper.Left>
          <Wrapper.Title>
            {auth().name.toUpperCase() + " " + auth().surname.toUpperCase()}
          </Wrapper.Title>
          <Wrapper.Text>{auth().group}</Wrapper.Text>
          <Wrapper.Text style={{ marginLeft: "15px" }}>
            O'zlashtirish darajangiz: {(count / 5) * 70}%
          </Wrapper.Text>
        </Wrapper.Left>
        <Wrapper.Right>
          <Avatar
            onClick={showDrawer}
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
            size="large"
          >
            {auth().name[0].toUpperCase()}
          </Avatar>
        </Wrapper.Right>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Head;
