import { ThemeProvider, Global, css } from "@emotion/react";
import Card from "./recipes/Card";
import theme from "./theme";
import * as Styled from "./App.styled";
import Container from "./components/Container";

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
          <Container size={800}>
            <Card
              title="Breakfast"
              imageSrc={
                "https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436_960_720.jpg"
              }
              description="Crazy breakfast! Are fun and melts in your mouth thing!"
              buttonText="Looks yummy, want some"
              colorVariant="pink"
            />
          </Container>
        </Styled.App>
      </ThemeProvider>
    </>
  );
}

export default App;
