import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import {
  StyledAddToBagButton,
  StyledAddToWishlist,
  StyledDescription,
  StyledInTotal,
  StyledInfo,
  StyledMainPhoto,
  StyledOneStar,
  StyledOpinion,
  StyledOpinionRow,
  StyledPhotoRow,
  StyledPhotos,
  StyledPrize,
  StyledProduct,
  StyledProductContainer,
  StyledProductName,
  StyledSeeAllReviews,
  StyledShowDetails,
  StyledShowDetailsArrow,
  StyledSizeContainer,
  StyledSmallPhoto,
  StyledStars,
  StyledTextarea,
  StyledType,
  StyledTypeOne,
} from "./Product.styled";
import StarFull from "@/assets/StarFull.svg";
import StarEmpty from "@/assets/StarEmpty.svg";
import { getProductById } from "@/API/product";
import { useRouter } from "next/router";
import { getCategories } from "@/API/categories";
import { BikiniDetails } from "./components/BikiniDetails";
import Arrow from "@/assets/Arrow.svg";
import { BikiniForm } from "./components/BikiniForm";
import { ProductionTime } from "./components/ProductionTime";
import { BikiniCase } from "./components/BikiniCase";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItem, removeItem } from "@/redux/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { MoonLoader } from "react-spinners";
import { Loader } from "@/components/Loader/Loader";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { Modal } from "@/components/Modal/Modal";
import Error from "@/components/Error/Error";
import { StyledErrorTitle } from "@/components/Error/Error.styled";
import Success from "@/components/Success/Success";
import { StyledSuccessTitle } from "@/components/Success/Success.styled";
import { OtherAttributes } from "./components/OtherAttributes";
import { RobeDetails } from "./components/RobeDetails";
import {
  fetchBikiniDetailsByName,
  fetchProductById,
  fetchProductsByCategoryName,
  fetchRobe,
} from "@/API/strapiConfig";
import { PickSize } from "./components/PickSize";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import { selectCurrencyDetails } from "@/redux/currencySlice";
import { ModalPhotos } from "@/components/ModalPhotos/ModalPhotos";

interface ProductProps {}

