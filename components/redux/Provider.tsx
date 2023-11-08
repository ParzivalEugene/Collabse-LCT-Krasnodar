"use client";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

interface ReduxCustomProviderProps {
  children: React.ReactNode;
}

export const ReduxCustomProvider: React.FC<ReduxCustomProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
