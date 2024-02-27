import { useEffect, useState } from "react";
import { StyledPrice } from "./OneDetail.styled";
import {
  StyledOneOtherAttributes,
  StyledOneOtherAttributesContainer,
  StyledOtherAttributesContainer,
  StyledOtherAttributesLabel,
  StyledOtherAttributes,
  StyledOtherAttributesInfo,
  StyledOtherAttributesDesc,
} from "./OtherAttributes.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { Loader } from "@/components/Loader/Loader";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
interface OtherAttributesProps {
  otherAttributes: any;
  show: any;
  chosenOtherAttributes: any;
  setChosenOtherAttributes: any;
  description: any;
}

export const OtherAttributes = ({
  otherAttributes,
  show,
  chosenOtherAttributes,
  setChosenOtherAttributes,
  description,
}: OtherAttributesProps) => {
  const language = useSelector(selectLanguage);

  return (
    <StyledOtherAttributesContainer $display={show ? "flex" : "none"}>
      <StyledOtherAttributes>
        {otherAttributes ? (
          otherAttributes.map((type: any) => {
            return (
              <StyledOneOtherAttributesContainer>
                <StyledOneOtherAttributes
                  $active={
                    chosenOtherAttributes && type == chosenOtherAttributes
                  }
                  onClick={() => setChosenOtherAttributes(type)}
                >
                  <StyledOtherAttributesLabel>
                    {language == "pl" && type.name_pl
                      ? type.name_pl
                      : type.name}
                  </StyledOtherAttributesLabel>
                </StyledOneOtherAttributes>
                {type.price_pln && <div> +{type.price_pln}zł</div>}
                {type.small_description_pl ||
                  (type.small_description && (
                    <div>
                      {language == "pl" && type.small_description_pl
                        ? type.small_description_pl
                        : type.small_description}
                    </div>
                  ))}
              </StyledOneOtherAttributesContainer>
            );
          })
        ) : (
          <Loader />
        )}
      </StyledOtherAttributes>
      <StyledOtherAttributesDesc>{description}</StyledOtherAttributesDesc>
    </StyledOtherAttributesContainer>
  );
};
