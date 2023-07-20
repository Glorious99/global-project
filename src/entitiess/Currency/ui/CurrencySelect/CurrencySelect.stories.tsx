import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "entitiess/CurrencySelect",
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};