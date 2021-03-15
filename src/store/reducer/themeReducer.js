import { createMuiTheme } from '@material-ui/core/styles';
const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#000101',
      main: '#000202',
      dark: '#333434',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b22a00',
      main: '#ff3d00',
      dark: '#ff6333',
      contrastText: '#fff',
    },
  },
});
export default function theme(state = darkTheme, action) {
  switch (action.type) {
    case "toggleTheme":
      return state === lightTheme ? darkTheme : lightTheme;
    default:
      return state;
  }
}
