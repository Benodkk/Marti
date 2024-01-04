import styled from "styled-components";

interface StyledImageProps {
  $width?: string;
  $height?: string;
  $position?: string;
  $zIndex?: number;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  position: ${(props) => props.$position || ""};
  z-index: ${(props) => props.$zIndex};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
`;

export const StyledSmallGoldText = styled.div`
  color: #caa871;
  font-size: 12px;
  @media (max-width: 1020px) {
    font-size: 10px;
  }
`;

interface StyledHoverImageProps {
  width: string;
  height: string;
}

export const StyledHoverImageContainer = styled.div<StyledHoverImageProps>`
  min-width: ${(props) => props.width || "auto"};
  max-height: ${(props) => props.width || "auto"};
  overflow: hidden;
  z-index: 1;
`;

export const StyledHoverImage = styled.img<StyledHoverImageProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.width || "auto"};
  transition: transform 0.5s;
  &:hover {
    transform: "scale(1.15)";
  }
`;
