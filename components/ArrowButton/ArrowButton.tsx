import { StyledImage } from "../helpers/Helpers.styled";
import {
  StyledArrows,
  StyledButtonContainer,
  StyledButtonText,
} from "./ArrowButton.styled";
import ArrowWhite from "@/assets/ArrowWhite.svg";
import ArrowBlack from "@/assets/ArrowBlack.svg";
import ArrowGold from "@/assets/ArrowGold.svg";
import { useState } from "react";

interface ArrowButtonProps {
  children: string;
  onClick?: any;
}

export const ArrowButton = ({ children, onClick }: ArrowButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <StyledButtonContainer
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledButtonText>{children}</StyledButtonText>
      <StyledArrows>
        <StyledImage src={ArrowGold.src} />
        <StyledImage
          src={ArrowBlack.src}
          $display={hover ? "none" : "block"}
          $position="absolute"
          $left="2px"
          $bottom="2px"
        />
      </StyledArrows>
    </StyledButtonContainer>
  );
};
