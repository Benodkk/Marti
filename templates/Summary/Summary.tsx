import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";

import { sendContactForm } from "@/API/sendEmail";

import {
  StyledSummary,
  StyledSummaryContainer,
  StyledSummaryTitle,
  StyledProductSummary,
  StyledSumamryTitle,
  StyledTotal,
  StyledTotalContainer,
  StyledTotalPrice,
  StyledSummaryTop,
  StyledOneAdressData,
  StyledAdresData,
  StyledCouponInput,
  StyledCouponContainer,
  StyledBack,
  StyledPointer,
} from "./Summary.styled";
import { useRouter } from "next/router";
import {
  StyleOneProductDetails,
  StyledBottomSummary,
  StyledEmpty,
  StyledOneDetail,
  StyledOneDetailBold,
  StyledOneDetailBoldLink,
  StyledOneDetailCheck,
  StyledOneDetailContainer,
  StyledOneDetailFromList,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledPrice,
  StyledProductList,
  StyledProductListContainer,
  StyledProductListDetails,
  StyledProductName,
  StyledTopDetails,
  StyledTopDetailsRight,
} from "../ShopCart/Cart.styled";
import { useSelector } from "react-redux";
import { removeItem, selectCartItems } from "@/redux/cartSlice";
import { IoEyeOutline } from "react-icons/io5";
import { Modal } from "@/components/Modal/Modal";
import { useDispatch } from "react-redux";
import { StyledInput } from "../CheckOut/CheckOut.styled";
import { selectEntireForm } from "@/redux/formSlice";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";

import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";
import { translation } from "@/translation";
import { useCookies } from "react-cookie";
import { makeOrder } from "@/API/strapiConfig";

interface AdressProps {}
export default function Adress({}: AdressProps) {
  const [cookies] = useCookies(["jwt", "email", "id"]);
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);
  const personalData = useSelector(selectEntireForm);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  const [code, setCode] = useState<any>();

  useEffect(() => {}, [cookies]);

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  const buy = async () => {
    const cartItemsIds = cartItems.map((item: any) => item.strapiId);
    console.log(cartItemsIds);
    const order = await makeOrder(
      cookies.id,
      cartItemsIds,
      cartItems
        .reduce((acc: any, curr: any) => {
          return acc + Number(curr.price[priceKey]);
        }, 0)
        .toFixed(2) + symbol,
      "Blik",
      "przyjęte do realizacji",
      cookies.jwt ? cookies.jwt : null
    );
    if (order) {
      // router.push("/ConfirmationSend?orderConfirmation=true");
    }
    // const data = {
    //   name: "asdasd",
    //   email: "daniel.kozlowski2607@gmail.com",
    //   subject: "Subject",
    //   message: "Message",
    // };
    // sendContactForm(data);
  };

  return (
    <StyledSummaryContainer>
      <StyledSummary>
        <StyledBack
          onClick={() => router.back()}
        >{`< ${translation[language].back}`}</StyledBack>
        <StyledSummaryTitle>{translation[language].summary}</StyledSummaryTitle>{" "}
        <StyledProductListContainer>
          {cartItems.length ? (
            <>
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
                            <StyledPrice>
                              {symbol == "$"
                                ? symbol + item.price[priceKey].toFixed(2)
                                : item.price[priceKey].toFixed(2) + symbol}
                            </StyledPrice>
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
                          {item.details && (
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
                                            ? ` +${
                                                symbol == "$"
                                                  ? symbol +
                                                    element.value[priceKey]
                                                  : element.value[priceKey] +
                                                    symbol
                                              }`
                                            : ""}
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
                              {translation[language].additionalNotes}{" "}
                              <IoEyeOutline size={18} />
                            </StyledOneDetailCheck>
                          )}
                          {item.productionTime && (
                            <StyledOneDetail>
                              {translation[language].productionTime}
                              {": "}
                              <StyledOneDetailBold>
                                {item.productionTime.name},{" "}
                                {item.productionTime.description &&
                                  stripHtml(item.productionTime.description)}
                              </StyledOneDetailBold>
                            </StyledOneDetail>
                          )}
                          {item.bikiniCase && (
                            <StyledOneDetail>
                              {translation[language].bikiniCase}:{" "}
                              <StyledOneDetailBoldLink
                                onClick={() => {
                                  router.push({
                                    pathname: `/product/${item.bikiniCase.id}`,
                                  });
                                }}
                              >
                                {item.bikiniCase.attributes.name}
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
                <StyledSummaryTop>
                  <StyledAdresData>
                    <StyledSumamryTitle>
                      {translation[language].addres}

                      <StyledPointer>
                        <MdEdit onClick={() => router.push("/Adress")} />
                      </StyledPointer>
                    </StyledSumamryTitle>
                    <StyledOneAdressData>
                      {personalData.name} {personalData.secondName}
                    </StyledOneAdressData>
                    <StyledOneAdressData>
                      {personalData.street}
                    </StyledOneAdressData>
                    <StyledOneAdressData>
                      {personalData.postCode} {personalData.city}
                    </StyledOneAdressData>
                    <StyledOneAdressData>
                      {personalData.country}
                    </StyledOneAdressData>
                    <StyledOneAdressData>
                      {personalData.phone}
                    </StyledOneAdressData>
                    <StyledOneAdressData>
                      {personalData.additionalInfo}
                    </StyledOneAdressData>
                  </StyledAdresData>
                  <StyledSumamryTitle>
                    {translation[language].discoutCode}
                  </StyledSumamryTitle>
                  <StyledCouponContainer>
                    {" "}
                    <Input
                      type="text"
                      value={code}
                      onChange={(e: any) => setCode(e.target.value)}
                      label={translation[language].code}
                    />
                    <BlackButton margin="20px 0 0">
                      {translation[language].apply}
                    </BlackButton>
                  </StyledCouponContainer>
                </StyledSummaryTop>

                <StyledBottomSummary>
                  <StyledTotalContainer>
                    <StyledTotal>{translation[language].inTotal}</StyledTotal>
                    <StyledTotalPrice>
                      {symbol == "$"
                        ? symbol +
                          cartItems
                            .reduce((acc: any, curr: any) => {
                              return acc + Number(curr.price[priceKey]);
                            }, 0)
                            .toFixed(2)
                        : cartItems
                            .reduce((acc: any, curr: any) => {
                              return acc + Number(curr.price[priceKey]);
                            }, 0)
                            .toFixed(2) + symbol}
                    </StyledTotalPrice>
                  </StyledTotalContainer>
                  <BlackButton margin="20px 0 0" onClick={buy}>
                    {translation[language].goToPayment}
                  </BlackButton>
                </StyledBottomSummary>
              </StyledProductSummary>
            </>
          ) : (
            <StyledEmpty>{translation[language].cartIsEmpty}</StyledEmpty>
          )}
        </StyledProductListContainer>
      </StyledSummary>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </Modal>
    </StyledSummaryContainer>
  );
}
