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

interface CategoriesOptions {
  $heels?: boolean;
}

export const StyledCategoriesOptions = styled.div<CategoriesOptions>`
  display: flex;
  flex-direction: ${(props) => (props.$heels ? "column" : "row")};

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
  $heels?: boolean;
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
  margin-bottom: ${(props) =>
    props.$heels && props.$lastChild ? "0px" : "16px"};
  cursor: pointer;
  padding: ${(props) =>
    props.$firstChild
      ? "0px 20px 0px 0px"
      : props.$oneChild
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

// Search

interface Props {
  active: boolean;
}

export const StyledSearchContainer = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 400px;
  align-self: flex-start;
  justify-self: flex-end;
  padding: 15px 10px 10px;
  left: 0;
  color: white;
  transition: 0.5s;
  z-index: 1;
  background-color: #caa871;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transform: ${({ active }) =>
    active ? "translateY(-15px)" : "translateY(-130%)"};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

export const StyledInputSearch = styled.input`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  width: 70%;
`;

export const StyledSearchClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 10px;
`;

export const StyledOneProduct = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 20px;
`;

export const StyledOneProductPhoto = styled.img`
  width: 100px;
  height: 150px;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

export const StyledInfoContaier = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const StyledProductType = styled.div`
  color: #232323;
  font-family: "Jost";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledProductName = styled.div`
  color: #232323;
  font-family: "Jost";
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  cursor: pointer;
  /* cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-shadow: 2px 2px 3px rgba(109, 109, 109, 0.5);
  }
  */
  @media (max-width: 1020px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const StyledProductPrize = styled.div`
  color: #3f3f3f;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// search black button

export const StyledSearchBlackButton = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-width: 0;
  outline: none;
  padding: 4px 6px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  margin: 0 10px;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
