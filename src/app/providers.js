"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

const clientSideCache = createEmotionCache();

export function Providers({ children }) {
  return (
    <CacheProvider value={clientSideCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
