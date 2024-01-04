import { StyledImage } from "../helpers/Helpers.styled";
import {
  StyledArrows,
  StyledButtonContainer,
  StyledButtonText,
} from "./ArrowButton.styled";
import ArrowBlack from "@/assets/ArrowBlack.svg";
import ArrowGold from "@/assets/ArrowGold.svg";

interface ArrowButtonProps {
  children: string;
}

export const ArrowButton = ({ children }: ArrowButtonProps) => {
  return (
    <StyledButtonContainer>
      <StyledButtonText>{children}</StyledButtonText>
      <StyledArrows>
        <StyledImage src={ArrowGold.src} />
        <StyledImage
          src={ArrowBlack.src}
          $position="absolute"
          $left="2px"
          $bottom="2px"
        />
      </StyledArrows>
    </StyledButtonContainer>
  );
};
