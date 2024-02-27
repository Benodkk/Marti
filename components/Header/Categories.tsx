import { useRouter } from "next/router";
import {
  StyledWomanOptionsContainer,
  StyledCategoriesOptions,
  StyledBoldLink,
  StyledOneLinkColumn,
  StyledLink,
  StyledLinkContainer,
  StyledRealContent,
} from "./Header.styled";
import { MoonLoader } from "react-spinners";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";

interface CategoriesProps {
  openCategories?: boolean;
  categories: any;
  bgColor: string;
  allLinkId: string;
  loading: boolean;
  heelsCategory?: boolean;
}

export const Categories = ({
  openCategories,
  categories,
  bgColor,
  allLinkId,
  loading,
  heelsCategory,
}: CategoriesProps) => {
  const language = useSelector(selectLanguage);
  const router = useRouter();

  const pushToList = (category: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
        fromHeader: "true",
      },
    });
  };

  return (
    <StyledWomanOptionsContainer open={openCategories}>
      <StyledRealContent open={openCategories} $color={bgColor}>
        {heelsCategory == true ? null : (
          <StyledBoldLink
            onClick={() => pushToList(allLinkId)}
            $firstChild={true}
          >
            {translation[language].allProducts}
          </StyledBoldLink>
        )}

        <StyledCategoriesOptions $heels={heelsCategory == true}>
          {loading ? (
            <MoonLoader color="#000000" />
          ) : (
            categories &&
            categories.map((category: any, index: any) => {
              return (
                <StyledOneLinkColumn key={category.category.id}>
                  <StyledBoldLink
                    $heels={heelsCategory == true}
                    $lastChild={index + 1 == categories.length}
                    $firstChild={index === 0}
                    $oneChild={categories.length == 1 || heelsCategory}
                    onClick={() => pushToList(category.category.id)}
                  >
                    {language == "pl"
                      ? category.category.attributes.name_pl
                      : category.category.attributes.name}
                  </StyledBoldLink>
                  <StyledLinkContainer
                    $firstChild={index === 0}
                    $lastChild={index + 1 == categories.length}
                    $oneChild={categories.length == 1}
                  >
                    {category.under.map((underCategory: any) => {
                      return (
                        <StyledLink
                          onClick={() => pushToList(underCategory.id)}
                          key={underCategory.id}
                        >
                          {language == "pl" && underCategory.attributes.name_pl
                            ? underCategory.attributes.name_pl
                            : underCategory.attributes.name}
                        </StyledLink>
                      );
                    })}
                  </StyledLinkContainer>
                </StyledOneLinkColumn>
              );
            })
          )}
        </StyledCategoriesOptions>
      </StyledRealContent>
    </StyledWomanOptionsContainer>
  );
};
