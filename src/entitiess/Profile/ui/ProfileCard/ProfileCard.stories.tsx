import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { ProfileCard } from "./ProfileCard";
import avatar from "shared/assets/tests/storibook.jpg";

export default {
  title: "entitiess/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "glorias",
    age: 22,
    country: Country.Russia,
    lastname: "Pupkin",
    first: "Pety",
    city: "Zalupinsk",
    currency: Currency.USD,
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: "true",
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
