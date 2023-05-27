import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae cupiditate illo eaque nesciunt ducimus, illum deleniti libero aliquid harum perferendis commodi, ut reiciendis nam consequuntur molestias, asperiores quisquam minus!",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae cupiditate illo eaque nesciunt ducimus, illum deleniti libero aliquid harum perferendis commodi, ut reiciendis nam consequuntur molestias, asperiores quisquam minus!",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
