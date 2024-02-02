import { useRouter } from "next/router";
import {
  CartContainer,
  StyleOneProductDetails,
  StyledBottomSummary,
  StyledCart,
  StyledCartTitle,
  StyledDelete,
  StyledEmpty,
  StyledGoBack,
  StyledOneDetail,
  StyledOneDetailBold,
  StyledOneDetailBoldLink,
  StyledOneDetailCheck,
  StyledOneDetailContainer,
  StyledOneDetailFromList,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledPaymentMethod,
  StyledPrice,
  StyledProductList,
  StyledProductListContainer,
  StyledProductListDetails,
  StyledProductName,
  StyledProductSummary,
  StyledSumamryTitle,
  StyledSummaryButton,
  StyledTopDetails,
  StyledTopDetailsRight,
  StyledTotal,
  StyledTotalContainer,
  StyledTotalPrice,
} from "./Cart.styled";
import { useSelector } from "react-redux";
import { removeItem, selectCartItems } from "@/redux/cartSlice";
import { useEffect, useRef, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Modal } from "@/components/Modal/Modal";
import { useDispatch } from "react-redux";
import { BlackButton } from "@/components/BlackButton/BlackButton";

interface CartProps {}

export default function Cart({}: CartProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  const remove = (id: any) => {
    dispatch(removeItem({ id: id }));
  };

  return (
    <CartContainer>
      <StyledCart>
        <StyledGoBack onClick={() => router.back()}>{"< Back"}</StyledGoBack>
        <StyledCartTitle>Cart</StyledCartTitle>
        {cartItems.length ? (
          <>
            <StyledProductListContainer>
              <StyledProductList>
                {cartItems.map((item: any) => {
                  return (
                    <StyledOneProduct key={item.id}>
                      <StyledOneProductPhoto src={item.image} />
                      <StyleOneProductDetails>
                        <StyledTopDetails>
                          <StyledProductName>
                            {item.name.toUpperCase()}
                          </StyledProductName>
                          <StyledTopDetailsRight>
                            <StyledPrice>{item.price} zł</StyledPrice>
                            <StyledDelete
                              onClick={() => {
                                remove(item.id);
                              }}
                            >
                              Remove
                            </StyledDelete>
                          </StyledTopDetailsRight>
                        </StyledTopDetails>
                        <StyledProductListDetails>
                          {item.personalization && (
                            <StyledOneDetailCheck
                              onClick={() => {
                                setIsOpen(true);
                                const content = item.personalization.map(
                                  (element: any) => {
                                    return (
                                      <StyledOneDetailContainer>
                                        {element.type}:{" "}
                                        <StyledOneDetailFromList>
                                          {" "}
                                          {element.name}{" "}
                                          {element.price
                                            ? ` +${element.price}zł`
                                            : ""}
                                        </StyledOneDetailFromList>
                                      </StyledOneDetailContainer>
                                    );
                                  }
                                );
                                setModalContent(content);
                              }}
                            >
                              Personalization <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item.details && (
                            <StyledOneDetailCheck
                              onClick={() => {
                                setIsOpen(true);
                                const content = item.details.map(
                                  (element: any) => {
                                    return (
                                      <StyledOneDetailContainer>
                                        {element.name}:{" "}
                                        <StyledOneDetailFromList>
                                          {" "}
                                          {element.value}
                                        </StyledOneDetailFromList>
                                      </StyledOneDetailContainer>
                                    );
                                  }
                                );
                                setModalContent(content);
                              }}
                            >
                              Details <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item.additionalNotes && (
                            <StyledOneDetailCheck
                              onClick={() => {
                                setIsOpen(true);
                                const content = (
                                  <StyledOneDetailContainer>
                                    {item.additionalNotes}
                                  </StyledOneDetailContainer>
                                );

                                setModalContent(content);
                              }}
                            >
                              Additional notes <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item.productionTime && (
                            <StyledOneDetail>
                              Production time:{" "}
                              <StyledOneDetailBold>
                                {item.productionTime.name},{" "}
                                {item.productionTime.description &&
                                  stripHtml(item.productionTime.description)}
                              </StyledOneDetailBold>
                            </StyledOneDetail>
                          )}
                          {item.bikiniCase && (
                            <StyledOneDetail>
                              Bikini case:{" "}
                              <StyledOneDetailBoldLink
                                onClick={() => {
                                  router.push({
                                    pathname: `/product/${item.bikiniCase.id}`,
                                  });
                                }}
                              >
                                {item.bikiniCase.name}
                              </StyledOneDetailBoldLink>
                            </StyledOneDetail>
                          )}
                        </StyledProductListDetails>
                      </StyleOneProductDetails>
                    </StyledOneProduct>
                  );
                })}
              </StyledProductList>
              <StyledProductSummary>
                <StyledSumamryTitle>Summary</StyledSumamryTitle>
                <StyledBottomSummary>
                  <StyledTotalContainer>
                    <StyledTotal>Total</StyledTotal>
                    <StyledTotalPrice>
                      {cartItems
                        .reduce((acc: any, curr: any) => {
                          return acc + Number(curr.price);
                        }, 0)
                        .toFixed(2)}{" "}
                      zł
                    </StyledTotalPrice>
                  </StyledTotalContainer>
                  <BlackButton
                    margin={"12px 0 0"}
                    onClick={() => router.push("/checkOut")}
                  >
                    Checkout
                  </BlackButton>
                </StyledBottomSummary>
              </StyledProductSummary>
            </StyledProductListContainer>
            <StyledPaymentMethod>
              <StyledSumamryTitle>Payment methods</StyledSumamryTitle>
            </StyledPaymentMethod>
          </>
        ) : (
          <StyledEmpty>Cart is empty</StyledEmpty>
        )}
      </StyledCart>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </Modal>
    </CartContainer>
  );
}
