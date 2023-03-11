import {Form, Typography} from "antd";
import {IForgetPassword} from "../../types/loginTypes";
import {useUserContext} from "../../utils/context/userContext";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type Props = {setShowModal: (arg: boolean) => void};

const ForgetPassword = ({setShowModal}: Props) => {
  const {forgotPassword} = useUserContext();
  const [form] = Form.useForm();
  const onFinish = (values: IForgetPassword) => {
    console.log(values);
    forgotPassword && forgotPassword(values.email);
    setShowModal(false);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Typography.Text style={{marginBottom: "1rem"}}>
        Enter your email to recover your password
      </Typography.Text>
      <InputField
        name="email"
        label="Email"
        rules={[{required: true, message: "Email is required!!"}]}
      />
      <SubmitButton label="Submit" />
    </Form>
  );
};

export default ForgetPassword;
