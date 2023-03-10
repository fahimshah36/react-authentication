import {Card, Tabs} from "antd";
import type {TabsProps} from "antd";
import "../styles/AuthCard.css";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

type Props = {};

const AuthCard = (props: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login`,
      children: <Login />,
    },
    {
      key: "2",
      label: `SignUp`,
      children: <SignUp />,
    },
  ];
  return (
    <div>
      <Card className="mainCard" style={{padding: "5rem"}}>
        <Tabs items={items} tabBarGutter={200} size="large" />
      </Card>
    </div>
  );
};

export default AuthCard;
