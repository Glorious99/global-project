import { DeepPartial } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StoreSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider(props: StoreProviderProps) {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
}
