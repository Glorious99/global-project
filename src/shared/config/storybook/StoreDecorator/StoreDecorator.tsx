import { DeepPartial } from "@reduxjs/toolkit";
import { DecoratorFn, StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): DecoratorFn =>
  (Story: StoryFn) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
