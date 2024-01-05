import { Header } from "@/components/Header/Header";
import { Bestsellers } from "./Bestsellers";
import { InspireMe } from "./InspireMe";
import { LatestNews } from "./LatestNews";
import { MainPageContainer } from "./MainPage.styled";
import { NewReleases } from "./NewReleases";
import { ShopNow } from "./ShopNow";
import { WelcomePage } from "./WelcomePage";

interface MainPageProps {}
const MainPage = ({}: MainPageProps) => {
  return (
    <MainPageContainer>
      <Header />
      <WelcomePage />
      <ShopNow />
      <Bestsellers />
      <NewReleases />
      <LatestNews />
      <InspireMe />
    </MainPageContainer>
  );
};

export default MainPage;
