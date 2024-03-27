import { useRef, useState } from "react";
import {
  StyledSortElement,
  StyledSortLabel,
  StyledSelectSort,
  StyledSortValues,
  StyledSortContainer,
  StyledSortListContainer,
  StyledSortList,
  StyledSelectArrow,
  StyledSort,
  StyledSortLabelTop,
} from "../ProductList.styled";
import { BiSolidDownArrow } from "react-icons/bi";
import { useClickOutside } from "@/hooks/clickOutside";
interface SortByProps {}

const sortList: any = [
  {
    label: "Price",
    values: [
      {
        label: "from the highest",
        apiValue: "price_pln:desc",
      },
      {
        label: "from the lowest",
        apiValue: "price_pln:asc",
      },
    ],
  },
  {
    label: "Released",
    values: [
      {
        label: "from the latest",
        apiValue: "createdAt:desc",
      },
      {
        label: "from the oldest",
        apiValue: "createdAt:asc",
      },
    ],
  },
  {
    label: "Alphabetically",
    values: [
      {
        label: "A - Z",
        apiValue: "name:asc",
      },
      {
        label: "Z - A",
        apiValue: "name:desc",
      },
    ],
  },
];

export const SortBy = ({ apiValue, setApiValue }: any) => {
  const [showList, setShowList] = useState(false);
  const sort = "from the highest";

  const ref: any = useRef();

  const [, set] = useState();

  useClickOutside(ref, () => showList && setShowList(false));

  return (
    <StyledSortContainer ref={ref}>
      <StyledSelectSort onClick={() => setShowList(!showList)}>
        <StyledSortValues $flexDirection="row" $alignItems="center">
          <StyledSortLabelTop>
            {sortList &&
              sortList.find((x: any) =>
                x.values.find((y: any) => y.apiValue === apiValue)
              )?.label}
          </StyledSortLabelTop>
          <div>
            {sortList &&
              sortList
                .flatMap((x: any) => x.values)
                .find((y: any) => y.apiValue === apiValue)?.label}
          </div>
        </StyledSortValues>
        <StyledSelectArrow $show={showList}>
          <BiSolidDownArrow />
        </StyledSelectArrow>
      </StyledSelectSort>
      <div>
        <StyledSortListContainer $show={showList}>
          <StyledSortList $show={showList}>
            {sortList.map((element: any) => {
              return (
                <StyledSortElement key={element.label}>
                  <StyledSortLabel>{element.label}</StyledSortLabel>
                  <StyledSortValues>
                    {element.values.map((sortValue: any) => {
                      return (
                        <StyledSort
                          key={sortValue.label}
                          onClick={() => setApiValue(sortValue.apiValue)}
                        >
                          {sortValue.label}
                        </StyledSort>
                      );
                    })}
                  </StyledSortValues>
                </StyledSortElement>
              );
            })}
          </StyledSortList>
        </StyledSortListContainer>
      </div>
    </StyledSortContainer>
  );
};
