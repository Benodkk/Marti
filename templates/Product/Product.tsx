import { useEffect, useState } from "react";
import {
  StyledAddToBagButton,
  StyledAddToWishlist,
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
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [detailsData, setDetailsData] = useState<any>();
  const [chosenBikiniCase, setChosenBikiniCase] = useState<any>();

  const [categories, setCategories] = useState<any>();

  const [braStyle, setBraStyle] = useState<any>();
  const [bikiniDetails, setBikiniDetails] = useState<any>();
  const [productionTime, setProductionTime] = useState<any>();
  const [etui, setEtui] = useState<any>();
  const [additionalNotes, setAdditionalNotes] = useState<any>();
  const [chosenProductionTime, setChosenProductionTime] = useState<any>();

  const [inTotal, setInTotal] = useState<number>(0);

  const myRandomId = uuidv4();

  const [loading, setLoading] = useState(false);

  // modal states

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<any>();

  // error

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<any>();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (router.query.product) {
      getProductData(Number(router.query.product));
    }
    getCat();
  }, [router.query]);

  useEffect(() => {
    let addPrice = 0;
    if (detailsData) {
      Object.values(detailsData).forEach((value: any) => {
        if (value.value) {
          addPrice += Number(value.value.price);
        }
      });
    }

    if (chosenProductionTime) {
      addPrice += Number(chosenProductionTime.price);
    }
    if (chosenBikiniCase) {
      addPrice += Number(chosenBikiniCase.price);
    }
    if (productData) {
      setInTotal(Number(productData?.price) + addPrice);
    }
  }, [detailsData, chosenProductionTime, chosenBikiniCase]);

  const getProductData = async (id: number) => {
    setLoading(true);
    try {
      const data: any = await getProductById(id);
      if (data) {
        // show details check
        setProductData(data);
        setInTotal(Number(data.price));
        setMainPhotoSrc(data.images[0].src);
        if (
          data.attributes?.some(
            (attribute: any) => attribute.name === "bikini-details"
          )
        ) {
          // set bikini details and bra style
          const newBikiniDetails = data.attributes?.find(
            (attribute: any) => attribute.name === "bikini-details"
          );
          if (newBikiniDetails) setBikiniDetails(newBikiniDetails.options[0]);

          const newBraStyle = data.attributes?.find(
            (attribute: any) => attribute.name === "bra-style"
          );
          if (newBraStyle) setBraStyle(newBraStyle.options[0]);

          const newProductionTime = data.attributes?.find(
            (attribute: any) => attribute.name === "production-time"
          );
          if (newProductionTime)
            setProductionTime(newProductionTime.options[0]);

          const newEtui = data.attributes?.find(
            (attribute: any) => attribute.name === "etui"
          );
          if (newEtui) setEtui("etui");
        }
      }
    } catch {
    } finally {
      setLoading(false);
    }
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

  const getCat = async () => {
    const categories: any = await getCategories();
    if (categories) {
      setCategories(categories);
    }
  };

  const add = () => {
    let errors = [];
    console.log(formData);

    if (!detailsData.braStyleType.value) {
      errors.push("Personalization - Bra style");
    }
    if (!detailsData.cupSizeType.value) {
      errors.push("Personalization - Cup size");
    }
    if (!detailsData.pushUpsType.value) {
      errors.push("Personalization - Push up");
    }
    if (!detailsData.bottonBacksType.value) {
      errors.push("Personalization - Bottom Back");
    }
    if (!detailsData.backStrapsType.value) {
      errors.push("Personalization - Back straps");
    } else if (detailsData.backStrapsType.value.slug == "connector") {
      if (!detailsData.backStrapsConnectorsType.value) {
        errors.push("Personalization - Back straps");
      }
    }
    if (!formData.Height || formData.Height.length < 0) {
      errors.push("Details - Height");
    }
    if (
      !formData["Bust Circumference"] ||
      formData["Bust Circumference"].length < 0
    ) {
      errors.push("Details - Bust Circumference");
    }
    if (
      !formData["Under Bust Circumference"] ||
      formData["Under Bust Circumference"].length < 0
    ) {
      errors.push("Details - Under Bust Circumference");
    }

    if (
      !formData["Waist (circumference)"] ||
      formData["Waist (circumference)"].length < 0
    ) {
      errors.push("Details - Waist (circumference)");
    }
    if (
      !formData["Buttock (circumference)"] ||
      formData["Buttock (circumference)"].length < 0
    ) {
      errors.push("Details - Buttock (circumference)");
    }
    if (!formData["Current Weight"] || formData["Current Weight"].length < 0) {
      errors.push("Details - Current Weight");
    }
    if (
      !formData["Weight on the Stage"] ||
      formData["Weight on the Stage"].length < 0
    ) {
      errors.push("Details - Weight on the Stage");
    }
    if (!chosenProductionTime) {
      errors.push("Production time");
    }

    if (errors.length > 0) {
      setShowError(true);
      setErrors(errors);
    } else {
      const perosonalizationArray = Object.values(detailsData);

      const personalization: any = [];
      perosonalizationArray.forEach((element: any) => {
        if (element.value) {
          personalization.push({
            type: element.name,
            name: element.value.name,
            price: element.value.price,
          });
        }
      });
      const details = Object.entries(formData).map(([name, value]) => ({
        name,
        value,
      }));

      const product = {
        id: myRandomId,
        wordpressId: productData.id,
        image: productData.images[0].src,
        name: productData.name,
        price: inTotal.toFixed(2),
        personalization: personalization,
        details: details,
        productionTime: chosenProductionTime,
        bikiniCase: chosenBikiniCase
          ? {
              name: chosenBikiniCase.name,
              price: chosenBikiniCase.price,
              id: chosenBikiniCase.id,
            }
          : null,
        additionalNotes: additionalNotes,
      };
      setSuccess(true);
      dispatch(addItem(product));
    }
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
              <StyledMainPhoto src={mainPhotoSrc} />
              <StyledPhotoRow>
                {productData &&
                  productData.images.map((image: any) => {
                    return (
                      <StyledSmallPhoto
                        onClick={() => setMainPhotoSrc(image.src)}
                        src={image.src}
                      />
                    );
                  })}
              </StyledPhotoRow>
            </StyledPhotos>
            <StyledInfo>
              <StyledType>
                {productData && productData.categories[0].name}
              </StyledType>
              <StyledProductName>
                {productData && productData.name}
              </StyledProductName>
              <StyledPrize>
                {productData && Number(productData.price).toFixed(2)} zł
              </StyledPrize>
              <StyledOpinionRow>
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
              </StyledOpinionRow>
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
                    categories={categories}
                    show={toggleShowDetails}
                    setDetailsData={setDetailsData}
                    braStyleName={braStyle}
                    bikiniDetailsName={bikiniDetails}
                    setModalContent={setModalContent}
                    setIsModalOpen={setIsModalOpen}
                    setModalTitle={setModalTitle}
                  />
                </>
              )}

              {/* Form Details  */}
              {bikiniDetails && (
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

              {/* production time */}

              {bikiniDetails && (
                <>
                  <StyledShowDetails
                    onClick={() =>
                      setToggleShowProductionTime(!toggleShowProductionTime)
                    }
                  >
                    Production time
                    <StyledShowDetailsArrow
                      open={toggleShowProductionTime}
                      src={Arrow.src}
                    />
                  </StyledShowDetails>{" "}
                  <ProductionTime
                    categories={categories}
                    productionTimeName={productionTime}
                    show={toggleShowProductionTime}
                    chosenProductionTime={chosenProductionTime}
                    setChosenProductionTime={setChosenProductionTime}
                  />
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
                    categories={categories}
                    bikiniCaseName={etui}
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

              {/* <StyledLabel>Color</StyledLabel>
          <StyledColorsRow>
            <StyledOneColorContainer $active={true}>
              <StyledOneColor $bgColor="black" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="red" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="green" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="yellow" />
            </StyledOneColorContainer>
          </StyledColorsRow>
          <StyledLabel>Size</StyledLabel>
          <StyledSizeContainer>
            <StyledOneSize $active={true}>Small</StyledOneSize>
            <StyledOneSize $active={false}>Medium</StyledOneSize>
            <StyledOneSize $active={false}>Large</StyledOneSize>
          </StyledSizeContainer>
          <StyledMoreInfo>Find the perfect size?</StyledMoreInfo>
          <StyledLabel>Personalization</StyledLabel>
          <StyledSizeContainer>
            <StyledOneSize $active={true}>Chain (+ 20zł)</StyledOneSize>
            <StyledOneSize $active={false}>Clasp</StyledOneSize>
          </StyledSizeContainer>
          <StyledMoreInfo>More about personalization</StyledMoreInfo> */}
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
