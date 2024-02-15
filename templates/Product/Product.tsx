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
import { useDispatch } from "react-redux";
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

interface ProductProps {}

export default function ProductTemplate({}: ProductProps) {
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

  // modal states

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<any>();

  // error

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<any>();

  const [success, setSuccess] = useState(false);

  const [description, setDescription] = useState<any>();

  useEffect(() => {
    if (router.query.product) {
      getProductData(Number(router.query.product));
    }
  }, [router.query]);

  useEffect(() => {
    let addPrice = 0;

    if (chosenBikiniDetails) {
      chosenBikiniDetails.forEach((detail: any) => {
        addPrice += Number(detail.option.price_pln);
      });
    }

    if (otherAttributes) {
      otherAttributes.forEach((detail: any) => {
        if (detail.chosen) addPrice += Number(detail.chosen?.price_pln);
      });
    }

    if (chosenBikiniCase) {
      addPrice += Number(chosenBikiniCase.attributes.price_pln);
    }
    if (robeText && robeText.length > 0) {
      let count = Math.ceil(robeText.length / 5);
      addPrice += count * 100;
    }

    if (productData) {
      setInTotal(Number(productData?.price_pln) + addPrice);
    }
  }, [chosenBikiniDetails, otherAttributes, chosenBikiniCase, robeText]);

  const getProductData = async (id: number) => {
    setLoading(true);
    try {
      const data: any = await fetchProductById(id);
      console.log(data);

      if (data.attributes) {
        // show details check
        console.log(data);

        data.attributes.id = data.id;
        setProductData(data.attributes);

        setInTotal(Number(data.attributes.price_pln));

        setMainPhotoSrc(data.attributes?.main_photo?.data?.attributes?.url);
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
          console.log(data);

          const bikiniDetails = await fetchBikiniDetailsByName(
            data.attributes.bikini_details
          );
          setBikiniDetails(bikiniDetails[0].attributes.bikini_details);
        }

        // lookig for robe details

        if (data.attributes.robe_detail) {
          const robe = await fetchRobe();
          console.log(robe);

          const modifiedArray = robe.map((element: any) => {
            return {
              ...element.attributes,
              chosen: null,
              id: element.id,
            };
          });
          setRobeFont(modifiedArray);
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
        errors.push("Robe text - Min. 10 characters ");
      }
    }
    otherAttributes.forEach((att: any) => {
      if (att.chosen === 0) {
        errors.push(capitalizeFirstLetter(att.name));
      }
    });
    console.log(bikiniDetails);
    console.log(chosenBikiniDetails);

    if (bikiniDetails) {
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Bra Style"
        )
      ) {
        errors.push("Personalization - Bra style");
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Cup Size"
        )
      ) {
        errors.push("Personalization - Cup size");
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Push Up"
        )
      ) {
        errors.push("Personalization - Push up");
      }
      if (
        !chosenBikiniDetails.some(
          (element: any) => element.typeName === "Bottom Backs"
        )
      ) {
        errors.push("Personalization - Bottom Back");
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
        errors.push("Personalization - Back straps");
      }

      // form errors
      formData.forEach((field: any) => {
        if (field.obligatory == true && field.value.length == 0) {
          errors.push(`Details - ${field.name}`);
        }
      });
    }

    otherAttributes &&
      otherAttributes.forEach((attribute: any) => {
        if (!attribute.chosen) {
          errors.push(`${attribute.name}`);
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
            name: element.option.name,
            price_pln: element.option.price_pln,
            price_eur: element.option.price_eur,
          });
        });
      }
      const robeFontChosen = robeFont.find((font: any) => font.chosen != null);

      if (robeFontChosen) {
        let count = Math.ceil(robeText.length / 5);
        const addPrice = count * robeFontChosen.price_pln;
        personalization.push({
          type: "Robe font",
          name: robeFontChosen.name,
          price: addPrice,
        });

        personalization.push({
          type: "Robe text",
          name: robeText,
          price: "",
        });
      }

      const details = otherAttributes.map((att: any) => {
        return { name: capitalizeFirstLetter(att.name), value: att.chosen };
      });

      const formDetails =
        formData && formData.filter((oneData: any) => oneData.value.length > 0);

      const product = {
        id: myRandomId,
        strapiId: productData.id,
        image: productData.main_photo.data.attributes.url,
        name: productData.name,
        price: inTotal.toFixed(2),
        personalization: personalization ? personalization : null,
        details: details,
        formDetails: formDetails,
        bikiniCase: chosenBikiniCase ? chosenBikiniCase : null,
        additionalNotes: additionalNotes,
      };

      setSuccess(true);
      dispatch(addItem(product));
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
  console.log(productData);

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
                src={process.env.NEXT_PUBLIC_STRAPIBASEURL + mainPhotoSrc}
              />
              <StyledPhotoRow>
                {productData &&
                  [
                    productData.main_photo.data,
                    ...(Array.isArray(productData.photos.data)
                      ? productData.photos.data
                      : []),
                  ].map((image: any) => {
                    return (
                      <StyledSmallPhoto
                        onClick={() => setMainPhotoSrc(image.attributes.url)}
                        src={
                          process.env.NEXT_PUBLIC_STRAPIBASEURL +
                          image?.attributes?.url
                        }
                      />
                    );
                  })}
              </StyledPhotoRow>
            </StyledPhotos>

            <StyledInfo>
              <StyledType>
                {productData &&
                  productData.categories.data.map((cat: any) => {
                    return <StyledTypeOne>{cat.attributes.name}</StyledTypeOne>;
                  })}
              </StyledType>
              <StyledProductName>
                {productData && productData.name}
              </StyledProductName>
              <StyledPrize>
                {productData && Number(productData.price_pln).toFixed(2)} zł
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
                      processTextToHtml(productData.description)
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
                    Personalization*
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
                    Personalization
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
                    Details*
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

              {otherAttributes && (
                <>
                  {otherAttributes.map((attribute: any) => {
                    return (
                      <>
                        <StyledShowDetails
                          onClick={() => toggleShow(attribute.id)}
                        >
                          {capitalizeFirstLetter(attribute.name)}
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
                    Bikini case
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
                Additional notes
                <StyledShowDetailsArrow
                  open={toggleAdditionalNotes}
                  src={Arrow.src}
                />
              </StyledShowDetails>
              <StyledTextarea
                $display={toggleAdditionalNotes ? "block" : "none"}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Write here..."
              />
              <StyledInTotal>In total: {inTotal.toFixed(2)} zł</StyledInTotal>
              <BlackButton onClick={add} margin="10px 0 0">
                Add to Bag
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
      <Error showError={showError} setShowError={setShowError}>
        <StyledErrorTitle>
          Please complete the following fields:
        </StyledErrorTitle>
        {errors?.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
      <Success showSuccess={success} setShowSuccess={setSuccess}>
        <StyledSuccessTitle>Product added to cart!</StyledSuccessTitle>
      </Success>
    </StyledProductContainer>
  );
}
