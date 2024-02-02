import {
  ProductListContainer,
  StyledBodyContainer,
  StyledBodyFilters,
} from "./ProductList.styled";
import { ProductListHeader } from "./ProductListHeader";
import { ProductListBody } from "./ProductListBody";
import womenMain from "@/assets/womenMain.png";
import { ListCategories } from "./ListCategories";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCategories } from "@/API/categories";
import { useRouter } from "next/router";
import {
  getProductsByCategoriesId,
  getProductsByCategoryAndPrice,
} from "@/API/product";
import { ListFilters } from "./ListFilters";

interface ProductListProps {}

export default function ProductList({}: ProductListProps) {
  const router = useRouter();

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    getAllCategories(router.query.category);
  }, []);

  useEffect(() => {
    if (category) {
      setOpenFilters(false);
      setSliderMin("");
      setSliderMax("");
      console.log(categories);

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
        setUnderCategories(newUnderCategories.under);
      }

      getProducts(category.id);
    }
  }, [category]);

  const getAllCategories = async (categoryId: any) => {
    setLoadingCategories(true);
    try {
      const categories: any = await getCategories();
      if (categories) {
        const currentCategory = categories.find(
          (category: any) => category.id == categoryId
        );
        setCategory(currentCategory);
        const rootId = findRoot(categoryId, categories);

        if (rootId) {
          const womenCategories = categories
            .filter((category: any) => category.parent == rootId.id)
            .sort((a: any, b: any) => a.menu_order - b.menu_order);
          const allCategories = womenCategories.map((womenCategory: any) => {
            const each = categories
              .filter((category: any) => category.parent == womenCategory.id)
              .sort((a: any, b: any) => a.menu_order - b.menu_order);
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
    if (!item || item.parent === 0) {
      return item;
    }
    // Jeśli obiekt ma parent różny od zera, szukaj rekurencyjnie obiektu nadrzędnego
    return findRoot(id, items, item.parent);
  };

  const getProducts = async (id: any) => {
    setIsLoading(true);
    try {
      const response = await getProductsByCategoriesId(id);
      if (response) {
        setProducts(response);
      }
    } catch (error) {
      console.error(error);
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
    setIsLoading(true);
    try {
      const response = await getProductsByCategoryAndPrice(
        category.id,
        sliderMin,
        sliderMax
      );
      if (response) {
        setProducts(response);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductListContainer>
      <ProductListHeader
        color="#C44370"
        listType="Women"
        photoSource={womenMain.src}
      />
      <StyledBodyContainer>
        <StyledBodyFilters>
          <ListCategories
            mainCategory={mainCategory}
            mainCategories={mainCategories}
            underCategories={underCategories}
            currentCategory={category}
            setCurrentCategory={setCategory}
            isLoading={loadingCategories}
          />
          <ListFilters
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            applyFilters={applyFilters}
            sliderMax={sliderMax}
            sliderMin={sliderMin}
            setSliderMax={setSliderMax}
            setSliderMin={setSliderMin}
          />
        </StyledBodyFilters>

        <ProductListBody products={products} loading={isLoading} />
      </StyledBodyContainer>
    </ProductListContainer>
  );
}
