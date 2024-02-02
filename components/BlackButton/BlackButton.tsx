import { StyledBlackButton } from "./BlackButton.styled";

interface BlackButtonProps {
  onClick?: any;
  type?: any;
  margin?: any;
  children: any;
}

export const BlackButton = ({
  onClick,
  type,
  margin,
  children,
}: BlackButtonProps) => {
  return (
    <StyledBlackButton
      margin={margin ? margin : ""}
      type={type && type}
      onClick={onClick}
    >
      {children}
    </StyledBlackButton>
  );
};
