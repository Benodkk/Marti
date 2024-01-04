import MediaQuery from "react-responsive";
import { reactDevice } from "@/styles/deviceWith";
import {
  StyledBottomHeader,
  StyledGroupIconsHeader,
  StyledTopHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledTopHeaderContainer,
  StyledBottomHeaderContainer,
  StyledBottomButtons,
  StyledHeaderContainerMobile,
  StyledLogoMobile,
  StyledIconsMobile,
  StyledHeaderTopContainerMobile,
} from "./Header.styled";

import {
  FaFacebookF,
  FaInstagram,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import {
  AiOutlineShopping,
  AiOutlineMan,
  AiOutlineWoman,
} from "react-icons/ai";

import { IconButton } from "../IconButton/IconButton";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import { SearchButton } from "../SearchButton/SearchButton";

import { translation } from "../../translation";
import { HeaderButton } from "./HeaderButton";
import { useEffect, useState } from "react";
import { WomanCategories } from "./WomanCategories";
import { ManCategories } from "./ManCategories";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [openWomanCategories, setOpenWomanCategories] = useState(false);
  const [openManCategories, setOpenManCategories] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 150
      ) {
        // Scroll w dół
        setHeaderVisible(false);
      } else if (currentScrollPosition < lastScrollPosition - 20) {
        // Scroll w górę o więcej niż 20px
        setHeaderVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, headerVisible]);

  useEffect(() => {
    if (!headerVisible && showMenu) {
      setShowMenu(false);
    }
  }, [headerVisible]);

  return (
    <>
      {/* <MediaQuery minWidth={reactDevice.desktop.minWidth}> */}
      <StyledHeaderContainer $scroll={headerVisible}>
        <StyledTopHeaderContainer>
          <StyledTopHeader>
            <StyledGroupIconsHeader>
              <SearchButton />
              <IconButton>
                <FaFacebookF />
              </IconButton>
              <IconButton>
                <FaInstagram />
              </IconButton>
            </StyledGroupIconsHeader>
            <StyledLogo src={HeaderLogo.src} alt="logo" />
            <StyledGroupIconsHeader>
              <IconButton>
                <AiOutlineShopping />
              </IconButton>
              <IconButton>
                <FaRegHeart />
              </IconButton>
              <IconButton>
                <FaRegUser />
              </IconButton>
            </StyledGroupIconsHeader>
          </StyledTopHeader>
        </StyledTopHeaderContainer>
        <StyledBottomHeaderContainer>
          <StyledBottomHeader>
            <StyledBottomButtons>
              <HeaderButton
                onMouseLeave={() => setOpenWomanCategories(false)}
                color={openWomanCategories ? "white" : "#232323"}
                bgColor={openWomanCategories ? "#c44370" : "white"}
                label={translation["en"].women}
                onClick={() => setOpenWomanCategories(!openWomanCategories)}
              >
                <AiOutlineWoman />
                <WomanCategories openCategories={openWomanCategories} />
              </HeaderButton>
              <HeaderButton
                onMouseLeave={() => setOpenManCategories(false)}
                color={openManCategories ? "white" : "#232323"}
                bgColor={openManCategories ? "#75939E" : "white"}
                label={translation["en"].men}
                onClick={() => setOpenManCategories(!openManCategories)}
              >
                <AiOutlineMan />
                <ManCategories openCategories={openManCategories} />
              </HeaderButton>
              <HeaderButton label={translation["en"].sportswear} />
            </StyledBottomButtons>
            <StyledBottomButtons>
              <HeaderButton label={translation["en"].contact} />
            </StyledBottomButtons>
          </StyledBottomHeader>
        </StyledBottomHeaderContainer>
      </StyledHeaderContainer>
      {/* </MediaQuery> */}
      {/* <MediaQuery maxWidth={reactDevice.desktop.minWidth}> */}
      {/* <StyledHeaderContainerMobile>
        <StyledHeaderTopContainerMobile>
          <StyledLogoMobile src={HeaderLogo.src} alt="logo" />
          <StyledIconsMobile>
            <IconButton>
              <AiOutlineShopping />
            </IconButton>
            <IconButton>
              <FaRegHeart />
            </IconButton>
            <IconButton>
              <FaRegUser />
            </IconButton>
          </StyledIconsMobile>
        </StyledHeaderTopContainerMobile>
      </StyledHeaderContainerMobile> */}
      {/* </MediaQuery> */}
    </>
  );
};
