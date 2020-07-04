import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

interface Theme {
  key: string;
  value: any;
}

interface ThemeObj {
  [key: string]: Theme;
}

interface Props {
  children: React.ReactNode;
  theme: ThemeObj;
}

export const Provider = ({ children, theme }: Props): React.ReactNode => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
