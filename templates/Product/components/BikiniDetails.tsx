import { getCategories } from "@/API/categories";
import { getProductsByCategoriesId } from "@/API/product";
import { useEffect, useState } from "react";
import { OneDetail } from "./OneDetail";
import {
  StyledBikiniDetails,
  StyledBikiniDetailsContainer,
} from "../Product.styled";
import { StyledDetailTitle } from "./OneDetail.styled";
import { YesOrNo } from "./YesOrNo";
import { Loader } from "@/components/Loader/Loader";

interface BikiniDetailsProps {
  show: any;
  bikiniDetails: any;
  setModalContent?: any;
  setIsModalOpen?: any;
  setModalTitle?: any;
  chosenBikiniDetails: any;
  setChosenBikiniDetails: any;
}

export const BikiniDetails = ({
  show,
  bikiniDetails,
  setModalContent,
  setIsModalOpen,
  setModalTitle,
  chosenBikiniDetails,
  setChosenBikiniDetails,
}: BikiniDetailsProps) => {
  const [activeYesOrNo, setActiveYesOrNo] = useState<any>([]);

  const yesOrNoToggle = (name: string, value: boolean, id: number) => {
    if (activeYesOrNo.includes(name)) {
      if (!value) {
        const newDetails = chosenBikiniDetails.filter(
          (option: any) => option.type !== id
        );
        setChosenBikiniDetails(newDetails);
        setActiveYesOrNo(
          activeYesOrNo.filter((element: any) => element !== name)
        );
      }
    } else if (value) {
      setActiveYesOrNo([...activeYesOrNo, name]);
    }
  };

  const chosenToggle = (
    selectedOption: any,
    type: number,
    typeName: string
  ) => {
    const newOption = { option: selectedOption, type, typeName };

    const optionExist = chosenBikiniDetails.find(
      (element: any) => element.type === type
    );

    let finalDetails;

    if (optionExist) {
      let newDetails = chosenBikiniDetails.filter(
        (element: any) => element.type !== type
      );

      if (type === 11 && selectedOption.name !== "Connectors") {
        newDetails = newDetails.filter((element: any) => element.type !== 12);
      }

      finalDetails = [...newDetails, newOption];
    } else {
      finalDetails = [...chosenBikiniDetails, newOption];
    }

    setChosenBikiniDetails(finalDetails);
  };

  return (
    <StyledBikiniDetailsContainer $display={show ? "flex" : "none"}>
      {bikiniDetails.map((detail: any) => {
        return (
          <>
            {detail.name !== "Back Connectors" && (
              <StyledDetailTitle>{detail.name}</StyledDetailTitle>
            )}
            {detail.yesOrNo && (
              <YesOrNo
                active={activeYesOrNo.some(
                  (active: any) => active === detail.name
                )}
                firstOnClick={() => {
                  yesOrNoToggle(detail.name, false, detail.id);
                }}
                secondOnClick={() =>
                  yesOrNoToggle(detail.name, true, detail.id)
                }
                firstImage={detail.noImg.src}
                secondImage={detail.yesImg.src}
              />
            )}
            <StyledBikiniDetails>
              {((detail.name !== "Back Connectors" && !detail.yesOrNo) ||
                activeYesOrNo.some((active: any) => active === detail.name)) &&
                detail.options.map((option: any) => {
                  return (
                    <OneDetail
                      key={option.name}
                      details={option}
                      onClick={() =>
                        chosenToggle(option, detail.id, detail.name)
                      }
                      active={chosenBikiniDetails.some(
                        (active: any) => active.option.id === option.id
                      )}
                      setModalContent={setModalContent}
                      setModalTitle={setModalTitle}
                      setIsModalOpen={setIsModalOpen}
                      moreDetails={detail?.show_details}
                    />
                  );
                })}
            </StyledBikiniDetails>
            {detail.name === "Back Straps" &&
              chosenBikiniDetails.some(
                (detail: any) =>
                  detail.typeName == "Back Straps" &&
                  detail.option.name == "Connectors"
              ) && (
                <StyledBikiniDetails>
                  {bikiniDetails
                    .find((detail: any) => detail.name == "Back Connectors")
                    .options.map((option: any) => {
                      return (
                        <OneDetail
                          key={option.name}
                          details={option}
                          onClick={() =>
                            chosenToggle(
                              option,
                              bikiniDetails.find(
                                (detail: any) =>
                                  detail.name == "Back Connectors"
                              ).id,
                              "Back Connectors"
                            )
                          }
                          active={chosenBikiniDetails.some(
                            (active: any) => active.option.id === option.id
                          )}
                          setModalContent={setModalContent}
                          setModalTitle={setModalTitle}
                          setIsModalOpen={setIsModalOpen}
                          moreDetails={
                            bikiniDetails.find(
                              (detail: any) => detail.name == "Back Connectors"
                            )?.show_details
                          }
                        />
                      );
                    })}
                </StyledBikiniDetails>
              )}
          </>
        );
      })}
    </StyledBikiniDetailsContainer>
  );
};
