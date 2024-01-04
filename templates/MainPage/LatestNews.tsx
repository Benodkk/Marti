import {
  StyledLatestNews,
  StyledLatestNewsContaienr,
  StyledMainPageSectionTitle,
} from "./MainPage.styled";
import { OneLatestNews } from "./components/OneLatestNews";
import TestPhoto from "@/assets/NewReleases.png";

interface LatestNewsProps {}

export const LatestNews = ({}: LatestNewsProps) => {
  return (
    <StyledLatestNews>
      <StyledMainPageSectionTitle>Latest News</StyledMainPageSectionTitle>
      <StyledLatestNewsContaienr>
        <OneLatestNews
          photoSource={TestPhoto.src}
          day="14"
          month="Dec"
          title="The Benefits of Compression Clothing for Female Athletes."
          newsType="CLOTHING"
        />
        <OneLatestNews
          photoSource={TestPhoto.src}
          day="25"
          month="Nov"
          title="The Benefits of Compression Clothing for Female Athletes."
          newsType="CLOTHING Summer"
        />
        <OneLatestNews
          photoSource={TestPhoto.src}
          day="12"
          month="Dec"
          title="The Benefits of Compression Clothing for Female Athletes."
          newsType="CLOTHING"
        />
      </StyledLatestNewsContaienr>
    </StyledLatestNews>
  );
};
