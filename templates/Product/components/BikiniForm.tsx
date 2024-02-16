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

const formPoles = [
  { name: "Height", label: "Height*", type: "text" },
  { name: "Bust Circumference", label: "Bust Circumference*", type: "text" },
  {
    name: "Under Bust Circumference",
    label: "Under Bust Circumference*",
    type: "text",
  },
  {
    name: "Waist (circumference)",
    label: "Waist (circumference)*",
    type: "text",
  },
  {
    name: "Buttock (circumference)",
    label: "Buttock (circumference)*",
    type: "text",
  },
  { name: "Current Weight", label: "Current Weight*", type: "text" },
  { name: "Weight on the Stage", label: "Weight on the Stage*", type: "text" },
  { name: "Show Date", label: "Show Date", type: "text" },
  { name: "Insagram nick name", label: "Insagram nick name", type: "text" },
];

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
              <InputIamges onChange={handleImageChange} label={field.name} />
            </StyledPhotoInputContainer>
          ) : (
            <StyledInputContainer key={index}>
              {" "}
              <Input
                type={field.input_photos ? "text" : "text"}
                label={field.name}
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
