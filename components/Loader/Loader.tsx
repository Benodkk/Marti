import { MoonLoader } from "react-spinners";
import { StyledLoaderContainer } from "./Loader.styled";

interface LoaderProps {}

export const Loader = ({}: LoaderProps) => {
  return (
    <StyledLoaderContainer>
      <MoonLoader color="#000000" />
    </StyledLoaderContainer>
  );
};
