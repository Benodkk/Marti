import { useEffect, useState } from "react";
import { StyledBikiniCaseContainer } from "./BikiniCase.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { OneDetail } from "./OneDetail";
import { OneBikiniCase } from "./OneBikiniCase";

interface BikiniCaseProps {
  show: boolean;
  etuis: any;
  chosenBikiniCase: any;
  setChosenBikiniCase: any;
}

export const BikiniCase = ({
  show,
  chosenBikiniCase,
  setChosenBikiniCase,
  etuis,
}: BikiniCaseProps) => {
  return (
    <StyledBikiniCaseContainer $display={show ? "grid" : "none"}>
      {etuis?.map((element: any) => {
        return (
          <OneBikiniCase
            details={element}
            onClick={() =>
              chosenBikiniCase?.id === element.id
                ? setChosenBikiniCase(null)
                : setChosenBikiniCase(element)
            }
            active={chosenBikiniCase?.id === element.id}
          />
        );
      })}
    </StyledBikiniCaseContainer>
  );
};
