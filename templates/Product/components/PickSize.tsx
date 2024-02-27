import {
  StyledOneSize,
  StyledOneSizeContainer,
  StyledSizes,
  StyledSizesContainer,
} from "./OtherAttributes.styled";

interface PickSizeProps {
  show: boolean;
  sizes: any;
  setChosenSize: any;
  chosenSize: any;
}

export const PickSize = ({
  show,
  sizes,
  setChosenSize,
  chosenSize,
}: PickSizeProps) => {
  return (
    <StyledSizesContainer $display={show ? "flex" : "none"}>
      <StyledSizes>
        {sizes.map((size: any) => {
          return (
            <StyledOneSizeContainer
              $active={chosenSize == size}
              onClick={() => setChosenSize(size)}
            >
              <StyledOneSize>{size.attributes.value}</StyledOneSize>
            </StyledOneSizeContainer>
          );
        })}
      </StyledSizes>
    </StyledSizesContainer>
  );
};
