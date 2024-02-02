import { Dispatch, SetStateAction, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from "./BikiniDetails.styled";
import { Input } from "@/components/Input/Input";

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
  formData: {
    [key: string]: string;
  };
  setFormData: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
  show: any;
}

export const BikiniForm = ({
  formData,
  setFormData,
  show,
}: BikiniFormProps) => {
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledForm $display={show ? "flex" : "none"}>
      {formPoles.map((field, index) => (
        <StyledInputContainer key={index}>
          <Input
            type={field.type}
            label={field.name}
            value={formData[field.name] || ""}
            onChange={handleInputChange}
          />
        </StyledInputContainer>
      ))}
    </StyledForm>
  );
};
