import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentList } from "./CommentList";

export default {
  title: "entitiess/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: "1",
      text: "hello wortld",
      user: { id: "1", username: "Vasy" },
    },
    {
      id: "2",
      text: "Priv",
      user: { id: "2", username: "Pety" },
    },
  ],
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
Primary.decorators = [StoreDecorator({})];
