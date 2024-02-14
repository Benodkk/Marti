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
import { Categories } from "./Categories";
import { useRouter } from "next/router";
import { getCategories } from "@/API/categories";
import { ShopButton } from "../ShopButton/ShopButton";
import { useSelector } from "react-redux";
import { selectTotalItems } from "@/redux/cartSlice";
import { MoonLoader } from "react-spinners";
import { fetchAllCategories } from "@/API/strapiConfig";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const totalItems = useSelector(selectTotalItems);
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [openWomanCategories, setOpenWomanCategories] = useState(false);
  const [openManCategories, setOpenManCategories] = useState(false);

  // cateogories for header
  const [womenCategories, setWomenCategories] = useState();
  const [menCategories, setMenCategories] = useState();

  // id for categories
  const [allWomenProducts, setAllWomenProducts] = useState<any>();
  const [allMenProducts, setAllMenProducts] = useState<any>();

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.pageYOffset;

  //     if (
  //       currentScrollPosition > lastScrollPosition &&
  //       currentScrollPosition > 150
  //     ) {
  //       // Scroll w dół
  //       setHeaderVisible(false);
  //     } else if (currentScrollPosition < lastScrollPosition - 20) {
  //       // Scroll w górę o więcej niż 20px
  //       setHeaderVisible(true);
  //     }

  //     setLastScrollPosition(currentScrollPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollPosition, headerVisible]);

  // useEffect(() => {
  //   if (!headerVisible && showMenu) {
  //     setShowMenu(false);
  //   }
  // }, [headerVisible]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const categories: any = await fetchAllCategories();
      if (categories) {
        const womenCategoryId: any = categories.find(
          (category: any) => category.attributes.name == "Women"
        ).id;
        setAllWomenProducts(womenCategoryId);
        const womenCategories = categories
          .filter(
            (category: any) =>
              category?.attributes?.parent?.data?.id == womenCategoryId
          )
          .sort((a: any, b: any) => a.attributes.order - b.attributes.order);
        const allWomenCategories = womenCategories.map((womenCategory: any) => {
          const each = categories.filter(
            (category: any) =>
              category?.attributes?.parent?.data?.id == womenCategory.id
          );

          return { category: womenCategory, under: each };
        });
        const menCategoryId: any = categories.find(
          (category: any) => category.attributes.name == "Men"
        ).id;

        setAllMenProducts(menCategoryId);

        const menCategories: any = categories.filter(
          (category: any) =>
            category?.attributes?.parent?.data?.id == menCategoryId
        );

        // .sort((a: any, b: any) => a.attributes.order - b.attributes.order);

        const allMenCategories = menCategories.map((womenCategory: any) => {
          const each = categories.filter(
            (category: any) =>
              category?.attributes?.parent?.data?.id == womenCategory.id
          );

          return { category: womenCategory, under: each };
        });

        setWomenCategories(allWomenCategories);

        setMenCategories(allMenCategories);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <MediaQuery minWidth={reactDevice.desktop.minWidth}> */}
      <StyledHeaderContainer $scroll={headerVisible}>
        <StyledTopHeaderContainer>
          <StyledTopHeader>
            <StyledGroupIconsHeader>
              {/* <SearchButton /> */}
              <IconButton>
                <FaFacebookF />
              </IconButton>
              <IconButton>
                <FaInstagram />
              </IconButton>
            </StyledGroupIconsHeader>
            <StyledLogo onClick={() => router.push("/")} src={HeaderLogo.src} />
            <StyledGroupIconsHeader>
              <ShopButton totalItems={totalItems} />
              <IconButton onClick={() => router.push("/SignIn")}>
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
                onMouseEnter={() =>
                  setOpenWomanCategories(!openWomanCategories)
                }
              >
                <AiOutlineWoman />
                <Categories
                  categories={womenCategories}
                  openCategories={openWomanCategories}
                  bgColor="#c44370"
                  allLinkId={allWomenProducts}
                  loading={loading}
                />
              </HeaderButton>
              <HeaderButton
                onMouseLeave={() => setOpenManCategories(false)}
                color={openManCategories ? "white" : "#232323"}
                bgColor={openManCategories ? "#75939E" : "white"}
                label={translation["en"].men}
                onMouseEnter={() => setOpenManCategories(!openManCategories)}
              >
                <AiOutlineMan />
                <Categories
                  categories={menCategories}
                  openCategories={openManCategories}
                  bgColor="#75939E"
                  allLinkId={allMenProducts}
                  loading={loading}
                />
              </HeaderButton>
              <HeaderButton
                onClick={() => {
                  window.location.href = "https://www.marti-store.pl";
                }}
                label={translation["en"].sportswear}
              />
            </StyledBottomButtons>
            <StyledBottomButtons>
              <HeaderButton
                onClick={scrollToBottom}
                label={translation["en"].contact}
              />
            </StyledBottomButtons>
          </StyledBottomHeader>
        </StyledBottomHeaderContainer>
      </StyledHeaderContainer>
      {/* </MediaQuery> */}
      {/* <MediaQuery maxWidth={reactDevice.desktop.minWidth}> */}
      {/* <StyledHeaderContainerMobile>
        <StyledHeaderTopContainerMobile>
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

export default Header;
