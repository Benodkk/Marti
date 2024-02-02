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
interface OneDetailProps {
  details: any;
  image?: boolean;
  onClick: () => void;
  active: boolean;
  setModalContent?: any;
  setIsModalOpen?: any;
  setModalTitle?: any;
  moreDetails?: boolean;
}

export const OneDetail = ({
  details,
  image,
  active,
  onClick,
  setModalContent,
  setIsModalOpen,
  setModalTitle,
  moreDetails,
}: OneDetailProps) => {
  const showDetails = () => {
    setIsModalOpen(true);
    let content = (
      <StyledModalContent>
        {details.images[0]?.src && <StyledImage src={details.images[0]?.src} />}{" "}
        {details.description && stripHtml(details.description)}
      </StyledModalContent>
    );
    setModalContent(content);
    setModalTitle(details?.name.toUpperCase());
  };

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  return (
    <StyledOneDetailContainer>
      {moreDetails && (
        <StyledIconContainer
          onClick={(e) => {
            e.stopPropagation();
            showDetails();
          }}
        >
          <IoEyeOutline color={"black"} />
        </StyledIconContainer>
      )}
      <StyledOneDetail $active={active} onClick={onClick}>
        <StyledDetailPhotoContainer>
          {image ? (
            <StyledDetailPhoto
              src={details?.images && details.images[0]?.src}
            />
          ) : (
            <StyledDetailLabel>{details?.name.toUpperCase()}</StyledDetailLabel>
          )}
        </StyledDetailPhotoContainer>
      </StyledOneDetail>

      {details?.price ? <StyledPrice>+{details?.price} zł</StyledPrice> : null}
      {image ? <StyledName>{details?.name.toUpperCase()}</StyledName> : null}
    </StyledOneDetailContainer>
  );
};
