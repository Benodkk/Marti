import { BackButton } from "@/components/BackButton/BackButton";
import {
  StyledActionRow,
  StyledAddToFavourite,
  StyledBotSummary,
  StyledCheckOutButton,
  StyledOneCart,
  StyledOneCartLeft,
  StyledOneCartRight,
  StyledOneProductPhoto,
  StyledPaymentContainer,
  StyledPaymentList,
  StyledPaymentListContainer,
  StyledPayments,
  StyledPaymentsTitle,
  StyledProductCount,
  StyledProductDetail,
  StyledProductDetails,
  StyledProductDetailsContainer,
  StyledProductName,
  StyledProductNumber,
  StyledProductPrice,
  StyledRemove,
  StyledSummary,
  StyledSummaryLabel,
  StyledSummaryOneRow,
  StyledSummaryTitle,
  StyledTopSummary,
  StyledTotal,
  StyledTotalPrize,
  StyledTotalRow,
} from "./Payments.styled";
import BestsellersPhoto from "@/assets/BestSellersPhoto.png";
import { OneCart } from "./OneCart";

interface PaymentsProps {}

export const PaymentsTemplate = ({}: PaymentsProps) => {
  return (
    <StyledPaymentContainer>
      <StyledPayments>
        <BackButton />
        <StyledPaymentsTitle>Payment</StyledPaymentsTitle>
        <StyledPaymentListContainer>
          <StyledPaymentList>
            <OneCart />
            <OneCart />
          </StyledPaymentList>
          <StyledSummary>
            <StyledTopSummary>
              <StyledSummaryTitle>Summary</StyledSummaryTitle>
              <StyledSummaryOneRow>
                <StyledSummaryLabel>Subtotal</StyledSummaryLabel>
                <StyledSummaryLabel>159,00 zł</StyledSummaryLabel>
              </StyledSummaryOneRow>
              <StyledSummaryOneRow>
                <StyledSummaryLabel>Shipping</StyledSummaryLabel>
                <StyledSummaryLabel>12,00 zł</StyledSummaryLabel>
              </StyledSummaryOneRow>
              <StyledSummaryOneRow>
                <StyledSummaryLabel>Tax</StyledSummaryLabel>
                <StyledSummaryLabel>12,00 zł</StyledSummaryLabel>
              </StyledSummaryOneRow>
            </StyledTopSummary>
            <StyledBotSummary>
              <StyledTotalRow>
                <StyledTotal>Total</StyledTotal>
                <StyledTotalPrize>244,00 zł</StyledTotalPrize>
              </StyledTotalRow>
              <StyledCheckOutButton>Checkout</StyledCheckOutButton>
            </StyledBotSummary>
          </StyledSummary>
        </StyledPaymentListContainer>
      </StyledPayments>
    </StyledPaymentContainer>
  );
};
