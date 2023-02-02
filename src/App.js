import { ThemeProvider, Global, css } from "@emotion/react";
import theme from "./tokens/theme";
import * as Styled from "./App.styled";
import MainPage from "./templates/MainPage";

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
        <Styled.App>
          <MainPage />
        </Styled.App>
      </ThemeProvider>
    </>
  );
}

export default App;
