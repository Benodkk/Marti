import { StyledIconButton } from "./IconButton.styled";

interface IconButtonProps {
  children: any;
  onClick?: any;
}

export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};
