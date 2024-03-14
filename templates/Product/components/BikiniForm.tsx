import {
  StyledForm,
  StyledInputContainer,
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

  const updateItemValueById = (itemId: any, newValue: any) => {
    const updatedItems = formData.map((item: any) => {
      if (item.id === itemId) {
        return { ...item, value: newValue }; // Zaktualizuj wartość dla elementu o danym id
      }
      return item; // Zwróć element bez zmian, jeśli nie pasuje
    });

    setFormData(updatedItems); // Ustaw nową tablicę jako stan
  };

  return (
    <StyledForm $display={show ? "flex" : "none"}>
      {formData?.map((field: any, index: any) => (
        <>
          {field.input_photos ? (
            <StyledPhotoInputContainer key={index}>
              <InputIamges
                onChange={(photos: any) => {
                  updateItemValueById(field.id, photos);
                }}
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
