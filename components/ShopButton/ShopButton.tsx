import { AiOutlineShopping } from "react-icons/ai";
import { StyledCountProducts, StyledIconButton } from "./ShopButton.styled";
import { useRouter } from "next/router";

interface IconButtonProps {
  totalItems: number;
}

export const ShopButton = ({ totalItems }: IconButtonProps) => {
  const router = useRouter();
  return (
    <StyledIconButton onClick={() => router.push("/cart")}>
      <AiOutlineShopping />
      <StyledCountProducts $display={totalItems == 0 ? "none" : "flex"}>
        {totalItems}
      </StyledCountProducts>
    </StyledIconButton>
  );
};
