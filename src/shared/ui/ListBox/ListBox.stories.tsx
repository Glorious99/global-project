import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";

const meta = {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    defaultValue: "Укажите валюту",
    direction: "bottom",
    items: [
      { value: "123", content: <div></div> },
      { value: "asd", content: <div></div>, disabled: true },
      { value: "zxc", content: <div></div> },
    ],
  },
};
