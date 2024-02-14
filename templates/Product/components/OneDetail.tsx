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
  onClick: () => void;
  active: boolean;
  setModalContent?: any;
  setIsModalOpen?: any;
  setModalTitle?: any;
  moreDetails?: boolean;
}

export const OneDetail = ({
  details,
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
        {details?.image?.data?.attributes.url && (
          <StyledImage
            src={
              process.env.NEXT_PUBLIC_STRAPIBASEURL +
              details?.image?.data.attributes.url
            }
          />
        )}{" "}
        {details.description_pl && stripHtml(details.description_pl)}
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
          {details?.image?.data ? (
            <StyledDetailPhoto
              src={
                details?.smallImage?.data
                  ? process.env.NEXT_PUBLIC_STRAPIBASEURL +
                    details?.smallImage?.data.attributes.url
                  : details?.image &&
                    process.env.NEXT_PUBLIC_STRAPIBASEURL +
                      details?.image?.data.attributes.url
              }
            />
          ) : (
            <StyledDetailLabel>{details?.name.toUpperCase()}</StyledDetailLabel>
          )}
        </StyledDetailPhotoContainer>
      </StyledOneDetail>

      {details?.price_pln ? (
        <StyledPrice>+{details?.price_pln} zł</StyledPrice>
      ) : null}
      {details?.name && details?.image.data ? (
        <StyledName>{details?.name.toUpperCase()}</StyledName>
      ) : null}
    </StyledOneDetailContainer>
  );
};
