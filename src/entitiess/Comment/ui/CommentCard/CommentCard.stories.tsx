import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentCard } from "./CommentCard";

export default {
  title: "entitiess/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: "1",
    text: "hello wortld",
    user: { id: "1", username: "Vasy" },
  },
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: "1",
    text: "hello wortld",
    user: { id: "1", username: "Vasy" },
  },
  isLoading: true,
};
Primary.decorators = [StoreDecorator({})];
