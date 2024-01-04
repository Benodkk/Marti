import {
  StyledOneLatestDate,
  StyledOneLatestDay,
  StyledOneLatestNews,
  StyledOneNewsPhoto,
  StyledOneNewsPhotoContainer,
  StyledOneNewsTitle,
  StyledOneNewsType,
} from "../MainPage.styled";
import TestPhoto from "@/assets/NewReleases.png";

interface OneLatestNewsProps {
  day: string;
  month: string;
  photoSource: string;
  newsType: string;
  title: string;
}

export const OneLatestNews = ({
  day,
  month,
  photoSource,
  newsType,
  title,
}: OneLatestNewsProps) => {
  return (
    <StyledOneLatestNews>
      <StyledOneLatestDate>
        <StyledOneLatestDay>{day}</StyledOneLatestDay>
        <StyledOneLatestDay>{month}</StyledOneLatestDay>
      </StyledOneLatestDate>
      <StyledOneNewsPhotoContainer>
        <StyledOneNewsPhoto src={photoSource} />
      </StyledOneNewsPhotoContainer>

      <StyledOneNewsTitle>
        <StyledOneNewsType>{newsType.toUpperCase()}</StyledOneNewsType>
        {title}
      </StyledOneNewsTitle>
    </StyledOneLatestNews>
  );
};
