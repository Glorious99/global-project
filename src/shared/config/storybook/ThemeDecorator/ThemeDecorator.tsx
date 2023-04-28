import { Decorator, StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story: StoryFn) => {
    return (
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
