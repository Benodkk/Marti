import styled from "styled-components";

interface HeaderProps {
  $scroll: boolean;
}

export const StyledHeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.137) 0px 1px 4px;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 100;
  transition: 0.5s;
  top: ${(props) => (props.$scroll ? "0px" : "-160px")};
`;

export const StyledTopHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
`;

export const StyledTopHeader = styled.div`
  width: 1020px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 106px;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const StyledLogo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export const StyledGroupIconsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledBottomHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledBottomHeader = styled.div`
  width: 1020px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBottomButtons = styled.div`
  display: flex;
  align-items: center;
`;

// header button

interface ButtonColor {
  $bgColor?: string;
}

export const StyledHeaderButton = styled.div<ButtonColor>`
  font-weight: 600;
  color: #232323;
  padding: 15px 20px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  position: relative;
  background-color: ${(props) => props.$bgColor};
  cursor: pointer;
`;

interface HeaderButtonColor {
  color?: string;
}

export const StyledHeaderButtonContent = styled.div<HeaderButtonColor>`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => (props.color ? props.color : "#232323")};
  /* &:hover {
    transition: all 0.3s;
    transform: scale(1.03);
  } */
`;

// woman options

interface Options {
  open?: boolean;
}

export const StyledWomanOptionsContainer = styled.div<Options>`
  display: flex;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.3s;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  align-items: start;
  cursor: default;
`;

interface RealContentProps {
  open?: boolean;
  $color: string;
}

export const StyledRealContent = styled.div<RealContentProps>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: start;
  background-color: ${(props) => props.$color};
  transition: all 0.3s;
  transform: ${(props) =>
    props.open ? "translateY(0%)" : "translateY(-100%)"};
`;

export const StyledRealContentMan = styled.div<Options>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: start;
  background-color: #75939e;
  transition: all 0.3s;
  transform: ${(props) =>
    props.open ? "translateY(0%)" : "translateY(-100%)"};
`;

export const StyledCategoriesOptions = styled.div`
  display: flex;
  position: relative;
`;

export const StyledOneLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: nowrap;
`;

interface LinkContainer {
  $firstChild?: boolean;
  $lastChild?: boolean;
  $oneChild?: boolean;
}

export const StyledLinkContainer = styled.div<LinkContainer>`
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: nowrap;
  border-right: ${(props) =>
    props.$lastChild || props.$oneChild ? "none" : "1px solid white"};
  padding: ${(props) =>
    props.$firstChild
      ? "0px 20px 0px 0px"
      : props.$lastChild
      ? "0px 0px 0px 20px"
      : props.$oneChild
      ? "0px"
      : "0px 20px"};
`;

export const StyledBoldLink = styled.div<LinkContainer>`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;
  cursor: pointer;
  padding: ${(props) =>
    props.$firstChild
      ? "0px 20px 0px 0px"
      : props.$lastChild || props.$oneChild
      ? "0px"
      : "0px 20px"};
`;

export const StyledLink = styled.div`
  color: #fff;
  font-family: Roboto;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

// header style mobile

export const StyledHeaderContainerMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.137) 0px 1px 4px;
  background-color: #fff;
`;

export const StyledHeaderTopContainerMobile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const StyledLogoMobile = styled.img`
  width: 40%;
`;

export const StyledIconsMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
