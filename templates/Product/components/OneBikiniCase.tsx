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

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";

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
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  return (
    <StyledOneDetailContainer>
      <StyledOneDetail $active={active} onClick={onClick}>
        <StyledDetailPhotoContainer>
          <StyledDetailPhoto
            src={details?.attributes.main_photo?.data?.attributes?.url}
          />
        </StyledDetailPhotoContainer>
      </StyledOneDetail>

      {details?.attributes[priceKey] ? (
        <StyledPrice>
          +
          {symbol == "$"
            ? symbol + details?.attributes[priceKey]
            : details?.attributes[priceKey] + symbol}
        </StyledPrice>
      ) : null}
      {details?.attributes.name || details?.attributes.name_pl ? (
        <StyledName>
          {language == "pl" && details?.attributes.name_pl
            ? details?.attributes.name_pl.toUpperCase()
            : details?.attributes.name.toUpperCase()}
        </StyledName>
      ) : null}
    </StyledOneDetailContainer>
  );
};
