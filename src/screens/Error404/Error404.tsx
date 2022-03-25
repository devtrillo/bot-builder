import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error404Screen = () => {
  const navigate = useNavigate();

  const returnHome = () => navigate("/");
  return (
    <Result
      extra={
        <Button type="primary" onClick={returnHome}>
          Back Home
        </Button>
      }
      status="404"
      subTitle="Sorry, the page you visited does not exist."
      title="404"
    />
  );
};

export default Error404Screen;
