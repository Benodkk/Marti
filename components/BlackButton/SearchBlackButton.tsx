import { StyledSearchBlackButton } from "../Header/Header.styled";
import { StyledBlackButton } from "./BlackButton.styled";

interface BlackButtonProps {
  onClick?: any;
  type?: any;
  margin?: any;
  children: any;
}

export const SearchBlackButton = ({
  onClick,
  type,
  margin,
  children,
}: BlackButtonProps) => {
  return (
    <StyledSearchBlackButton type={type && type} onClick={onClick}>
      {children}
    </StyledSearchBlackButton>
  );
};
