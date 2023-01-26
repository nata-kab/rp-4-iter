import { ThemeProvider, Global, css } from "@emotion/react";
import Typography from "./components/Typography";
import Card from "./recipes/Card";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body {
              margin: 0;
            }
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
          `}
        />
        <Typography variant="h1">Hello</Typography>
        <Card title="Breakfast" />
      </ThemeProvider>
    </>
  );
}

export default App;
