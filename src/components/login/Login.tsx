import {Form, Row, Typography} from "antd";
import {ILoginFormType} from "../../types/loginTypes";
import CheckboxField from "../CheckboxField";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type Props = {};

const Login = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: ILoginFormType) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <InputField name="username" label="Username" />
      <InputField name="pasword" label="Password" password={true} />
      <CheckboxField name="isRemember" label="Remember Me" checked={true} />
      <SubmitButton label="Login" />
      <Row style={{marginTop: "0.3rem"}}>
        <Typography.Link underline style={{color: "wheat"}}>
          Forgot Your Password?
        </Typography.Link>
      </Row>
    </Form>
  );
};

export default Login;
