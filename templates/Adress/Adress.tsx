import { useState } from "react";
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

interface AdressProps {}
export default function Adress({}: AdressProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [showError, setShowError] = useState<any>(false);
  const [errors, setErrors] = useState<any>([]);

  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Obiekt zawierający wszystkie pola formularza
    const formData = {
      name: name,
      secondName: secondName,
      street: street,
      additionalInfo: additionalInfo,
      postCode: postCode,
      city: city,
      phone: phone,
      country: country,
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
          Please complete the following fields:
        </StyledErrorTitle>
        {errors.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
      <StyledAdress>
        <StyledAdressAdress>
          <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
          <StyledAdressTitle>Adress and contact info</StyledAdressTitle>
          <StyledForm onSubmit={handleLogin}>
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              label="Name"
            />
            <Input
              type="text"
              value={secondName}
              onChange={(e: any) => setSecondName(e.target.value)}
              label="Second Name"
            />
            <Input
              type="text"
              value={country}
              onChange={(e: any) => setCountry(e.target.value)}
              label="Country"
            />
            <Input
              type="text"
              value={street}
              onChange={(e: any) => setStreet(e.target.value)}
              label="Street"
            />

            <Input
              type="text"
              value={postCode}
              onChange={(e: any) => setPostCode(e.target.value)}
              label="Post code"
            />
            <Input
              type="text"
              value={city}
              onChange={(e: any) => setCity(e.target.value)}
              label="City"
            />
            <Input
              type="text"
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)}
              label="Phone number"
            />
            <Input
              type="text"
              value={additionalInfo}
              onChange={(e: any) => setadditionalInfo(e.target.value)}
              label="Additional Info (optional)"
            />
            <StyledWideItem>
              <BlackButton margin={"16px 0"} type="submit">
                Save
              </BlackButton>
            </StyledWideItem>
          </StyledForm>
        </StyledAdressAdress>
      </StyledAdress>
    </StyledAdressContainer>
  );
}
