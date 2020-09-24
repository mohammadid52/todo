import { createMuiTheme } from "@material-ui/core";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#40a8c4",
      dark: "#07689f",
      light: "#a2d5f2",
    },
    secondary: {
      main: "#ed6663",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
    ],
  },
});
