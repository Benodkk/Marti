import { useEffect, useState } from "react";
import { StyledBikiniCaseContainer } from "./BikiniCase.styled";
import { getProductsByCategoriesId } from "@/API/product";
import { OneDetail } from "./OneDetail";

interface BikiniCaseProps {
  show: boolean;
  categories: any;
  bikiniCaseName: any;
  chosenBikiniCase: any;
  setChosenBikiniCase: any;
}

export const BikiniCase = ({
  show,
  categories,
  bikiniCaseName,
  chosenBikiniCase,
  setChosenBikiniCase,
}: BikiniCaseProps) => {
  const [bikiniCases, setBikiniCases] = useState<any>();

  useEffect(() => {
    if (categories) getData();
  }, [bikiniCaseName]);

  const getProductsDetails = async (type: string) => {
    if (categories) {
      const id = categories.find((category: any) => category.slug === type)?.id;

      const details: any = await getProductsByCategoriesId(id);
      return details;
    }
  };
  const getData = async () => {
    const bikiniCase: any = await getProductsDetails(bikiniCaseName);
    if (bikiniCase) setBikiniCases(bikiniCase);
  };

  return (
    <StyledBikiniCaseContainer $display={show ? "grid" : "none"}>
      {bikiniCases?.map((element: any) => {
        return (
          <OneDetail
            details={element}
            onClick={() => setChosenBikiniCase(element)}
            active={chosenBikiniCase?.id === element.id}
            image={true}
          />
        );
      })}
    </StyledBikiniCaseContainer>
  );
};
