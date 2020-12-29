import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        marginTop: ".5rem",
        marginBottom: ".5rem",
        width: "100%",
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
  },
});
