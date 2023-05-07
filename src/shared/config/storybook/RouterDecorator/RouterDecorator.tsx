import { DecoratorFn } from "@storybook/react";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: DecoratorFn = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
