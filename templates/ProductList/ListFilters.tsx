import { useState } from "react";

import {
  StyledFilterButton,
  StyledInputSliderContainer,
  StyledOneFiltersContainer,
  StyledOneFiltersGroup,
  StyledOneFiltersGroupContainer,
  StyledOneFiltersGroupNameArrow,
  StyledOneFiltersGroupNameContainer,
  StyledPriceInput,
} from "./ProductList.styled";

import Arrow from "@/assets/Arrow.svg";
import { BlackButton } from "@/components/BlackButton/BlackButton";

interface ListFiltersProps {
  openFilters: boolean;
  setOpenFilters: any;
  applyFilters: any;
  sliderMin: any;
  sliderMax: any;
  setSliderMin: any;
  setSliderMax: any;
}

export const ListFilters = ({
  openFilters,
  setOpenFilters,
  applyFilters,
  sliderMin,
  sliderMax,
  setSliderMin,
  setSliderMax,
}: ListFiltersProps) => {
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
        <div>Filters</div>
        <StyledOneFiltersGroupNameArrow open={openFilters} src={Arrow.src} />
      </StyledOneFiltersGroupNameContainer>
      <StyledOneFiltersGroup open={openFilters}>
        <StyledOneFiltersGroupContainer>
          <StyledOneFiltersContainer>Price</StyledOneFiltersContainer>
          <StyledInputSliderContainer>
            <StyledPriceInput
              type="text"
              value={sliderMin}
              onChange={handleMinChange}
              placeholder="from"
            />
            <StyledPriceInput
              type="text"
              value={sliderMax}
              onChange={handleMaxChange}
              placeholder="to"
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
        <BlackButton onClick={applyFilters} margin="10px 0 0">
          Apply filters
        </BlackButton>
      </StyledOneFiltersGroup>
    </StyledOneFiltersGroupContainer>
  );
};
