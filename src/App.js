import { ThemeProvider, Global, css } from "@emotion/react";
import Typography from "./components/Typography";
import Card from "./recipes/Card";
import theme from "./theme";
import * as Styled from "./App.styled";

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
        <Styled.Container>
          <Card
            title="Breakfast"
            imageSrc={
              "https://img.delicious.com.au/bQjDG77i/del/2021/07/spiced-peanut-butter-and-honey-pancakes-with-blackberry-cream-155151-2.jpg"
            }
            description="Crazy breakfast! Are fun and melts in your mouth thing!"
            buttonText="Looks yummy, want some"
            colorVariant="pink"
          />
          <Card
            title="Breakfast"
            imageSrc={
              "https://img.delicious.com.au/bQjDG77i/del/2021/07/spiced-peanut-butter-and-honey-pancakes-with-blackberry-cream-155151-2.jpg"
            }
            description="Crazy breakfast! Are fun and melts in your mouth thing!"
            buttonText="Looks yummy, want some"
            colorVariant="pink"
          />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
}

export default App;
