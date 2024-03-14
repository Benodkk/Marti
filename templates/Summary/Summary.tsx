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
  StyledCopuonActiveContainer,
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
import { clearCart, removeItem, selectCartItems } from "@/redux/cartSlice";
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
import { fetchCoupon, makeOrder } from "@/API/strapiConfig";
import { StyledInTotalRow } from "../Product/Product.styled";
import { NoLabelInput } from "@/components/Input/NoLabelInput";

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

  // coupon

  const [couponActive, setCouponActive] = useState(false);
  const [couponValue, setCouponValue] = useState<any>(0);
  const [couponName, setCouponName] = useState<any>("");

  const [couponError, setCouponError] = useState(false);

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  const headingGen = (text: string, lvl: number) => {
    return {
      type: "heading",
      level: lvl,
      children: [
        {
          text: text,
          type: "text",
        },
      ],
    };
  };

  const paragraphGen = (text: string) => {
    return {
      type: "paragraph",
      children: [
        {
          text: text,
          type: "text",
        },
      ],
    };
  };

  const paragraphGenBold = (text: string) => {
    return {
      type: "paragraph",
      children: [
        {
          bold: true,
          text: text,
          type: "text",
        },
      ],
    };
  };
  const imageBlockGen = (imageUrl: any, linkText: any) => {
    return {
      type: "paragraph", // Typ bloku, 'paragraph' w tym przypadku
      children: [
        {
          text: "", // Pusty tekst przed linkiem
          type: "text",
        },
        {
          type: "link", // Typ elementu, 'link' w tym przypadku
          url: imageUrl, // URL prowadzący do obrazu
          children: [
            {
              text: linkText, // Tekst wyświetlany jako link
              type: "text",
            },
          ],
        },
        {
          text: "", // Pusty tekst po linku
          type: "text",
        },
      ],
    };
  };

  const uploadImageToCloudinary = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "amsrcruz");
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/deduvxogk/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;
    return imageUrl;
  };

  const buy = async () => {
    const details: any = [];

    if (couponActive) {
      details.push(headingGen("Kupon", 1));
      details.push(paragraphGen(`Nazwa: ${couponName} ${couponValue}%`));
    }

    details.push(headingGen("Produkty", 1));

    for (const [index, item] of cartItems.entries()) {
      details.push(headingGen(`${index + 1}. ${item.name}`, 3));

      details.push(paragraphGenBold(`Ilość: ${item.count}`));

      if (item.personalization.length > 0) {
        details.push(paragraphGenBold("Personalizacja:"));
        item.personalization.forEach((pole: any) => {
          details.push(
            paragraphGen(
              ` ${pole.type}: ${pole.name} ${
                pole[priceKey] ? "+" + pole[priceKey] + symbol : ""
              }`
            )
          );
        });
      }

      if (item.bikiniCase) {
        details.push(paragraphGenBold("Bikini case:"));
        details.push(
          paragraphGen(
            `${item.bikiniCase.attributes.name}: ${item.bikiniCase.attributes[priceKey]}${symbol}`
          )
        );
      }

      if (item.formDetails.length > 0) {
        details.push(paragraphGenBold("Formularz:"));
        await Promise.all(
          item.formDetails.map(async (pole: any) => {
            if (!pole.input_photos) {
              details.push(paragraphGen(`${pole.name_pl}: ${pole.value}`));
            } else {
              const imageUrls = await Promise.all(
                pole.value.map(uploadImageToCloudinary)
              );
              imageUrls.forEach((imageUrl: string, index: number) => {
                details.push(imageBlockGen(imageUrl, `photo nr${index + 1}`));
              });
            }
          })
        );
      }

      if (item.details.length > 0) {
        details.push(paragraphGenBold("Szczegóły:"));
        item.details.forEach((pole: any) => {
          details.push(
            paragraphGen(
              `${pole.name}: ${pole.value.name} ${
                pole.value[priceKey]
                  ? `+ ${pole.value[priceKey]} ${symbol}`
                  : ""
              }`
            )
          );
        });
      }

      if (item.additionalNotes) {
        details.push(paragraphGenBold("Dodatkowe informacje:"));
        details.push(paragraphGen(item.additionalNotes));
      }
    }

    const cartItemsIds = cartItems.map((item: any) => item.strapiId);
    const order = await makeOrder(
      cookies.id,
      cartItemsIds,
      (
        cartItems.reduce((acc: any, curr: any) => {
          return acc + Number(curr.count) * Number(curr.price[priceKey]);
        }, 0) *
        (1 - couponValue * 0.01)
      ).toFixed(2) + symbol,
      "Blik",
      "przyjęte do realizacji",
      cookies.jwt ? cookies.jwt : null,
      `${personalData.country}, ${personalData.city} ${personalData.postCode} ${personalData.street}`,
      personalData.phone,
      personalData.email,
      `${personalData.name} ${personalData.secondName}`,
      details,
      language
    );

    // if (order) {
    //   dispatch(clearCart());
    //   router.push("/ConfirmationSend?orderConfirmation=true");
    // }
  };

  const activeCoupon = async (name: string) => {
    if (couponName !== name) {
      const coupon = await fetchCoupon(name);
      if (coupon && coupon?.attributes?.active) {
        setCouponValue(coupon.attributes.value);
        setCouponName(coupon.attributes.name);
        setCouponActive(true);
        setCouponError(false);
      } else {
        setCouponValue(0);
        setCouponName(name);
        setCouponError(true);
        setCouponActive(false);
      }
    }
  };

  function ImageComponent(imageUrl: any) {
    // Dodaj transformacje do URL-a obrazu
    const transformedImageUrl = imageUrl.replace(
      "/upload/",
      "/upload/w_500,q_80/"
    );

    return transformedImageUrl;
  }

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
                      <StyledOneProductPhoto src={ImageComponent(item.image)} />
                      <StyleOneProductDetails>
                        <StyledTopDetails>
                          <StyledInTotalRow>
                            <StyledProductName>{item.count}x</StyledProductName>

                            <StyledProductName>
                              {language == "pl" && item.name_pl
                                ? item.name_pl.toUpperCase()
                                : item.name.toUpperCase()}
                            </StyledProductName>
                          </StyledInTotalRow>

                          <StyledTopDetailsRight>
                            <StyledPrice>
                              {symbol == "$"
                                ? symbol +
                                  (
                                    Number(item.count) *
                                    Number(item.price[priceKey].toFixed(2))
                                  ).toFixed(2)
                                : (
                                    Number(item.count) *
                                    Number(item.price[priceKey].toFixed(2))
                                  ).toFixed(2) + symbol}
                            </StyledPrice>
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
                                            {element.input_photos
                                              ? element.value.length
                                              : element.value}
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
                                    pathname: `/product/SpecificProduct/`,
                                    query: { product: item.bikiniCase.id },
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
                    <BlackButton
                      margin="20px 0 0"
                      onClick={() => activeCoupon(code)}
                    >
                      {translation[language].apply}
                    </BlackButton>
                    {couponActive && (
                      <StyledCopuonActiveContainer>
                        <StyledTotal>
                          {translation[language].activeCoupon}: {couponName}
                        </StyledTotal>
                        <StyledTotalPrice>{`-${couponValue}%`}</StyledTotalPrice>
                      </StyledCopuonActiveContainer>
                    )}
                    {couponError && (
                      <StyledCopuonActiveContainer>
                        <StyledTotal>
                          {translation[language].noCoupon}
                        </StyledTotal>
                      </StyledCopuonActiveContainer>
                    )}
                  </StyledCouponContainer>
                </StyledSummaryTop>

                <StyledBottomSummary>
                  <StyledTotalContainer>
                    <StyledTotal>{translation[language].inTotal}</StyledTotal>
                    <StyledTotalPrice>
                      {symbol == "$"
                        ? symbol +
                          (
                            cartItems.reduce((acc: any, curr: any) => {
                              return acc + Number(curr.price[priceKey]);
                            }, 0) *
                            (1 - couponValue * 0.01)
                          ).toFixed(2)
                        : (
                            cartItems.reduce((acc: any, curr: any) => {
                              return acc + Number(curr.price[priceKey]);
                            }, 0) *
                            (1 - couponValue * 0.01)
                          ).toFixed(2) + symbol}
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