export default function ProductTemplate({}: ProductProps) {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [mainPhotoSrc, setMainPhotoSrc] = useState<any>();
  const [showDetails, setShowDetails] = useState(false);

  // toggles
  const [toggleShowDetails, setToggleShowDetails] = useState(false);
  const [toggleShowForm, setToggleShowForm] = useState(false);
  const [toggleShowProductionTime, setToggleShowProductionTime] =
    useState(false);
  const [toggleBikiniCase, setToggleBikiniCase] = useState(false);
  const [toggleAdditionalNotes, setToggleAdditionalNotes] = useState(false);

  const [productData, setProductData] = useState<any>();

  // product details
  const [chosenBikiniDetails, setChosenBikiniDetails] = useState<any>([]);

  const [formData, setFormData] = useState<any>([]);
  const [chosenBikiniCase, setChosenBikiniCase] = useState<any>();

  // robe

  const [robeFont, setRobeFont] = useState<any>([]);
  const [showRobeDetails, setShowRobeDetails] = useState(false);
  const [configureFontDetails, setConfigureFontDetails] = useState(false);
  const [robeText, setRobeText] = useState<any>();

  // other attrubiute
  const [otherAttributes, setOtherAttributes] = useState<any>();

  const [bikiniDetails, setBikiniDetails] = useState<any>();
  const [etuis, setEtuis] = useState<any>();
  const [additionalNotes, setAdditionalNotes] = useState<any>();

  const [inTotal, setInTotal] = useState<number>(0);

  const myRandomId = uuidv4();

  const [loading, setLoading] = useState(true);

  // heels
  const [heelsSizes, setHeelsSizes] = useState<any>([]);
  const [openHeels, setOpenHeels] = useState(false);
  const [chosenSize, setChosenSize] = useState<any>();

  // modal states

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<any>();

  // photos for modal

  const [photosUrl, setPhotosUrl] = useState<any>([]);
  const [openUrlPhotos, setOpenUrlPhotos] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<any>(0);

  // error

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<any>();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (router.query.product) {
      getProductData(Number(router.query.product));
    }
  }, [router.query]);

  useEffect(() => {
    let addPrice = 0;

    if (chosenBikiniDetails) {
      chosenBikiniDetails.forEach((detail: any) => {
        addPrice += Number(detail.option[priceKey]);
      });
    }

    if (otherAttributes) {
      otherAttributes.forEach((detail: any) => {
        if (detail.chosen) addPrice += Number(detail.chosen[priceKey]);
      });
    }

    if (chosenBikiniCase) {
      addPrice += Number(chosenBikiniCase.attributes[priceKey]);
    }
    if (robeText && robeText.length > 0) {
      let count = Math.ceil(robeText.length / 5);
      addPrice += count * 100;
    }

    if (productData) {
      setInTotal(Number(productData[priceKey]) + addPrice);
    }
  }, [
    chosenBikiniDetails,
    otherAttributes,
    chosenBikiniCase,
    robeText,
    currency,
  ]);

  const getProductData = async (id: number) => {
    setLoading(true);
    try {
      const data: any = await fetchProductById(id);

      if (data.attributes) {
        // show details check

        let photosUrls = [];
        data.attributes.id = data.id;
        setProductData(data.attributes);

        setInTotal(Number(data.attributes[priceKey]));

        setMainPhotoSrc(data.attributes?.main_photo?.data?.attributes?.url);
        photosUrls.push(data.attributes?.main_photo?.data?.attributes?.url);

        if (data?.attributes?.photos?.data) {
          data?.attributes?.photos?.data.forEach((photo: any) => {
            photosUrls.push(photo.attributes?.url);
          });
        }
        setPhotosUrl(photosUrls);

        if (data.attributes.form) {
          const modifiedArray = data.attributes.form.map((element: any) => {
            return {
              ...element, // Kopiuje wszystkie istniejące pola z obecnego elementu
              value: "", // Dodaje nowe pole 'show' z wartością 'false'
            };
          });
          setFormData(modifiedArray);
        }

        // looking for bikini details.

        if (data.attributes.bikini_details) {
          const bikiniDetails = await fetchBikiniDetailsByName(
            data.attributes.bikini_details
          );
          setBikiniDetails(bikiniDetails[0].attributes.bikini_details);
        }

        // lookig for robe details

        if (data.attributes.robe_detail) {
          const robe = await fetchRobe();

          const modifiedArray = robe.map((element: any) => {
            return {
              ...element.attributes,
              chosen: null,
              id: element.id,
            };
          });
          setRobeFont(modifiedArray);
        }

        // looking for heelSizes

        if (data.attributes.heels_sizes?.data?.length > 0) {
          setHeelsSizes(data.attributes.heels_sizes?.data);
        }

        if (data.attributes.bikini_case) {
          const etuis = await fetchProductsByCategoryName("Etui");
          setEtuis(etuis);
        }

        if (data.attributes.attributes) {
          const modifiedArray = data.attributes.attributes.map(
            (element: any) => {
              return {
                ...element,
                show: false,
                chosen: null,
              };
            }
          );
          setOtherAttributes(modifiedArray);
        }
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const toggleShow = (id: any) => {
    const updatedAttributes = otherAttributes.map((attribute: any) => {
      if (attribute.id === id) {
        return { ...attribute, show: !attribute.show };
      }
      return attribute;
    });
    setOtherAttributes(updatedAttributes);
  };

  const setChosenAttribute = (id: any, value: any) => {
    const updatedAttributes = otherAttributes.map((attribute: any) => {
      if (attribute.id === id) {
        return { ...attribute, chosen: value };
      }
      return attribute;
    });
    setOtherAttributes(updatedAttributes);
  };

  const retrunStars = (stringValue: string) => {
    const returnedStars = [];
    const value = Math.round(Number(stringValue) * 2) / 2;

    const fullStars = Math.floor(value);
    const halfStars = value - fullStars * 2;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        returnedStars.push(<StyledOneStar src={StarFull.src} />);
      } else if (halfStars) {
        returnedStars.push(<StyledOneStar src={StarFull.src} />);
      } else {
        returnedStars.push(<StyledOneStar src={StarEmpty.src} />);
      }
    }
    return returnedStars;
  };

  const add = () => {
    let errors = [];
    if (robeFont && robeText) {
      if (robeText.length < 10) {
        errors.push(translation[language].robeTextErrorInfo);
      }
    }

    otherAttributes.forEach((att: any) => {
      if (att.chosen === 0) {
        errors.push(
          capitalizeFirstLetter(
            language == "pl" && att.name_pl ? att.name_pl : att.name
          )
        );
      }
    });

    if (bikiniDetails) {
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Bra Style"
        )
      ) {
        errors.push(`${translation[language].personalization} - Bra style`);
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Cup Size"
        )
      ) {
        errors.push(`${translation[language].personalization} - Cup size`);
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Push Up"
        )
      ) {
        errors.push(`${translation[language].personalization} - Push up`);
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Bottom Backs"
        )
      ) {
        errors.push(`${translation[language].personalization} - Bottom Back`);
      }

      const backStraps = chosenBikiniDetails.find(
        (element: any) => element.typeName === "Back Straps"
      );

      if (
        !backStraps ||
        (backStraps.option.name == "Connectors" &&
          !chosenBikiniDetails.some(
            (element: any) => element.typeName === "Back Connectors"
          ))
      ) {
        errors.push(`${translation[language].personalization} - Back straps`);
      }

      // form errors

      formData.forEach((field: any) => {
        if (field.obligatory == true && field.value.length == 0) {
          errors.push(
            `${translation[language].details} - ${
              language == "pl" && field.name_pl ? field.name_pl : field.name
            }`
          );
        }
      });
    }

    if (heelsSizes?.length > 0 && chosenSize == undefined) {
      errors.push(translation[language].size);
    }

    otherAttributes &&
      otherAttributes.forEach((attribute: any) => {
        if (!attribute.chosen) {
          errors.push(
            `${
              language == "pl" && attribute.name_pl
                ? attribute.name_pl
                : attribute.name
            }`
          );
        }
      });

    if (errors.length > 0) {
      setShowError(true);
      setErrors(errors);
    } else {
      const personalization: any = [];
      if (chosenBikiniDetails) {
        chosenBikiniDetails.forEach((element: any) => {
          personalization.push({
            type: element.typeName,
            name:
              language == "pl" && element.option.name_pl
                ? element.option.name_pl
                : element.option.name,
            price_pln: element.option.price_pln,
            price_eur: element.option.price_eur,
            price_usd: element.option.price_usd,
          });
        });
      }
      const robeFontChosen = robeFont.find((font: any) => font.chosen != null);

      if (robeFontChosen) {
        let count = Math.ceil(robeText.length / 5);
        const addPrice = count * robeFontChosen[priceKey];
        personalization.push({
          type: translation[language].robeFont,
          name:
            language == "pl" && robeFontChosen.name_pl
              ? robeFontChosen.name_pl
              : robeFontChosen.name,
          price: addPrice,
        });

        personalization.push({
          type: translation[language].robeText,
          name: robeText,
          price: "",
        });
      }

      const details = otherAttributes.map((att: any) => {
        return {
          name: capitalizeFirstLetter(
            language == "pl" && att.name_pl ? att.name_pl : att.name
          ),
          value: att.chosen,
        };
      });

      if (heelsSizes?.length > 0 && chosenSize != undefined) {
        let real = chosenSize.attributes;
        real.name = real.value;

        details.push({ name: "Size", value: real });
      }

      const formDetails =
        formData && formData.filter((oneData: any) => oneData.value.length > 0);

      const product = {
        id: myRandomId,
        strapiId: productData.id,
        image: productData.main_photo.data.attributes.url,
        name: productData.name,
        name_pl: productData.name_pl,
        price: inTotal.toFixed(2),
        personalization: personalization ? personalization : null,
        details: details,
        formDetails: formDetails,
        bikiniCase: chosenBikiniCase ? chosenBikiniCase : null,
        additionalNotes: additionalNotes,
      };

      setSuccess(true);
      dispatch(addItem(product));
      window.scrollTo({
        top: 0, // Przewija do pozycji 0px od góry strony
        behavior: "smooth", // Opcjonalnie, dla płynnego przewijania
      });
    }
  };
  function capitalizeFirstLetter(str: any) {
    if (!str) return str; // Sprawdzenie, czy string nie jest pusty lub undefined
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function processTextToHtml(text: any) {
    // Dzieli tekst na akapity przy podwójnych enterach i otacza każdy akapit tagiem <p>
    let processed = text
      .split("\n\n")
      .map(
        (paragraph: any) =>
          `<p>${paragraph
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Zamienia tekst w ** na pogrubienie
            .replace(/_(.*?)_/g, "<em>$1</em>")}  
      </p>`
      )
      .join("");

    return processed;
  }

  const setChosenRobeDetails = (robe: any) => {
    const updatedRobeFont = robeFont.map((attribute: any) => {
      if (attribute.id === robe?.id) {
        return { ...attribute, chosen: robe };
      }
      return { ...attribute, chosen: null };
    });
    setRobeText("");
    setRobeFont(updatedRobeFont);
  };

  return (
    <StyledProductContainer>
      {/* <Header /> */}

      <StyledProduct>
        {" "}
        {loading ? (
          <Loader />
        ) : (
          <>
            <StyledPhotos>
              <StyledMainPhoto
                onClick={() => setOpenUrlPhotos(true)}
                src={mainPhotoSrc}
              />
              <StyledPhotoRow>
                {productData &&
                  [
                    productData.main_photo.data,
                    ...(Array.isArray(productData.photos.data)
                      ? productData.photos.data
                      : []),
                  ].map((image: any, index: any) => {
                    return (
                      <StyledSmallPhoto
                        onClick={() => {
                          setCurrentUrl(index);
                          setOpenUrlPhotos(true);
                        }}
                        src={image?.attributes?.url}
                      />
                    );
                  })}
              </StyledPhotoRow>
            </StyledPhotos>

            <StyledInfo>
              <StyledType>
                {productData &&
                  productData.categories.data.map((cat: any) => {
                    return (
                      <StyledTypeOne>
                        {language == "pl" && cat.attributes.name_pl
                          ? cat.attributes.name_pl
                          : cat.attributes.name}
                      </StyledTypeOne>
                    );
                  })}
              </StyledType>
              <StyledProductName>
                {productData && language == "pl" && productData.name_pl
                  ? productData.name_pl
                  : productData.name}
              </StyledProductName>
              <StyledPrize>
                {productData && Number(productData[priceKey]).toFixed(2)}{" "}
                {symbol}
              </StyledPrize>
              {/* <StyledOpinionRow>
                <StyledOpinion>
                  {productData && productData.average_rating == "0.00"
                    ? "-- "
                    : productData &&
                      Number(productData.average_rating.toFixed(1))}
                  /5
                </StyledOpinion>
                <StyledStars>
                  {productData && retrunStars(productData.average_rating)}
                </StyledStars>
                <StyledSeeAllReviews>
                  {productData && productData.rating_count} reviews
                </StyledSeeAllReviews>
              </StyledOpinionRow> */}
              {productData.description && (
                <StyledDescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      processTextToHtml(
                        language == "pl" && productData.description_pl
                          ? productData.description_pl
                          : productData.description
                      )
                    ),
                  }}
                ></StyledDescription>
              )}

              {/* *** Bikini details *** */}
              {bikiniDetails && (
                <>
                  <StyledShowDetails
                    onClick={() => setToggleShowDetails(!toggleShowDetails)}
                  >
                    {translation[language].personalization}*
                    <StyledShowDetailsArrow
                      open={toggleShowDetails}
                      src={Arrow.src}
                    />
                  </StyledShowDetails>

                  <BikiniDetails
                    show={toggleShowDetails}
                    bikiniDetails={bikiniDetails}
                    setModalContent={setModalContent}
                    setIsModalOpen={setIsModalOpen}
                    setModalTitle={setModalTitle}
                    chosenBikiniDetails={chosenBikiniDetails}
                    setChosenBikiniDetails={setChosenBikiniDetails}
                  />
                </>
              )}

              {robeFont.length > 0 && (
                <>
                  <StyledShowDetails
                    onClick={() => setShowRobeDetails(!showRobeDetails)}
                  >
                    {translation[language].personalization}
                    <StyledShowDetailsArrow
                      open={showRobeDetails}
                      src={Arrow.src}
                    />
                  </StyledShowDetails>

                  <RobeDetails
                    show={showRobeDetails}
                    robeFont={robeFont}
                    setChosenRobeDetails={setChosenRobeDetails}
                    configureFontDetails={configureFontDetails}
                    setConfigureFontDetails={setConfigureFontDetails}
                    robeText={robeText}
                    setRobeText={setRobeText}
                    setIsModalOpen={setIsModalOpen}
                    setModalContent={setModalContent}
                    setModalTitle={setModalTitle}
                  />
                </>
              )}

              {/* any other attribute  */}

              {/* Form Details  */}
              {formData.length > 0 && (
                <>
                  <StyledShowDetails
                    onClick={() => setToggleShowForm(!toggleShowForm)}
                  >
                    {translation[language].details}*
                    <StyledShowDetailsArrow
                      open={toggleShowForm}
                      src={Arrow.src}
                    />
                  </StyledShowDetails>
                  <BikiniForm
                    show={toggleShowForm}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </>
              )}

              {heelsSizes.length > 0 && (
                <>
                  <StyledShowDetails onClick={() => setOpenHeels(!openHeels)}>
                    {translation[language].size}*
                    <StyledShowDetailsArrow open={openHeels} src={Arrow.src} />
                  </StyledShowDetails>
                  <PickSize
                    show={openHeels}
                    sizes={heelsSizes}
                    setChosenSize={setChosenSize}
                    chosenSize={chosenSize}
                  />
                </>
              )}

              {otherAttributes && (
                <>
                  {otherAttributes.map((attribute: any) => {
                    return (
                      <>
                        <StyledShowDetails
                          onClick={() => toggleShow(attribute.id)}
                        >
                          {capitalizeFirstLetter(
                            language == "pl" && attribute.name_pl
                              ? attribute.name_pl
                              : attribute.name
                          )}
                          *
                          <StyledShowDetailsArrow
                            open={attribute.show}
                            src={Arrow.src}
                          />
                        </StyledShowDetails>
                        <OtherAttributes
                          otherAttributes={attribute.options}
                          show={attribute.show}
                          chosenOtherAttributes={attribute.chosen}
                          setChosenOtherAttributes={(value: any) =>
                            setChosenAttribute(attribute.id, value)
                          }
                          description={
                            language == "pl" && attribute.description_pl
                              ? attribute.description_pl
                              : attribute.description
                          }
                        />
                      </>
                    );
                  })}
                </>
              )}

              {bikiniDetails && (
                <>
                  {" "}
                  <StyledShowDetails
                    onClick={() => setToggleBikiniCase(!toggleBikiniCase)}
                  >
                    {translation[language].bikiniCase}
                    <StyledShowDetailsArrow
                      open={toggleBikiniCase}
                      src={Arrow.src}
                    />
                  </StyledShowDetails>
                  <BikiniCase
                    show={toggleBikiniCase}
                    etuis={etuis}
                    chosenBikiniCase={chosenBikiniCase}
                    setChosenBikiniCase={setChosenBikiniCase}
                  />
                </>
              )}
              {/* Bikini case*/}

              {/* Addtional notes  */}
              <StyledShowDetails
                onClick={() => setToggleAdditionalNotes(!toggleAdditionalNotes)}
              >
                {translation[language].additionalNotes}
                <StyledShowDetailsArrow
                  open={toggleAdditionalNotes}
                  src={Arrow.src}
                />
              </StyledShowDetails>
              <StyledTextarea
                $display={toggleAdditionalNotes ? "block" : "none"}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder={translation[language].writeHere}
              />
              <StyledInTotal>
                {translation[language].inTotal}: {inTotal.toFixed(2)} {symbol}
              </StyledInTotal>
              <BlackButton onClick={add} margin="10px 0 0">
                {translation[language].addToBag}
              </BlackButton>
              {/* <StyledAddToWishlist>
            Add to Wishlist
          </StyledAddToWishlist> */}
            </StyledInfo>
          </>
        )}
      </StyledProduct>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        children={modalContent}
        title={modalTitle}
      />
      <ModalPhotos
        isOpen={openUrlPhotos}
        setIsOpen={setOpenUrlPhotos}
        urls={photosUrl}
        currentUrl={currentUrl}
        setCurrentUrl={setCurrentUrl}
      />
      <Error showError={showError} setShowError={setShowError}>
        <StyledErrorTitle>
          {translation[language].completeFields}:
        </StyledErrorTitle>
        {errors?.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
      <Success showSuccess={success} setShowSuccess={setSuccess}>
        <StyledSuccessTitle>
          {translation[language].productAdded}
        </StyledSuccessTitle>
      </Success>
    </StyledProductContainer>
  );
}
