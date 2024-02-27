import { useState } from "react";

import {
  StyledBodyFilters,
  StyledCateogryFilterContainer,
  StyledLoaderContainer,
  StyledOneCateogryFilterChecked,
  StyledOneCateogryFilterContainer,
  StyledOneFiltersGroup,
  StyledOneFiltersGroupContainer,
  StyledOneFiltersGroupNameArrow,
  StyledOneFiltersGroupNameContainer,
} from "./ProductList.styled";

import Arrow from "@/assets/Arrow.svg";
import Check from "@/assets/Check.svg";
import CheckChecked from "@/assets/CheckChecked.svg";
import CheckHover from "@/assets/CheckHover.svg";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface ListCategoriesProps {
  mainCategory: any;
  mainCategories: any;
  underCategories: any;
  currentCategory: any;
  setCurrentCategory: any;
  isLoading: boolean;
  showUnder?: boolean;
}

export const ListCategories = ({
  mainCategory,
  mainCategories,
  underCategories,
  currentCategory,
  setCurrentCategory,
  isLoading,
  showUnder,
}: ListCategoriesProps) => {
  const language = useSelector(selectLanguage);
  const router = useRouter();
  // Category

  const [openCategory, setOpenCategory] = useState(true);
  const [openUnderCategory, setOpenUnderCategory] = useState(true);

  const [hoveredId, setHoveredId] = useState<any>(null);

  return (
    <>
      {/* Cateogry */}
      <StyledOneFiltersGroupContainer>
        <StyledOneFiltersGroupNameContainer
          onClick={() => setOpenCategory(!openCategory)}
        >
          <div>{language == "pl" ? "Kategorie" : "Categories"}</div>
          <StyledOneFiltersGroupNameArrow open={openCategory} src={Arrow.src} />
        </StyledOneFiltersGroupNameContainer>
        <StyledOneFiltersGroup open={openCategory}>
          {isLoading ? (
            <StyledLoaderContainer>
              <MoonLoader color="#000000" size={40} />
            </StyledLoaderContainer>
          ) : (
            <StyledCateogryFilterContainer>
              {mainCategories &&
                mainCategories.map((category: any) => {
                  return (
                    <StyledOneCateogryFilterContainer
                      onClick={() => {
                        setCurrentCategory(category);
                        router.push(
                          {
                            pathname: "/products",
                            query: { category: category.id },
                          },
                          undefined,
                          { shallow: true }
                        );
                      }}
                      key={category.id}
                      onMouseEnter={() => setHoveredId(category.id)} // Ustawienie ID przy najechaniu
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <StyledOneCateogryFilterChecked
                        src={
                          category.id == currentCategory?.id ||
                          (mainCategory && category.id == mainCategory.id)
                            ? CheckChecked.src
                            : category.id === hoveredId
                            ? CheckHover.src
                            : Check.src
                        }
                      />
                      {language == "pl" && category.attributes.name_pl
                        ? category.attributes.name_pl
                        : category.attributes.name}
                    </StyledOneCateogryFilterContainer>
                  );
                })}
            </StyledCateogryFilterContainer>
          )}
        </StyledOneFiltersGroup>
      </StyledOneFiltersGroupContainer>
      {/* under categories */}
      {showUnder === true && (
        <StyledOneFiltersGroupContainer>
          <StyledOneFiltersGroupNameContainer
            onClick={() => setOpenUnderCategory(!openUnderCategory)}
          >
            <div>{language == "pl" ? "Podkategorie" : "Subcategories"}</div>
            <StyledOneFiltersGroupNameArrow
              open={openUnderCategory}
              src={Arrow.src}
            />
          </StyledOneFiltersGroupNameContainer>
          <StyledOneFiltersGroup open={openUnderCategory}>
            {isLoading ? (
              <StyledLoaderContainer>
                <MoonLoader color="#000000" size={40} />
              </StyledLoaderContainer>
            ) : (
              <StyledCateogryFilterContainer>
                {underCategories &&
                  underCategories.map((category: any) => {
                    return (
                      <StyledOneCateogryFilterContainer
                        onClick={() => {
                          setCurrentCategory(category);
                          router.push(
                            {
                              pathname: "/products",
                              query: { category: category.id },
                            },
                            undefined,
                            { shallow: true }
                          );
                        }}
                        key={category.id}
                        onMouseEnter={() => setHoveredId(category.id)} // Ustawienie ID przy najechaniu
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <StyledOneCateogryFilterChecked
                          src={
                            category.id == currentCategory?.id
                              ? CheckChecked.src
                              : category.id === hoveredId
                              ? CheckHover.src
                              : Check.src
                          }
                        />
                        {language == "pl" && category.attributes.name_pl
                          ? category.attributes.name_pl
                          : category.attributes.name}
                      </StyledOneCateogryFilterContainer>
                    );
                  })}
              </StyledCateogryFilterContainer>
            )}
          </StyledOneFiltersGroup>
        </StyledOneFiltersGroupContainer>
      )}
    </>
  );
};
