"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";

const MyThemeProvider = ({ children, ...props }) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
