import { useEffect, useState } from "react";

import {
  StyledCateogryFilterContainer,
  StyledCateogryFilterContainerSizes,
  StyledFilterButton,
  StyledInputSliderContainer,
  StyledOneCateogryFilterChecked,
  StyledOneCateogryFilterContainer,
  StyledOneFiltersContainer,
  StyledOneFiltersGroup,
  StyledOneFiltersGroupContainer,
  StyledOneFiltersGroupNameArrow,
  StyledOneFiltersGroupNameContainer,
  StyledPriceInput,
} from "./ProductList.styled";

import { BlackButton } from "@/components/BlackButton/BlackButton";
import { fetchColors, fetchSizes } from "@/API/strapiConfig";

import Arrow from "@/assets/Arrow.svg";
import Check from "@/assets/Check.svg";
import CheckChecked from "@/assets/CheckChecked.svg";
import CheckHover from "@/assets/CheckHover.svg";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
interface ListFiltersProps {
  openFilters: boolean;
  setOpenFilters: any;
  applyFilters: any;
  sliderMin: any;
  sliderMax: any;
  setSliderMin: any;
  setSliderMax: any;
  chosenColors: any;
  setChosenColors: any;
  chosenSizes: any;
  setChosenSizes: any;
  rootCategory: any;
}

