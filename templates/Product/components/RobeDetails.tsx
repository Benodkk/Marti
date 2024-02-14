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
            label="Your text"
          />
          <StyledRobeText>
            <div>
              Important: Please write exact text that will appear on the back of
              the robe. Lowercase and uppercase letters matter. If you want to
              put the instagram symbol in front of the Nickname, please write @
            </div>
            <div>5 characters = 100 zł (Min. 10 charaters)</div>
          </StyledRobeText>
        </StyledRobeDetails>
      )}
    </StyledRobeDetailsContainer>
  );
};
