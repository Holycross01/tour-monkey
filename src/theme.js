import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 8, // default: 8px → spacing(2) = 16px, spacing(5) = 40px
  palette: {
    primary: {
      main: "#1976d2", // Customize brand color
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
