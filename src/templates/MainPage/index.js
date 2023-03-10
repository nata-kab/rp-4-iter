import MealCard from "../../patterns/MealCard";
import * as Styled from "./MainPage.styled";
import Container from "../../components/Container";
import mealCardData from "../../helpers/mealCardData";
import cityCardData from "../../helpers/cityCardData";
import CityCard from "../../patterns/CityCard";
import Button from "../../components/Button";

const MainPage = () => {
  return (
    <Styled.MainPage>
      <Container>
        {mealCardData.map((item) => (
          <MealCard
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            description={
              item.description + "Are fun and \n melts in your mouth thing!"
            }
            colorVariant={item.colorVariant}
            button={
              <Button
                text="Looks yummy, want some"
                colorVariant={item.colorVariant}
                textVariant="bodyMediumBold"
                letterSpacing={-0.04}
              />
            }
          />
        ))}
      </Container>

      <Container>
        {cityCardData.map((item) => (
          <CityCard
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            button={
              <Button
                text="DOWNLOAD ITINERARY"
                colorVariant={item.colorVariant}
                textVariant="bodyLargeBold"
                letterSpacing={0.03}
              />
            }
          />
        ))}
      </Container>
    </Styled.MainPage>
  );
};
export default MainPage;
