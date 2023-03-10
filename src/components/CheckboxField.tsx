import {Form, Checkbox} from "antd";

type Props = {name: string; label: string; checked: boolean};

const CheckboxField = ({name, label, checked}: Props) => {
  return (
    <Form.Item name={name}>
      <Checkbox checked={checked}>Remember Me</Checkbox>
    </Form.Item>
  );
};

export default CheckboxField;
