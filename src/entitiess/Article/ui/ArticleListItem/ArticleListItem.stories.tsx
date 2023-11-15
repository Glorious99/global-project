import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleListItem } from "./ArticleListItem";
import { ArticleView } from "../../model/types/article";

export default {
  title: "entitiess/ArticleDetails",
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const Big = Template.bind({});
Big.args = {
  view: ArticleView.BIG,
};

export const Small = Template.bind({});
Small.args = {
  view: ArticleView.SMALL,
};
