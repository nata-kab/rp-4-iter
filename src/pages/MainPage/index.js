import MealCard from "../../recipes/MealCard";
import * as Styled from "./MainPage.styled";
import Container from "../../components/Container";
import mealCardData from "../../helpers/mealCardData";
import cityCardData from "../../helpers/cityCardData";
import CityCard from "../../recipes/CityCard";

const MainPage = () => {
  return (
    <Styled.MainPage>
      <Container maxWidth={1200}>
        {mealCardData.map((item) => (
          <MealCard
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            description={item.description}
            buttonText="Looks yummy, want some"
            colorVariant={item.colorVariant}
          />
        ))}
      </Container>

      <Container maxWidth={1200}>
        {cityCardData.map((item) => (
          <CityCard
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </Container>
    </Styled.MainPage>
  );
};
export default MainPage;
