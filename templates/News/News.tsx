import { BackButton } from "@/components/BackButton/BackButton";
import {
  StyledHeaderPhoto,
  StyledNews,
  StyledNewsContainer,
  StyledNewsContent,
  StyledNewsDateConainer,
  StyledNewsTitle,
  StyledNewsTitleContainer,
  StyledNewsType,
  StyledOneLatestDate,
  StyledOneLatestDay,
} from "./News.styled";

import HeaderPhoto from "@/assets/NewReleases.png";

export const NewsTemplate = () => {
  return (
    <StyledNewsContainer>
      <StyledNews>
        <BackButton />
        <StyledNewsType>FITNESS</StyledNewsType>
        <StyledNewsTitleContainer>
          <StyledNewsDateConainer>
            <StyledOneLatestDate>
              <StyledOneLatestDay>24</StyledOneLatestDay>
              <StyledOneLatestDay>Sep</StyledOneLatestDay>
            </StyledOneLatestDate>
          </StyledNewsDateConainer>
          <StyledNewsTitle>
            Workout Challenges and Tips for Busy Women.
          </StyledNewsTitle>
        </StyledNewsTitleContainer>
        <StyledHeaderPhoto src={HeaderPhoto.src} />
        <StyledNewsContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          cursus nisl, sed tincidunt nulla. Curabitur sit amet neque eget nunc
          vehicula mollis. Sed neque enim, cursus in ex vel, hendrerit
          scelerisque augue. In tempor arcu eget velit fringilla pulvinar. Cras
          pretium augue arcu, ut mollis ipsum gravida efficitur. Etiam suscipit
          nunc dolor, condimentum cursus sapien eleifend luctus. Mauris ut
          rhoncus elit. Aliquam ac nulla quis odio auctor dictum eu ut ante.
          Mauris ullamcorper dignissim imperdiet. In fringilla augue eget ligula
          aliquet auctor. Integer rhoncus neque ut libero consequat tempus.
          Phasellus fermentum pharetra massa, at euismod nibh fermentum et. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Pellentesque id eros fringilla, tincidunt ipsum at,
          malesuada elit. Nulla pretium lacus nisi, id gravida lacus pulvinar
          in. Mauris ac ipsum pulvinar, luctus diam eget, eleifend dui. Nam id
          sagittis dolor. Mauris vel sapien porttitor, molestie dolor vel,
          feugiat massa. Fusce semper, quam quis lacinia imperdiet, mauris arcu
          placerat nunc, vel auctor mi erat tristique massa. Sed eget arcu a
          tortor ultricies tincidunt sit amet non leo. Ut non justo vel orci
          consectetur pellentesque. Duis quis enim sapien. Mauris elementum
          fringilla tortor vitae pulvinar. Donec sit amet finibus nisl. Aliquam
          tempus sagittis nisi id placerat. Suspendisse sed ligula bibendum,
          imperdiet nisi nec, dapibus arcu. Aliquam pretium sapien facilisis
          dolor fermentum, vel mattis erat vestibulum. Vivamus consectetur arcu
          eu massa aliquam imperdiet. Integer varius, neque ut ornare tincidunt,
          dui libero varius diam, sed convallis eros metus et dui. Sed dapibus
          nulla vitae posuere sagittis. Etiam lacinia, nisl id tempor aliquet,
          eros ligula consequat nunc, sit amet pulvinar ligula massa a nisi.
          Proin consequat, augue vel semper iaculis, tellus turpis congue justo,
          sit amet varius nulla odio nec lorem. Proin sapien erat, cursus ac est
          et, posuere dignissim purus. Mauris velit erat, placerat non ornare
          et, ullamcorper sit amet lacus. Aliquam erat volutpat. Morbi ac mi
          dui. Nulla maximus arcu quis sodales accumsan. Maecenas eu dui
          malesuada, ultricies dui quis, elementum massa. Nunc quis metus vitae
          risus sollicitudin blandit quis ut elit. Pellentesque dapibus blandit
          risus, eu tincidunt arcu tempor eu. Morbi placerat est quis sodales
          semper. Proin id fermentum augue, eu ullamcorper mi. Integer velit
          ante, blandit eget mollis sed, dignissim ac ligula. Phasellus vel mi
          arcu.
        </StyledNewsContent>
      </StyledNews>
    </StyledNewsContainer>
  );
};
