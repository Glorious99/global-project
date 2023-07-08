import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { counterReducer } from "entitiess/Counter";
import { userReducer } from "entitiess/User";
import { NavigateOptions, To } from "react-router-dom";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject = {
    counter: counterReducer,
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];