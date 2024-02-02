import { getCategories } from "@/API/categories";
import { Bestsellers } from "./Bestsellers";
import { LatestNews } from "./LatestNews";
import { MainPageContainer } from "./MainPage.styled";
import { NewReleases } from "./NewReleases";
import { ShopNow } from "./ShopNow";
import { WelcomePage } from "./WelcomePage";
import { useEffect, useState } from "react";

interface MainPageProps {}
const MainPage = ({}: MainPageProps) => {
  const [categories, setCategories] = useState<any>();

  const [welcomePageLinkId, setWelcomePageLinkId] = useState<any>();
  const [womenLinkId, setWomenLinkId] = useState<any>();
  const [menLinkId, setMenLinkId] = useState<any>();
  const [heelsLinkId, setHeelsLinkId] = useState<any>();
  const [accesoriesLinkId, setAccesoriesLinkId] = useState<any>();
  const [bestsellersLinkId, setBestsellersLinkId] = useState<any>();

  // under categories
  const [allUnderCategories, setAllUnderCategories] = useState<any>();

  useEffect(() => {
    getProperLinks();
  }, []);

  const getProperLinks = async () => {
    const response: any = await getCategories();
    if (response) {
      const newWelcomePageLinkId = response.find(
        (category: any) => category.slug == "bikini"
      ).id;
      setWelcomePageLinkId(newWelcomePageLinkId);

      const newWomenLinkId = response.find(
        (category: any) => category.slug == "women"
      ).id;
      setWomenLinkId(newWomenLinkId);

      const newMenLinkId = response.find(
        (category: any) => category.slug == "men"
      ).id;
      setMenLinkId(newMenLinkId);

      const newHeelsLinkId = response.find(
        (category: any) => category.slug == "heels"
      ).id;
      setHeelsLinkId(newHeelsLinkId);

      const newAccesoriesLinkId = response.find(
        (category: any) => category.slug == "accesories"
      ).id;
      setAccesoriesLinkId(newAccesoriesLinkId);

      const newBestSellersLinkId = response.find(
        (category: any) => category.slug == "bestsellers"
      ).id;
      setBestsellersLinkId(newBestSellersLinkId);

      const womenCategoryId = response.find(
        (category: any) => category.slug == "women"
      ).id;
      const womenCategories = response.filter(
        (category: any) => category.parent == womenCategoryId
      );
      const each = response.filter((category: any) =>
        womenCategories.some((women: any) => women.id == category.parent)
      );
      const menCategoryId = response.find(
        (category: any) => category.slug == "men"
      ).id;
      const menCategories = response.filter(
        (category: any) => category.parent == menCategoryId
      );
      const eachMen = response.filter((category: any) =>
        menCategories.some((men: any) => men.id == category.parent)
      );
      setAllUnderCategories([...each, ...eachMen]);
    }
  };
  // category.parent == womenCategory.id
  return (
    <MainPageContainer>
      <WelcomePage linkId={welcomePageLinkId} />
      <ShopNow
        womenLinkId={womenLinkId}
        menLinkId={menLinkId}
        heelsLinkId={heelsLinkId}
      />
      <Bestsellers
        womenLinkId={womenLinkId}
        menLinkId={menLinkId}
        accesoriesLinkId={accesoriesLinkId}
        bestsellersLinkId={bestsellersLinkId}
        underCategories={allUnderCategories}
      />
      <NewReleases />
      <LatestNews />
    </MainPageContainer>
  );
};

export default MainPage;
