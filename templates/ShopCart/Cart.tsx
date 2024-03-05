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
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import { selectCurrencyDetails } from "@/redux/currencySlice";
import { selectUserData, resetUser } from "@/redux/userSlice";

import { useCookies } from "react-cookie";

interface CartProps {}

export default function Cart({}: CartProps) {
  const [cookies] = useCookies(["jwt", "email", "id"]); // 'jwt' to nazwa ciasteczka, w którym przechowujesz token JWT

  const { email, id, confirmed } = useSelector(selectUserData);
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
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
        <StyledGoBack
          onClick={() => router.back()}
        >{`< ${translation[language].back}`}</StyledGoBack>
        <StyledCartTitle>{translation[language].cart}</StyledCartTitle>
        {cartItems && cartItems.length ? (
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
                            {language == "pl" && item.name_pl
                              ? item.name_pl.toUpperCase()
                              : item.name.toUpperCase()}
                          </StyledProductName>
                          <StyledTopDetailsRight>
                            <StyledPrice>
                              {item.price[priceKey].toFixed(2)} {symbol}
                            </StyledPrice>
                            <StyledDelete
                              onClick={() => {
                                remove(item.id);
                              }}
                            >
                              {translation[language].remove}
                            </StyledDelete>
                          </StyledTopDetailsRight>
                        </StyledTopDetails>
                        <StyledProductListDetails>
                          {item?.personalization &&
                            item?.personalization.length > 0 && (
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
                                            {language == "pl" && element.name_pl
                                              ? element.name_pl
                                              : element.name}{" "}
                                            {element[priceKey]
                                              ? ` +${element[priceKey]}${symbol}`
                                              : ""}
                                          </StyledOneDetailFromList>
                                        </StyledOneDetailContainer>
                                      );
                                    }
                                  );
                                  setModalContent(content);
                                }}
                              >
                                {translation[language].personalization}{" "}
                                <IoEyeOutline size={18} />
                              </StyledOneDetailCheck>
                            )}

                          {item?.formDetails &&
                            item?.formDetails.length > 0 && (
                              <StyledOneDetailCheck
                                onClick={() => {
                                  setIsOpen(true);
                                  const content = item.formDetails.map(
                                    (element: any) => {
                                      return (
                                        <StyledOneDetailContainer>
                                          <strong>
                                            {language == "pl" && element.name_pl
                                              ? element.name_pl
                                              : element.name}
                                            :
                                          </strong>{" "}
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
                                {translation[language].formDetails}{" "}
                                <IoEyeOutline size={18} />
                              </StyledOneDetailCheck>
                            )}
                          {item?.details && item.details.length > 0 && (
                            <StyledOneDetailCheck
                              onClick={() => {
                                setIsOpen(true);
                                const content = item.details.map(
                                  (element: any) => {
                                    return (
                                      <StyledOneDetailContainer>
                                        <strong>
                                          {language == "pl" && element.name_pl
                                            ? element.name_pl
                                            : element.name}
                                          :
                                        </strong>{" "}
                                        <StyledOneDetailFromList>
                                          {language == "pl" &&
                                          element.value.name_pl
                                            ? element.value.name_pl
                                            : element.value.name}
                                          {element.value[priceKey]
                                            ? ` +${element.value[priceKey]}${symbol}`
                                            : ""}
                                        </StyledOneDetailFromList>
                                      </StyledOneDetailContainer>
                                    );
                                  }
                                );
                                setModalContent(content);
                              }}
                            >
                              {translation[language].details}{" "}
                              <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item?.additionalNotes && (
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
                              {translation[language].additionalNotes}{" "}
                              <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item?.bikiniCase && (
                            <StyledOneDetail>
                              {translation[language].bikiniCase}:{" "}
                              <StyledOneDetailBoldLink
                                onClick={() => {
                                  router.push({
                                    pathname: `/product/${item.bikiniCase.id}`,
                                  });
                                }}
                              >
                                {language == "pl" &&
                                item?.bikiniCase?.attributes?.name_pl
                                  ? item?.bikiniCase?.attributes?.name_pl
                                  : item?.bikiniCase?.attributes?.name}
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
                <StyledSumamryTitle>
                  {translation[language].summary}
                </StyledSumamryTitle>
                <StyledBottomSummary>
                  <StyledTotalContainer>
                    <StyledTotal>{translation[language].inTotal}</StyledTotal>
                    <StyledTotalPrice>
                      {cartItems
                        .reduce((acc: any, curr: any) => {
                          return acc + Number(curr.price[priceKey]);
                        }, 0)
                        .toFixed(2)}{" "}
                      {symbol}
                    </StyledTotalPrice>
                  </StyledTotalContainer>
                  <BlackButton
                    margin={"12px 0 0"}
                    onClick={() => {
                      if (cookies.email) {
                        router.push("/Adress");
                      } else {
                        router.push("/CheckOutNow");
                      }
                    }}
                  >
                    {translation[language].checkout}
                  </BlackButton>
                </StyledBottomSummary>
              </StyledProductSummary>
            </StyledProductListContainer>
            <StyledPaymentMethod>
              <StyledSumamryTitle>
                {translation[language].paymentsMethods}
              </StyledSumamryTitle>
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
