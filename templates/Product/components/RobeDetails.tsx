import { useEffect, useState } from "react";
import { StyledBikiniCaseContainer } from "./BikiniCase.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { OneDetail } from "./OneDetail";
import { YesOrNo } from "./YesOrNo";
import {
  StyledBikiniDetailsContainer,
  StyledRobeDetails,
  StyledRobeDetailsContainer,
  StyledRobeText,
} from "../Product.styled";
import { Input } from "@/components/Input/Input";
import { translation } from "@/translation";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface RobeDetailsProps {
  show: boolean;
  robeFont: any;
  setChosenRobeDetails: any;
  configureFontDetails: any;
  setConfigureFontDetails: any;
  robeText: any;
  setRobeText: any;
  setModalContent: any;
  setIsModalOpen: any;
  setModalTitle: any;
}

export const RobeDetails = ({
  show,
  robeFont,
  setChosenRobeDetails,
  configureFontDetails,
  setConfigureFontDetails,
  robeText,
  setRobeText,
  setModalContent,
  setIsModalOpen,
  setModalTitle,
}: RobeDetailsProps) => {
  const language = useSelector(selectLanguage);
  return (
    <StyledRobeDetailsContainer $display={show ? "flex" : "none"}>
      {" "}
      <YesOrNo
        active={configureFontDetails}
        firstOnClick={() => {
          setConfigureFontDetails(false);
          setChosenRobeDetails(null);
        }}
        secondOnClick={() => setConfigureFontDetails(true)}
      />{" "}
      <StyledBikiniCaseContainer
        $display={configureFontDetails ? "grid" : "none"}
      >
        {robeFont?.map((element: any) => {
          return (
            <OneDetail
              details={element}
              onClick={() => setChosenRobeDetails(element)}
              active={element.chosen != null}
              moreDetails={true}
              setModalContent={setModalContent}
              setIsModalOpen={setIsModalOpen}
              setModalTitle={setModalTitle}
            />
          );
        })}
      </StyledBikiniCaseContainer>
      {configureFontDetails && (
        <StyledRobeDetails>
          <Input
            type="text"
            value={robeText}
            onChange={(e: any) => setRobeText(e.target.value)}
            label={translation[language].yourText}
          />
          <StyledRobeText>
            <div>{translation[language].robeInfoText}</div>
            <div>{`5 ${translation[language].charaters} = 100 zł (Min. 10 ${translation[language].charaters})`}</div>
          </StyledRobeText>
        </StyledRobeDetails>
      )}
    </StyledRobeDetailsContainer>
  );
};