export const ListFilters = ({
  openFilters,
  setOpenFilters,
  applyFilters,
  sliderMin,
  sliderMax,
  setSliderMin,
  setSliderMax,
  chosenColors,
  setChosenColors,
  chosenSizes,
  setChosenSizes,
  rootCategory,
}: ListFiltersProps) => {
  const language = useSelector(selectLanguage);
  const [openColors, setOpenColors] = useState(false);
  const [allColors, setAllColors] = useState<any>([]);
  const [hoveredColorId, setHoveredColorId] = useState<any>();
  const [openSizes, setOpenSizes] = useState(false);
  const [allSizes, setAllSizes] = useState<any>([]);
  const [hoveredSizeId, setHoveredSizeId] = useState<any>();

  useEffect(() => {
    fetchAllColors();
    fetchAllSizes();
  }, []);

  const toggleColor = (color: any) => {
    setChosenColors((currentColors: any) => {
      // Sprawdzenie, czy kolor już istnieje w tablicy
      const isColorExist = currentColors?.includes(color);

      if (isColorExist) {
        // Usunięcie koloru, jeśli już istnieje
        return currentColors.filter((c: any) => c !== color);
      } else {
        // Dodanie koloru, jeśli nie istnieje
        return [...currentColors, color];
      }
    });
  };

  const toggleSize = (size: any) => {
    setChosenSizes((currentSizes: any) => {
      // Sprawdzenie, czy kolor już istnieje w tablicy
      const isSizeExist = currentSizes?.includes(size);

      if (isSizeExist) {
        // Usunięcie koloru, jeśli już istnieje
        return currentSizes.filter((c: any) => c !== size);
      } else {
        // Dodanie koloru, jeśli nie istnieje
        return [...currentSizes, size];
      }
    });
  };

  const fetchAllColors = async () => {
    const colors = await fetchColors();
    if (colors) {
      const finalColors = colors.filter(
        (color: any) => color.attributes?.products?.data?.length > 0
      );
      setAllColors(finalColors);
    }
  };

  const fetchAllSizes = async () => {
    const sizes: any = await fetchSizes();
    if (sizes) {
      const finalsizes = sizes.filter(
        (color: any) => color.attributes?.products?.data?.length > 0
      );
      setAllSizes(finalsizes);
    }
  };

  const handleMinChange = (event: any) => {
    const regex = /^-?\d*(\.\d+)?$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setSliderMin(value);
    }
  };

  const handleMaxChange = (event: any) => {
    const regex = /^-?\d*(\.\d+)?$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setSliderMax(value);
    }
  };

  return (
    <StyledOneFiltersGroupContainer>
      <StyledOneFiltersGroupNameContainer
        onClick={() => setOpenFilters(!openFilters)}
      >
        <div>{language == "pl" ? "Filtry" : "Filters"}</div>
        <StyledOneFiltersGroupNameArrow open={openFilters} src={Arrow.src} />
      </StyledOneFiltersGroupNameContainer>
      <StyledOneFiltersGroup open={openFilters}>
        <StyledOneFiltersGroupContainer>
          <StyledOneFiltersContainer>
            {language == "pl" ? "Cena" : "Price"}
          </StyledOneFiltersContainer>
          <StyledInputSliderContainer>
            <StyledPriceInput
              type="text"
              value={sliderMin}
              onChange={handleMinChange}
              placeholder={language == "pl" ? "Od" : "From"}
            />
            <StyledPriceInput
              type="text"
              value={sliderMax}
              onChange={handleMaxChange}
              placeholder={language == "pl" ? "Do" : "To"}
            />
          </StyledInputSliderContainer>
          {/* <StyledSlider
        min={0}
        max={1000}
        value={sliderValue}
        onChange={handleSliderChange}
        renderTrack={Track}
        renderThumb={Thumb}
        step={0.01}
      /> */}
        </StyledOneFiltersGroupContainer>
        {/* colors */}
        <StyledOneFiltersGroupContainer>
          <StyledOneFiltersGroupNameContainer
            onClick={() => setOpenColors(!openColors)}
          >
            <div>{language == "pl" ? "Kolor" : "Color"}</div>
            <StyledOneFiltersGroupNameArrow open={openColors} src={Arrow.src} />
          </StyledOneFiltersGroupNameContainer>
          <StyledOneFiltersGroup open={openColors}>
            <StyledCateogryFilterContainer>
              {allColors &&
                allColors.map((color: any) => {
                  return (
                    <StyledOneCateogryFilterContainer
                      onClick={() => {
                        toggleColor(color);
                      }}
                      key={color.id}
                      onMouseEnter={() => setHoveredColorId(color.id)} // Ustawienie ID przy najechaniu
                      onMouseLeave={() => setHoveredColorId(null)}
                    >
                      <StyledOneCateogryFilterChecked
                        src={
                          chosenColors?.includes(color)
                            ? CheckChecked.src
                            : color.id === hoveredColorId
                            ? CheckHover.src
                            : Check.src
                        }
                      />
                      {language == "pl" && color.attributes.name_pl
                        ? color.attributes.name_pl
                        : color.attributes.name}
                    </StyledOneCateogryFilterContainer>
                  );
                })}
            </StyledCateogryFilterContainer>
          </StyledOneFiltersGroup>
        </StyledOneFiltersGroupContainer>
        {/* sizes */}
        {rootCategory?.attributes.name == "Heels" && (
          <StyledOneFiltersGroupContainer>
            <StyledOneFiltersGroupNameContainer
              onClick={() => setOpenSizes(!openSizes)}
            >
              <div>{translation[language].sizes}</div>
              <StyledOneFiltersGroupNameArrow
                open={openSizes}
                src={Arrow.src}
              />
            </StyledOneFiltersGroupNameContainer>
            <StyledOneFiltersGroup open={openSizes}>
              <StyledCateogryFilterContainerSizes>
                {allSizes &&
                  allSizes.map((size: any) => {
                    return (
                      <StyledOneCateogryFilterContainer
                        onClick={() => {
                          toggleSize(size);
                        }}
                        key={size.id}
                        onMouseEnter={() => setHoveredSizeId(size.id)} // Ustawienie ID przy najechaniu
                        onMouseLeave={() => setHoveredSizeId(null)}
                      >
                        <StyledOneCateogryFilterChecked
                          src={
                            chosenSizes?.includes(size)
                              ? CheckChecked.src
                              : size.id === hoveredSizeId
                              ? CheckHover.src
                              : Check.src
                          }
                        />
                        {size.attributes.value}
                      </StyledOneCateogryFilterContainer>
                    );
                  })}
              </StyledCateogryFilterContainerSizes>
            </StyledOneFiltersGroup>
          </StyledOneFiltersGroupContainer>
        )}

        <BlackButton onClick={applyFilters} margin="10px 0 0">
          {language == "pl" ? "Zastosuj filtry" : "Apply filters"}
        </BlackButton>
      </StyledOneFiltersGroup>
    </StyledOneFiltersGroupContainer>
  );
};
