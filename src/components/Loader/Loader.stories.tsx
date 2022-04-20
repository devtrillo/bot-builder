import CustomMDXDocumentation from "./docs.mdx";
import Loader from "./Loader";

const defaultConfig = {
  component: Loader,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
  title: "components/Loader",
};

export const Default = () => <Loader />;

export default defaultConfig;
