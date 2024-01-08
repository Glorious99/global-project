import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";

const meta = {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
      {
        content: "first",
      },
      {
        content: "second",
      },
      {
        content: "third",
      },
    ],
  },
};
