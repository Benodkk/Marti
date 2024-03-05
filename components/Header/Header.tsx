import MediaQuery from "react-responsive";
import { reactDevice } from "@/styles/deviceWith";
import icon from "@/assets/GoldenCircle.png";
import HeelsIcon from "@/assets/HeelsIcon.svg";
import HeelsIconWhite from "@/assets/HeelsIconWhite.svg";
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
import { useSelector, useDispatch } from "react-redux";
import { selectTotalItems } from "@/redux/cartSlice";
import { setLanguage, selectLanguage } from "@/redux/languageSlice";

import { MoonLoader } from "react-spinners";
import { fetchAllCategories } from "@/API/strapiConfig";
import Head from "next/head";
import { SelectValue } from "../Select/Select";
import { setCurrency, selectCurrencyDetails } from "@/redux/currencySlice";
import { selectUserData } from "@/redux/userSlice";
import { useCookies } from "react-cookie";

const options = [
  { value: "pln", label: "PLN" },
  { value: "eur", label: "EUR" },
  { value: "usd", label: "USD" },
];

const langOptions = [
  { value: "pl", label: "PL" },
  { value: "en", label: "EN" },
];

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [cookies] = useCookies(["jwt", "email", "id"]); // 'jwt' to nazwa ciasteczka, w którym przechowujesz token JWT

  const dispatch = useDispatch();
  const { email, id, confirmed } = useSelector(selectUserData);
  const language = useSelector(selectLanguage);
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const totalItems = useSelector(selectTotalItems);
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [openWomanCategories, setOpenWomanCategories] = useState(false);
  const [openManCategories, setOpenManCategories] = useState(false);
  const [openHeelsCategories, setOpenHeelsCategories] = useState(false);

  // cateogories for header
  const [womenCategories, setWomenCategories] = useState();
  const [menCategories, setMenCategories] = useState();
  const [heelsCategories, setHeelsCategories] = useState();

  // id for categories
  const [allWomenProducts, setAllWomenProducts] = useState<any>();
  const [allMenProducts, setAllMenProducts] = useState<any>();
  const [allHeelsProducts, setAllHeelsProducts] = useState<any>();

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    const checkMousePosition = (event: any) => {
      const { clientY } = event; // Pobierz pozycję Y kursora
      const threshold = 100; // Ustaw próg, na przykład 100px od góry ekranu

      if (clientY <= threshold) {
        setHeaderVisible(true);
      }
    };

    // Dodaj event listener do nasłuchiwania ruchu myszy
    window.addEventListener("mousemove", checkMousePosition);

    // Oczyść event listener, gdy komponent zostanie odmontowany
    return () => {
      window.removeEventListener("mousemove", checkMousePosition);
    };
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
          const each = categories
            .filter(
              (category: any) =>
                category?.attributes?.parent?.data?.id == womenCategory.id
            )
            .sort((a: any, b: any) => a.attributes.order - b.attributes.order);

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

        const heelsCategoryId: any = categories.find(
          (category: any) => category.attributes.name == "Heels"
        ).id;

        setAllHeelsProducts(heelsCategoryId);

        const heelsCategories = categories
          .filter(
            (category: any) =>
              category?.attributes?.parent?.data?.id == heelsCategoryId
          )
          .sort((a: any, b: any) => a.attributes.order - b.attributes.order);
        const allHeelsCategories = heelsCategories.map((heelsCategory: any) => {
          const each = categories.filter(
            (category: any) =>
              category?.attributes?.parent?.data?.id == heelsCategory.id
          );

          return { category: heelsCategory, under: each };
        });

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
        setHeelsCategories(allHeelsCategories);
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

  const pushToList = (category: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
        fromHeader: "true",
      },
    });
  };

  const pushToProfile = () => {
    if (cookies.email) {
      router.push("/Profile");
    } else {
      router.push("/SignIn");
    }
  };

  return (
    <>
      <Head>
        <title>Marti - Bikini Suits</title>
        <link rel="icon" href={icon.src} />
      </Head>

      {/* <MediaQuery minWidth={reactDevice.desktop.minWidth}> */}
      <StyledHeaderContainer $scroll={headerVisible}>
        <StyledTopHeaderContainer>
          <StyledTopHeader>
            <StyledGroupIconsHeader>
              {/* <SearchButton /> */}
              <IconButton
                onClick={() => {
                  window.open("https://www.facebook.com/martibikini", "_blank");
                }}
              >
                <FaFacebookF />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/marti_bikini?igsh=MWt0c2E5ZjR4MGMxbA==",
                    "_blank"
                  );
                }}
              >
                <FaInstagram />
              </IconButton>
            </StyledGroupIconsHeader>
            <StyledLogo onClick={() => router.push("/")} src={HeaderLogo.src} />
            <StyledGroupIconsHeader>
              <ShopButton totalItems={totalItems} />
              <IconButton onClick={pushToProfile}>
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
                label={translation[language].women}
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
                label={translation[language].men}
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
                onMouseLeave={() => setOpenHeelsCategories(false)}
                color={openHeelsCategories ? "white" : "#232323"}
                bgColor={openHeelsCategories ? "#B1A270" : "white"}
                label={translation[language].heels}
                onMouseEnter={() =>
                  setOpenHeelsCategories(!openHeelsCategories)
                }
              >
                <img
                  src={openHeelsCategories ? HeelsIconWhite.src : HeelsIcon.src}
                  alt="heel"
                />
                <Categories
                  heelsCategory={true}
                  categories={heelsCategories}
                  openCategories={openHeelsCategories}
                  bgColor="#B1A270"
                  allLinkId={allHeelsProducts}
                  loading={loading}
                />
              </HeaderButton>
              <HeaderButton
                onClick={() => {
                  window.open("https://www.marti-store.pl", "_blank");
                }}
                label={translation[language].sportswear}
              />
            </StyledBottomButtons>
            <StyledBottomButtons>
              <SelectValue
                options={options}
                defaultValue={options.find(
                  (lang: any) => lang.value === currency
                )}
                handleChange={(selectedOption: any) => {
                  dispatch(setCurrency(selectedOption.value));
                  localStorage.setItem("userCurrency", selectedOption.value);
                }}
              />
              <SelectValue
                options={langOptions}
                defaultValue={langOptions.find(
                  (lang: any) => lang.value === language
                )}
                handleChange={(selectedOption: any) => {
                  dispatch(setLanguage(selectedOption.value));
                  localStorage.setItem("userLanguage", selectedOption.value);
                }}
              />
              <HeaderButton
                onClick={scrollToBottom}
                label={translation[language].contact}
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
