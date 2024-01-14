import { DecoratorFn, StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entitiess/Article/model/slice/articleDetailsSlice";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSclice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { profileReducer } from "features/editableProfileCard";
import { articleDetailsPageReducers } from "pages/ArticleDetailsPage/model/slices";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducers,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ): DecoratorFn =>
  (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
