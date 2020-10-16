import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Component from "./index";

export default {
  title: "Atom/Text Field",
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Standard = Template.bind({});
