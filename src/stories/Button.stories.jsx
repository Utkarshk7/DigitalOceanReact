import React from "react";

import { Button } from "./Button";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Click Primary!",
};

//👇 Each story then reuses that template
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

//👇 Each story then reuses that template
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

//👇 Each story then reuses that template
export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
