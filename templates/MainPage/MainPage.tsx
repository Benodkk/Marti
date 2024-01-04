import { Bestsellers } from "./Bestsellers";
import { InspireMe } from "./InspireMe";
import { LatestNews } from "./LatestNews";
import { MainPageContainer } from "./MainPage.styled";
import { NewReleases } from "./NewReleases";
import { ShopNow } from "./ShopNow";
import { WelcomePage } from "./WelcomePage";

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
  return (
    <MainPageContainer>
      <WelcomePage />
      <ShopNow />
      <Bestsellers />
      <NewReleases />
      <LatestNews />
      <InspireMe />
    </MainPageContainer>
  );
};
