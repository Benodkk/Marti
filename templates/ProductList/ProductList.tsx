import {
  ProductListContainer,
  StyledBodyContainer,
  StyledBodyFilters,
} from "./ProductList.styled";
import { ProductListHeader } from "./ProductListHeader";
import { ProductListBody } from "./ProductListBody";
import womenMain from "@/assets/womenMain.png";
import menMain from "@/assets/menMain.png";
import heelsMain from "@/assets/heelsMain.png";
import { ListCategories } from "./ListCategories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ListFilters } from "./ListFilters";
import {
  fetchAllCat,
  fetchAllCategories,
  fetchAllProdWithPriceAndSize,
  fetchAllProdWithPriceRange,
  fetchProductsByCategoryId,
} from "@/API/strapiConfig";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";

interface ProductListProps {}

export default function ProductList({}: ProductListProps) {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  const router = useRouter();

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [rootCategory, setRootCategory] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [categories, setCategories] = useState<any>();

  const [mainCategories, setMainCategories] = useState<any>();
  const [underCategories, setUnderCategories] = useState<any>();

  const [mainCategory, setMainCategory] = useState<any>();

  const [products, setProducts] = useState<any>();

  // Filters

  const [openFilters, setOpenFilters] = useState<boolean>(false);

  const [sliderMin, setSliderMin] = useState("");
  const [sliderMax, setSliderMax] = useState("");
  // const [sliderValue, setSliderValue] = useState([100, 200]);
  const [sizes, setSizes] = useState<any>([]);
  const [colors, setColors] = useState<any>([]);

  useEffect(() => {
    if (!category || router.query.fromHeader) {
      getAllCategories(Number(router.query.category));
    }
  }, [router.query.category]);

  useEffect(() => {
    if (category) {
      setOpenFilters(false);
      setSliderMin("");
      setSliderMax("");

      const newUnderCategories = categories.find((mainCategory: any) => {
        if (mainCategory.category.id == category.id) {
          return mainCategory.under;
        }

        return mainCategory.under.some((underCategory: any) => {
          return underCategory.id === category.id;
        });
      });

      if (newUnderCategories) {
        setMainCategory(newUnderCategories.category);
        setUnderCategories(
          newUnderCategories.under.sort(
            (a: any, b: any) => a.attributes.order - b.attributes.order
          )
        );
      }

      getProducts(category.id);
    }
  }, [category]);

  const getAllCategories = async (categoryId: any) => {
    setLoadingCategories(true);

    try {
      // const products: any = await fetchProductsByCategoryId(Number(categoryId));

      const categories: any = await fetchAllCategories();

      if (categories) {
        const currentCategory = categories.find(
          (category: any) => category.id == categoryId
        );

        setCategory(currentCategory);
        const rootId = findRoot(categoryId, categories);

        setRootCategory(rootId);
        if (rootId) {
          const womenCategories = categories
            .filter(
              (category: any) =>
                category?.attributes?.parent?.data?.id == rootId.id
            )
            .sort((a: any, b: any) => a.attributes.order - b.attributes.order);
          const allCategories = womenCategories.map((womenCategory: any) => {
            const each = categories.filter(
              (category: any) =>
                category?.attributes?.parent?.data?.id == womenCategory.id
            );
            return { category: womenCategory, under: each };
          });
          setMainCategories(womenCategories);
          setCategories(allCategories);
        }
      }
    } catch {
    } finally {
      setLoadingCategories(false);
    }
  };

  const findRoot: any = (id: any, items: any, parent: any) => {
    const item: any = items.find((i: any) =>
      parent ? i.id == parent : i.id == id
    );

    // Jeśli nie znaleziono obiektu lub jest to "korzeń" (parent równy 0), zwróć obiekt
    if (!item || !item.attributes.parent.data) {
      return item;
    }
    // Jeśli obiekt ma parent różny od zera, szukaj rekurencyjnie obiektu nadrzędnego
    return findRoot(id, items, item.attributes.parent.data.id);
  };

  const getProducts = async (id: any) => {
    setIsLoading(true);
    try {
      const response = await fetchAllCat(id);
      if (response) {
        setProducts(response[0].attributes.products.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // price functions

  // const handleSliderChange = (newValue: any) => {
  //   setSliderValue(newValue);
  //   setSliderMin(newValue[0]);
  //   setSliderMax(newValue[1]);
  // };

  const applyFilters = async () => {
    const sizesNames: any = sizes.map((item: any) => item.attributes.value);
    const colorsNames: any = colors.map((item: any) => item.attributes.name);

    setIsLoading(true);
    try {
      const response = await fetchAllProdWithPriceAndSize(
        category.id,
        sliderMin,
        sliderMax,
        sizesNames,
        colorsNames,
        priceKey
      );
      if (response) {
        setProducts(response);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductListContainer>
      {rootCategory && (
        <ProductListHeader
          color={
            rootCategory?.attributes.name == "Men"
              ? "#75939E"
              : rootCategory?.attributes.name == "Heels"
              ? "#B1A270"
              : `#C44370`
          }
          listType={
            language == "pl" && rootCategory?.attributes.name_pl
              ? rootCategory?.attributes.name_pl
              : rootCategory?.attributes.name
          }
          photoSource={
            rootCategory?.attributes.name == "Men"
              ? menMain.src
              : rootCategory?.attributes.name == "Heels"
              ? heelsMain.src
              : womenMain.src
          }
        />
      )}

      <StyledBodyContainer>
        <StyledBodyFilters>
          <ListCategories
            mainCategory={mainCategory}
            mainCategories={mainCategories}
            underCategories={underCategories}
            currentCategory={category}
            setCurrentCategory={setCategory}
            isLoading={loadingCategories}
            showUnder={rootCategory?.attributes.name !== "Heels"}
          />
          <ListFilters
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            applyFilters={applyFilters}
            sliderMax={sliderMax}
            sliderMin={sliderMin}
            setSliderMax={setSliderMax}
            setSliderMin={setSliderMin}
            setChosenColors={setColors}
            chosenColors={colors}
            setChosenSizes={setSizes}
            chosenSizes={sizes}
            rootCategory={rootCategory}
          />
        </StyledBodyFilters>

        <ProductListBody products={products} loading={isLoading} />
      </StyledBodyContainer>
    </ProductListContainer>
  );
}
