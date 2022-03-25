import { Button, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Header = () => {
  const navigate = useNavigate();
  const goToAuth = () => {
    navigate("/authenticate");
  };
  return (
    <Layout.Header className="flex justify-between items-center">
      <Title style={{ color: "white" }}>Bot Builder</Title>
      <div className="gap-5 flex">
        <Button type="primary" onClick={goToAuth}>
          Login
        </Button>
      </div>
    </Layout.Header>
  );
};

export default Header;
