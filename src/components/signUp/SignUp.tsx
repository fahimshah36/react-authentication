import {Form} from "antd";
import {ISignupFormType} from "../../types/loginTypes";
import {useUserContext} from "../../utils/context/userContext";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type Props = {};

const SignUp = (props: Props) => {
  const [form] = Form.useForm();
  const {registerUser} = useUserContext();

  const onFinish = (values: ISignupFormType) => {
    console.log(values);
    registerUser &&
      registerUser(values.email, values.username, values.password);
  };
  return (
    <Form form={form} onFinish={onFinish}>
      <InputField
        name="email"
        label="Email"
        rules={[
          {required: true, message: "Email is required!!"},
          {type: "email", message: "Please provide a valid Email!!"},
        ]}
      />
      <InputField name="username" label="Username" />
      <InputField
        name="password"
        label="Password"
        password={true}
        rules={[
          {required: true, message: "Password is required!!"},
          {
            validator(_, value) {
              if (value) {
                if (value.length < 6) {
                  return Promise.reject(
                    "Password must be more than 6 characters!!"
                  );
                } else {
                  return Promise.resolve();
                }
              } else {
                return Promise.resolve();
              }
            },
          },
        ]}
      />
      <SubmitButton label="SignUp" />
    </Form>
  );
};

export default SignUp;
