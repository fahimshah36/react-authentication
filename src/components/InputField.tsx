import {Form, Input} from "antd";
import {Rule} from "antd/lib/form";

type Props = {name: string; label: string; password?: boolean; rules?: Rule[]};

function InputField({name, label, password, rules}: Props) {
  return (
    <Form.Item name={name} rules={rules}>
      {!password ? (
        <Input
          placeholder={label}
          bordered={false}
          style={{border: "solid #535963", padding: "0.4rem"}}
        />
      ) : (
        <Input.Password
          placeholder={label}
          bordered={false}
          style={{border: "solid #535963", padding: "0.4rem"}}
        />
      )}
    </Form.Item>
  );
}

export default InputField;
