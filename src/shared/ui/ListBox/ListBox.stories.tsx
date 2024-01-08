import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";

const meta = {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "100px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const topLeft: Story = {
  args: {
    direction: "top left",
    value: "123",
    items: [
      { value: "123", content: "asdasd" },
      { value: "asd", content: "zxcc", disabled: true },
      { value: "zxc", content: "asdqwe" },
    ],
  },
};

export const topRight: Story = {
  args: {
    direction: "top right",
    value: "123",
    items: [
      { value: "123", content: "asdasd" },
      { value: "asd", content: "zxcc", disabled: true },
      { value: "zxc", content: "asdqwe" },
    ],
  },
};

export const bottomLeft: Story = {
  args: {
    direction: "bottom left",
    value: "123",
    items: [
      { value: "123", content: "asdasd" },
      { value: "asd", content: "zxcc", disabled: true },
      { value: "zxc", content: "asdqwe" },
    ],
  },
};

export const bottomRight: Story = {
  args: {
    direction: "bottom right",
    value: "123",
    items: [
      { value: "123", content: "asdasd" },
      { value: "asd", content: "zxcc", disabled: true },
      { value: "zxc", content: "asdqwe" },
    ],
  },
};
