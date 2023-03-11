import {Form, Modal, Row, Typography} from "antd";
import {useState} from "react";
import {ILoginFormType} from "../../types/loginTypes";
import {useUserContext} from "../../utils/context/userContext";
import CheckboxField from "../CheckboxField";
import ForgetPassword from "../forgetPassword/ForgetPassword";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type Props = {};

const Login = (props: Props) => {
  const [form] = Form.useForm();
  const {signInUser} = useUserContext();
  const [showModal, setShowModal] = useState<boolean>(false);

  const onFinish = (values: ILoginFormType) => {
    console.log(values);
    signInUser && signInUser(values.email, values.password);
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Modal
          open={showModal}
          footer={null}
          title="Forgot Password?"
          onCancel={() => setShowModal(false)}
        >
          <ForgetPassword setShowModal={setShowModal} />
        </Modal>
        <InputField
          name="email"
          label="Email"
          rules={[
            {required: true, message: "Email is required!!"},
            {type: "email", message: "Please provide a valid Email!!"},
          ]}
        />
        <InputField
          name="password"
          label="Password"
          password={true}
          rules={[{required: true, message: "Password is required!!"}]}
        />
        <CheckboxField name="isRemember" label="Remember Me" checked={true} />
        <SubmitButton label="Login" />
        <Row style={{marginTop: "0.3rem"}}>
          <Typography.Link
            underline
            style={{color: "wheat"}}
            onClick={() => setShowModal(true)}
          >
            Forgot Your Password?
          </Typography.Link>
        </Row>
      </Form>
    </>
  );
};

export default Login;
