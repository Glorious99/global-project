import { DecoratorFn } from "@storybook/react";
import "app/styles/index.scss";

export const StyleDecorator: DecoratorFn = (Story) => {
  return Story();
};
