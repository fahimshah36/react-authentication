import {Button, Row} from "antd";
import {useUserContext} from "../utils/context/userContext";

type Props = {};

const Dashboard = (props: Props) => {
  const {logOutUser} = useUserContext();
  const handleLogout = () => {
    logOutUser && logOutUser();
  };
  return (
    <div>
      <>
        Dashboard
        <Row justify={"center"} style={{marginTop: "1rem"}}>
          <Button onClick={handleLogout}>LOGOUT</Button>
        </Row>
      </>
    </div>
  );
};

export default Dashboard;
