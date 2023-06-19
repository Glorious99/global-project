import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entitiess/Counter";
import { userReducer } from "entitiess/User";
import { loginReducer } from "features";
import { StateSchema } from "./StoreSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
