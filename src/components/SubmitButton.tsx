import {Button} from "antd";

type Props = {label: string};

const SubmitButton = ({label}: Props) => {
  return (
    <Button type="primary" htmlType="submit">
      {label}
    </Button>
  );
};

export default SubmitButton;
