import { useEffect } from "react";
import {
  StyledDesctiption,
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

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";
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
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  const showDetails = () => {
    setIsModalOpen(true);
    let content = (
      <StyledModalContent>
        {details?.image?.data?.attributes.url && (
          <StyledImage src={details?.image?.data.attributes.url} />
        )}{" "}
        <StyledDesctiption>
          {language == "pl" && details.description_pl
            ? stripHtml(details.description_pl)
            : details.description && stripHtml(details.description)}
        </StyledDesctiption>
      </StyledModalContent>
    );
    setModalContent(content);
    setModalTitle(
      language == "pl" && details?.name_pl
        ? details?.name_pl.toUpperCase()
        : details?.name.toUpperCase()
    );
  };

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  function ImageComponent(imageUrl: any) {
    // Dodaj transformacje do URL-a obrazu
    const transformedImageUrl = imageUrl.replace(
      "/upload/",
      "/upload/w_200,q_80/"
    );

    return transformedImageUrl;
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
              src={ImageComponent(
                details?.smallImage?.data
                  ? details?.smallImage?.data?.attributes.url
                  : details?.image && details?.image?.data?.attributes.url
              )}
            />
          ) : (
            <StyledDetailLabel>
              {language == "pl" && details?.name_pl
                ? details?.name_pl.toUpperCase()
                : details?.name.toUpperCase()}
            </StyledDetailLabel>
          )}
        </StyledDetailPhotoContainer>
      </StyledOneDetail>

      {details[priceKey] ? (
        <StyledPrice>
          +
          {symbol == "$"
            ? symbol + details[priceKey]
            : details[priceKey] + symbol}
        </StyledPrice>
      ) : null}
      {details?.name && details?.image.data ? (
        <StyledName>
          {language == "pl" && details?.name_pl
            ? details?.name_pl.toUpperCase()
            : details?.name.toUpperCase()}
        </StyledName>
      ) : null}
    </StyledOneDetailContainer>
  );
};
