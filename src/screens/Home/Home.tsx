import { Layout } from "antd";

import Header from "@/components/Header";

const { Content } = Layout;

function HomeScreen() {
  return (
    <Layout>
      <Header />
      <Content></Content>
    </Layout>
  );
}

export default HomeScreen;
