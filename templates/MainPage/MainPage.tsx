import { getCategories } from "@/API/categories";
import { Bestsellers } from "./Bestsellers";
import { LatestNews } from "./LatestNews";
import { MainPageContainer } from "./MainPage.styled";
import { NewReleases } from "./NewReleases";
import { ShopNow } from "./ShopNow";
import { WelcomePage } from "./WelcomePage";
import { useEffect, useState } from "react";
import {
  fetchAllCategories,
  fetchAllCategoriesWithProductDetails,
} from "@/API/strapiConfig";

interface MainPageProps {}
const MainPage = ({}: MainPageProps) => {
  const [categories, setCategories] = useState<any>();

  const [welcomePageLinkId, setWelcomePageLinkId] = useState<any>();
  const [womenLinkId, setWomenLinkId] = useState<any>();
  const [menLinkId, setMenLinkId] = useState<any>();
  const [heelsLinkId, setHeelsLinkId] = useState<any>();

  // bestsellers
  const [bestsellers, setBestsellers] = useState<any>([]);

  useEffect(() => {
    getProperLinks();
  }, []);

  const getProperLinks = async () => {
    const response: any = await fetchAllCategoriesWithProductDetails();
    console.log(response);

    if (response) {
      const newWelcomePageLinkId = response.find(
        (category: any) => category.attributes.welcome_page
      );
      if (newWelcomePageLinkId) setWelcomePageLinkId(newWelcomePageLinkId.id);

      const newWomenLinkId = response.find(
        (category: any) => category.attributes.name == "Women"
      ).id;
      setWomenLinkId(newWomenLinkId);

      const newMenLinkId = response.find(
        (category: any) => category.attributes.name == "Men"
      ).id;
      setMenLinkId(newMenLinkId);

      const newHeelsLinkId = response.find(
        (category: any) => category.attributes.name == "Heels"
      ).id;
      setHeelsLinkId(newHeelsLinkId);

      const bestSellers = response
        .filter((category: any) => category.attributes.bestseller)
        .sort((a: any, b: any) => a.attributes.order - b.attributes.order);
      setBestsellers(bestSellers);
    }
  };
  return (
    <MainPageContainer>
      <WelcomePage linkId={welcomePageLinkId} />
      <ShopNow
        womenLinkId={womenLinkId}
        menLinkId={menLinkId}
        heelsLinkId={heelsLinkId}
      />
      <Bestsellers bestsellers={bestsellers} />
      <NewReleases />
      <LatestNews />
    </MainPageContainer>
  );
};

export default MainPage;
