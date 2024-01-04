import { useEffect, useRef, useState } from "react";
import loadConfig from "next/dist/server/config";
import ReactSlider from "react-slider";
import {
  StyledBodyFilters,
  StyledCateogryFilterContainer,
  StyledFilterFilterContainer,
  StyledInputSliderContainer,
  StyledOneCateogryFilterChecked,
  StyledOneCateogryFilterContainer,
  StyledOneFilterFilterContainer,
  StyledOneFiltersGroup,
  StyledOneFiltersGroupContainer,
  StyledOneFiltersGroupNameArrow,
  StyledOneFiltersGroupNameContainer,
  StyledPriceInput,
  StyledSlider,
  Thumb,
  Track,
} from "./ProductList.styled";

import Arrow from "@/assets/Arrow.svg";
import Check from "@/assets/Check.svg";
import CheckChecked from "@/assets/CheckChecked.svg";
import CheckHover from "@/assets/CheckHover.svg";

interface ListFiltersProps {}

export const ListFilters = ({}: ListFiltersProps) => {
  // Filters filter
  const [openFilter, setOpenFilter] = useState(false);
  const [filterFilters, setFilterFilters] = useState<any>([]);

  // Category

  const [openCategory, setOpenCategory] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState<any>([]);

  // Price

  const [openPrice, setOpenPrice] = useState(false);
  const [sliderMin, setSliderMin] = useState(100);
  const [sliderMax, setSliderMax] = useState(200);
  const [sliderValue, setSliderValue] = useState([100, 200]);

  const [hoveredId, setHoveredId] = useState<any>(null);

  const addFilter = (newFilter: any) => {
    if (filterFilters.includes(newFilter)) {
      setFilterFilters(
        filterFilters.filter((filter: any) => filter !== newFilter)
      );
    } else {
      setFilterFilters([...filterFilters, newFilter]);
    }
  };

  const addCategory = (newFilter: any) => {
    if (categoryFilters.includes(newFilter)) {
      setCategoryFilters(
        categoryFilters.filter((filter: any) => filter !== newFilter)
      );
    } else {
      setCategoryFilters([...categoryFilters, newFilter]);
    }
  };

  // price functions

  const handleSliderChange = (newValue: any) => {
    setSliderValue(newValue);
    setSliderMin(newValue[0]);
    setSliderMax(newValue[1]);
  };

  // const handleMinChange = (event: any) => {
  //   const newMin = Math.min(
  //     parseFloat(event.target.value),
  //     sliderValue[1] - 0.1
  //   );
  //   setSliderMin(newMin);
  //   setSliderValue([newMin, sliderValue[1]]);
  // };

  // const handleMaxChange = (event: any) => {
  //   const newMax = Math.max(
  //     parseFloat(event.target.value),
  //     sliderValue[0] + 0.1
  //   );
  //   setSliderMax(newMax);
  //   setSliderValue([sliderValue[0], newMax]);
  // };

  const mockFilters = [
    { id: 1, name: "Filter1" },
    { id: 2, name: "Filter2" },
    { id: 3, name: "Filter3" },
    { id: 4, name: "Filter4" },
    { id: 5, name: "Filter5" },
    { id: 6, name: "Filter6" },
  ];
  const mockCategories = [
    { id: 1, name: "Filter1" },
    { id: 2, name: "Filter2" },
    { id: 3, name: "Filter3" },
    { id: 4, name: "Filter4" },
    { id: 5, name: "Filter5" },
    { id: 6, name: "Filter6" },
  ];

  return (
    <StyledBodyFilters>
      {/* Cateogry */}
      <StyledOneFiltersGroupContainer>
        <StyledOneFiltersGroupNameContainer
          onClick={() => setOpenCategory(!openCategory)}
        >
          <div>Categories</div>
          <StyledOneFiltersGroupNameArrow open={openCategory} src={Arrow.src} />
        </StyledOneFiltersGroupNameContainer>
        <StyledOneFiltersGroup open={openCategory}>
          <StyledCateogryFilterContainer>
            {mockCategories.map((filter) => {
              return (
                <StyledOneCateogryFilterContainer
                  onClick={() => addCategory(filter.id)}
                  key={filter.id}
                  onMouseEnter={() => setHoveredId(filter.id)} // Ustawienie ID przy najechaniu
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <StyledOneCateogryFilterChecked
                    src={
                      categoryFilters.some(
                        (categoryFilter: any) => categoryFilter === filter.id
                      )
                        ? CheckChecked.src
                        : filter.id === hoveredId
                        ? CheckHover.src
                        : Check.src
                    }
                  />
                  {filter.name}
                </StyledOneCateogryFilterContainer>
              );
            })}
          </StyledCateogryFilterContainer>
        </StyledOneFiltersGroup>
      </StyledOneFiltersGroupContainer>
      {/* Price */}
      <StyledOneFiltersGroupContainer>
        <StyledOneFiltersGroupNameContainer
          onClick={() => setOpenPrice(!openPrice)}
        >
          <div>Price</div>
          <StyledOneFiltersGroupNameArrow open={openPrice} src={Arrow.src} />
        </StyledOneFiltersGroupNameContainer>
        <StyledOneFiltersGroup open={openPrice}>
          <StyledInputSliderContainer>
            <StyledPriceInput
              disabled
              type="number"
              value={sliderMin.toFixed(2)}
              // onChange={handleMinChange}
            />
            <StyledPriceInput
              disabled
              type="number"
              value={sliderMax.toFixed(2)}
              // onChange={handleMaxChange}
            />
          </StyledInputSliderContainer>
          <StyledSlider
            min={0}
            max={1000}
            value={sliderValue}
            onChange={handleSliderChange}
            renderTrack={Track}
            renderThumb={Thumb}
            step={0.01}
          />
        </StyledOneFiltersGroup>
      </StyledOneFiltersGroupContainer>
    </StyledBodyFilters>
  );
};
