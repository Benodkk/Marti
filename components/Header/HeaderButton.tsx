import { StyledHeaderButton, StyledHeaderButtonContent } from "./Header.styled";

interface HeaderButtonProps {
  children?: any;
  label: string;
  onClick?: any;
  bgColor?: string;
  color?: string;
  onMouseLeave?: any;
}

export const HeaderButton = ({
  children,
  label,
  onClick,
  bgColor,
  color,
  onMouseLeave,
}: HeaderButtonProps) => {
  return (
    <StyledHeaderButton
      bgColor={bgColor}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
    >
      <StyledHeaderButtonContent color={color}>
        {children && children}
        <span>{label}</span>
      </StyledHeaderButtonContent>
    </StyledHeaderButton>
  );
};
