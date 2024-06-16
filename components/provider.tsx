import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ButtonTheme from "./ButtonTheme";

type Props = { children: ReactNode };

export default function Provider({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        {children}
        <ButtonTheme />
      </ThemeProvider>
    </>
  );
}
