import { useEffect, useState } from "react";
import {
  StyledAdress,
  StyledAdressContainer,
  StyledAdressTitle,
  StyledInput,
  StyledOneAction,
  StyledOtherActions,
  StyledAdressButton,
  StyledAdressAdress,
  StyledBack,
  StyledForm,
  StyledWideItem,
} from "./Adress.styled";
import { useRouter } from "next/router";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { useDispatch } from "react-redux";
import { updateFormData } from "@/redux/formSlice";
import Error from "@/components/Error/Error";
import { StyledErrorTitle } from "@/components/Error/Error.styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import { changeAdress } from "@/API/strapiConfig";
import { useCookies } from "react-cookie";
import { selectEntireForm } from "@/redux/formSlice";

interface AdressProps {}
export default function Adress({}: AdressProps) {
  const personalData = useSelector(selectEntireForm);
  const [cookies] = useCookies(["jwt", "email", "id"]);
  const language = useSelector(selectLanguage);
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [showError, setShowError] = useState<any>(false);
  const [errors, setErrors] = useState<any>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(personalData.name);
    setSecondName(personalData.secondName);
    setStreet(personalData.street);
    setPostCode(personalData.postCode);
    setCountry(personalData.country);
    setPhone(personalData.phone);
    setCity(personalData.city);
    setEmail(personalData.email);
  }, [cookies, personalData]);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    // Obiekt zawierający wszystkie pola formularza
    const formData = {
      name: name,
      secondName: secondName,
      country: country,
      street: street,
      // additionalInfo: additionalInfo,
      postCode: postCode,
      city: city,
      phone: phone,
      email: email,
    };

    // Tablica, która będzie zawierać nazwy pustych pól
    let emptyFields = [];

    // Iteracja przez każde pole w obiekcie formData
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "additionalInfo") {
        if (!value) {
          // Jeśli wartość jest pusta, dodaj nazwę pola do tablicy emptyFields
          emptyFields.push(key);
        }
      }
    }

    if (emptyFields.length === 0) {
      // Jeśli nie ma pustych pól, wyślij dane
      dispatch(updateFormData(formData));
      console.log(cookies);

      await changeAdress(
        name,
        secondName,
        country,
        street,
        postCode,
        city,
        phone,
        cookies.id,
        cookies.jwt
      );

      router.push("/Summary");
    } else {
      // Jeśli są puste pola, ustaw stan błędu i zwróć tablicę z nazwami pustych pól
      setShowError(true);
      setErrors(emptyFields);
    }
  };

  return (
    <StyledAdressContainer>
      <Error showError={showError} setShowError={setShowError}>
        <StyledErrorTitle>
          {translation[language].completeFields}
        </StyledErrorTitle>
        {errors.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
      <StyledAdress>
        <StyledAdressAdress>
          <StyledBack
            onClick={() => router.back()}
          >{`< ${translation[language].back}`}</StyledBack>
          <StyledAdressTitle>
            {translation[language].addresTitle}
          </StyledAdressTitle>
          <StyledForm onSubmit={handleLogin}>
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              label={translation[language].firstName}
            />
            <Input
              type="text"
              value={secondName}
              onChange={(e: any) => setSecondName(e.target.value)}
              label={translation[language].lastName}
            />
            <Input
              type="text"
              value={country}
              onChange={(e: any) => setCountry(e.target.value)}
              label={translation[language].country}
            />
            <Input
              type="text"
              value={street}
              onChange={(e: any) => setStreet(e.target.value)}
              label={translation[language].street}
            />

            <Input
              type="text"
              value={postCode}
              onChange={(e: any) => setPostCode(e.target.value)}
              label={translation[language].postCode}
            />
            <Input
              type="text"
              value={city}
              onChange={(e: any) => setCity(e.target.value)}
              label={translation[language].city}
            />
            <Input
              type="text"
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)}
              label={translation[language].phoneNumber}
            />
            <Input
              type="text"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              label={"Email"}
            />
            {/* <Input
              type="text"
              value={additionalInfo}
              onChange={(e: any) => setadditionalInfo(e.target.value)}
              label={translation[language].additionalInfoOptional}
            /> */}
            <StyledWideItem>
              <BlackButton margin={"16px 0"} type="submit">
                {translation[language].save}
              </BlackButton>
            </StyledWideItem>
          </StyledForm>
        </StyledAdressAdress>
      </StyledAdress>
    </StyledAdressContainer>
  );
}
