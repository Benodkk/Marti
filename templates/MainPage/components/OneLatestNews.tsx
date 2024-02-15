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
  day: any;
  month: any;
  photoSource: string;
  newsType: string;
  title: string;
  onClick?: any;
}

export const OneLatestNews = ({
  day,
  month,
  photoSource,
  newsType,
  title,
  onClick,
}: OneLatestNewsProps) => {
  console.log(day);

  return (
    <StyledOneLatestNews onClick={onClick}>
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
