import { Dispatch, SetStateAction, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledPhotoInputContainer,
} from "./BikiniDetails.styled";
import { Input } from "@/components/Input/Input";
import { InputIamges } from "@/components/InputImages/InputImages";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface BikiniFormProps {
  formData: any;
  setFormData: any;
  show: any;
}

export const BikiniForm = ({
  formData,
  setFormData,
  show,
}: BikiniFormProps) => {
  const language = useSelector(selectLanguage);
  const [images, setImages] = useState<any>([]);

  const updateItemValueById = (itemId: any, newValue: any) => {
    const updatedItems = formData.map((item: any) => {
      if (item.id === itemId) {
        return { ...item, value: newValue }; // Zaktualizuj wartość dla elementu o danym id
      }
      return item; // Zwróć element bez zmian, jeśli nie pasuje
    });

    setFormData(updatedItems); // Ustaw nową tablicę jako stan
  };

  const handleImageChange = (e: any) => {
    // Sprawdzanie czy liczba wybranych plików wraz z już wybranymi nie przekracza 4
    if (e.target.files.length + images.length > 4) {
      alert("Możesz wybrać maksymalnie 4 zdjęcia.");
      return;
    }

    // Aktualizacja stanu z wybranymi zdjęciami
    setImages([...images, ...Array.from(e.target.files)]);
  };

  return (
    <StyledForm $display={show ? "flex" : "none"}>
      {formData?.map((field: any, index: any) => (
        <>
          {field.input_photos ? (
            <StyledPhotoInputContainer key={index}>
              <InputIamges
                onChange={handleImageChange}
                label={
                  language == "pl" && field.name_pl ? field.name_pl : field.name
                }
              />
            </StyledPhotoInputContainer>
          ) : (
            <StyledInputContainer key={index}>
              {" "}
              <Input
                type={field.input_photos ? "text" : "text"}
                label={
                  language == "pl" && field.name_pl ? field.name_pl : field.name
                }
                value={field.value}
                onChange={(e: any) =>
                  updateItemValueById(field.id, e.target.value)
                }
                obligatory={field.obligatory}
              />
            </StyledInputContainer>
          )}
        </>
      ))}
    </StyledForm>
  );
};
