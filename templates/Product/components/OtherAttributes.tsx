import { useEffect, useState } from "react";
import { StyledPrice } from "./OneDetail.styled";
import {
  StyledOneOtherAttributes,
  StyledOneOtherAttributesContainer,
  StyledOtherAttributesContainer,
  StyledOtherAttributesLabel,
  StyledOtherAttributes,
  StyledOtherAttributesInfo,
} from "./OtherAttributes.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { Loader } from "@/components/Loader/Loader";

interface OtherAttributesProps {
  otherAttributes: any;
  show: any;
  chosenOtherAttributes: any;
  setChosenOtherAttributes: any;
}

export const OtherAttributes = ({
  otherAttributes,
  show,
  chosenOtherAttributes,
  setChosenOtherAttributes,
}: OtherAttributesProps) => {
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
                    {type.name}
                  </StyledOtherAttributesLabel>
                </StyledOneOtherAttributes>
                {type.price_pln && <div> +{type.price_pln}zł</div>}
                {type.small_description && <div>{type.small_description}</div>}
              </StyledOneOtherAttributesContainer>
            );
          })
        ) : (
          <Loader />
        )}
      </StyledOtherAttributes>
    </StyledOtherAttributesContainer>
  );
};
