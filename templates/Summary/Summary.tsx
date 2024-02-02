import { useState } from "react";
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
} from "../Cart/Cart.styled";
import { useSelector } from "react-redux";
import { removeItem, selectCartItems } from "@/redux/cartSlice";
import { IoEyeOutline } from "react-icons/io5";
import { Modal } from "@/components/Modal/Modal";
import { useDispatch } from "react-redux";
import { StyledInput } from "../CheckOut/CheckOut.styled";
import { selectEntireForm } from "@/redux/formSlice";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";

interface AdressProps {}
export default function Adress({}: AdressProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);
  const personalData = useSelector(selectEntireForm);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  const [code, setCode] = useState<any>();

  function stripHtml(html: any) {
    return html.replace(/<[^>]*>?/gm, "");
  }
  return (
    <StyledSummaryContainer>
      <StyledSummary>
        <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
        <StyledSummaryTitle>Summary</StyledSummaryTitle>{" "}
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
                            <StyledPrice>{item.price} zł</StyledPrice>
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
                <StyledSummaryTop>
                  <StyledAdresData>
                    <StyledSumamryTitle>Address</StyledSumamryTitle>
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
                  <StyledSumamryTitle>Discount code</StyledSumamryTitle>
                  <StyledCouponContainer>
                    {" "}
                    <Input
                      type="text"
                      value={code}
                      onChange={(e: any) => setCode(e.target.value)}
                      label="Code"
                    />
                    <BlackButton margin="20px 0 0">Apply</BlackButton>
                  </StyledCouponContainer>
                </StyledSummaryTop>

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
                  <BlackButton margin="20px 0 0">Go to payment</BlackButton>
                </StyledBottomSummary>
              </StyledProductSummary>
            </>
          ) : (
            <StyledEmpty>Cart is empty</StyledEmpty>
          )}
        </StyledProductListContainer>
      </StyledSummary>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </Modal>
    </StyledSummaryContainer>
  );
}
