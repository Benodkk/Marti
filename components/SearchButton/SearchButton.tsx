import { IconButton } from "../IconButton/IconButton";
import { StyledSearchButton, StyledSearchLabel } from "./SearchButton.styled";
import { FaSearch } from "react-icons/fa";

interface SearchButtonProps {}

export const SearchButton = ({}: SearchButtonProps) => {
  return (
    <StyledSearchButton>
      <IconButton>
        <FaSearch />
      </IconButton>
      <StyledSearchLabel>Search</StyledSearchLabel>
    </StyledSearchButton>
  );
};
