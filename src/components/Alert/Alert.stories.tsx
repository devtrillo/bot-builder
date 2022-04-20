import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiFillAlert } from "react-icons/ai";

import { Alert } from "./Alert";

const defaultConfig = {
  args: {
    children: "This is a default alert",
    onDismiss: null,
  },
  component: Alert,
  title: "components/Alert",
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  console.log(args);
  return <Alert {...args} />;
};

export const GreenAlert = Template.bind({});
export const DismissableAlert = Template.bind({});
export const RoundedAlert = Template.bind({});

GreenAlert.args = {
  color: "green",
};

DismissableAlert.args = {
  Icon: AiFillAlert,
};
RoundedAlert.args = {
  color: "gray",
  rounded: true,
};

export default defaultConfig;
