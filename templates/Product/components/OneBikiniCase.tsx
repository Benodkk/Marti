import { useEffect } from "react";
import {
  StyledDetailLabel,
  StyledDetailPhoto,
  StyledDetailPhotoContainer,
  StyledIconContainer,
  StyledImage,
  StyledModalContent,
  StyledName,
  StyledOneDetail,
  StyledOneDetailContainer,
  StyledPrice,
} from "./OneDetail.styled";

import { FaCircleInfo } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
interface OneBikiniCaseProps {
  details: any;
  onClick: () => void;
  active: boolean;
}

export const OneBikiniCase = ({
  details,
  active,
  onClick,
}: OneBikiniCaseProps) => {
  return (
    <StyledOneDetailContainer>
      <StyledOneDetail $active={active} onClick={onClick}>
        <StyledDetailPhotoContainer>
          <StyledDetailPhoto
            src={
              process.env.NEXT_PUBLIC_STRAPIBASEURL +
              details?.attributes.main_photo?.data.attributes.url
            }
          />
        </StyledDetailPhotoContainer>
      </StyledOneDetail>

      {details?.attributes.price_pln ? (
        <StyledPrice>+{details?.attributes.price_pln} zł</StyledPrice>
      ) : null}
      {details?.attributes.name ? (
        <StyledName>{details?.attributes.name.toUpperCase()}</StyledName>
      ) : null}
    </StyledOneDetailContainer>
  );
};
