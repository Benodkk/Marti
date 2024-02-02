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

interface CategoriesProps {
  openCategories?: boolean;
  categories: any;
  bgColor: string;
  allLinkId: string;
  loading: boolean;
}

export const Categories = ({
  openCategories,
  categories,
  bgColor,
  allLinkId,
  loading,
}: CategoriesProps) => {
  const router = useRouter();

  const pushToList = (category: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
      },
    });
  };

  return (
    <StyledWomanOptionsContainer open={openCategories}>
      <StyledRealContent open={openCategories} $color={bgColor}>
        <StyledBoldLink
          onClick={() => pushToList(allLinkId)}
          $firstChild={true}
        >
          All products
        </StyledBoldLink>
        <StyledCategoriesOptions>
          {loading ? (
            <MoonLoader color="#000000" />
          ) : (
            categories &&
            categories.map((category: any, index: any) => {
              return (
                <StyledOneLinkColumn key={category.id}>
                  <StyledBoldLink
                    $firstChild={index === 0}
                    $oneChild={categories.length == 1}
                    onClick={() => pushToList(category.category.id)}
                  >
                    {category.category.name}
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
                          {underCategory.name}
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
