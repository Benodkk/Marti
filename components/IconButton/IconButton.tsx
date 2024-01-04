import { StyledIconButton } from "./IconButton.styled";

interface IconButtonProps {
  children: any;
}

export const IconButton = ({ children }: IconButtonProps) => {
  return <StyledIconButton>{children}</StyledIconButton>;
};
