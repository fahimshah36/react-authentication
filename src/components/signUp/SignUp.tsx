import {Form} from "antd";
import {ISignupFormType} from "../../types/loginTypes";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type Props = {};

const SignUp = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: ISignupFormType) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={onFinish}>
      <InputField
        name="email"
        label="Email"
        rules={[{type: "email", message: "Please provide a valid Email!!"}]}
      />
      <InputField name="username" label="Username" />
      <InputField name="pasword" label="Password" password={true} />
      <SubmitButton label="SignUp" />
    </Form>
  );
};

export default SignUp;
