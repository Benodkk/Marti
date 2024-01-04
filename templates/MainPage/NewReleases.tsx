import { StyledSmallGoldText } from "@/components/helpers/Helpers.styled";
import {
  StyledMainPageSectionTitle,
  StyledNewReleases,
  StyledNewReleasesIamge,
} from "./MainPage.styled";
import NewReleasesIamge from "@/assets/NewReleases.png";

interface NewReleasesProps {}

export const NewReleases = ({}: NewReleasesProps) => {
  return (
    <StyledNewReleases>
      <StyledSmallGoldText>NEW COLLECTION 2024</StyledSmallGoldText>
      <StyledMainPageSectionTitle>New Releases</StyledMainPageSectionTitle>
      <StyledNewReleasesIamge src={NewReleasesIamge.src} />
    </StyledNewReleases>
  );
};
