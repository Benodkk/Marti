import { useState } from "react";
import {
  FormField,
  FormFieldPhoto,
  FormGroup,
  FormLabel,
  FormLabelPhoto,
  StyledError,
  StyledFiledCol,
  StyledFiledRow,
  StyledHoverButton,
} from "../helpers/Helpers.styled";
import { translation } from "@/translation";
import { selectLanguage } from "@/redux/languageSlice";
import { useSelector } from "react-redux";

interface InputIamgesProps {
  label: string;
  onChange: any;
}

export const InputIamges = ({ label, onChange }: InputIamgesProps) => {
  const [files, setFiles] = useState<any>([]);
  const language = useSelector(selectLanguage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // Dodaj nowe zdjęcia do istniejących, ale nie przekraczaj 3 zdjęć
      console.log(event.target.files);

      const updatedFiles = [...files, ...Array.from(event.target.files)].slice(
        0,
        3
      );
      setFiles(updatedFiles);
    }
  };

  const removeImage = (index: number) => {
    onChange();
    // Usuń zdjęcie o podanym indeksie
    // uploadImageToCloudinary(files[0]);
    // setFiles(files.filter((_: any, i: any) => i !== index));
    console.log(files);
  };

  const uploadImageToCloudinary = async (file: any) => {
    console.log(file);
    const be = URL.createObjectURL(file);
    console.log(be);
    const xd = process.env.CLOUDINARY_NAME;
    console.log(xd);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "cloud_name",
      typeof process.env.CLOUDINARY_NAME == "string"
        ? process.env.CLOUDINARY_NAME
        : ""
    ); // Musisz utworzyć preset przesyłania w panelu Cloudinary

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data; // Zwraca obiekt zawierający m.in. URL do przesłanego obrazu
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <FormGroup className="form__group field">
      <StyledFiledCol>
        {files.map((file: any, index: number) => (
          <StyledFiledRow key={index}>
            <div>{file.name}</div>
            <StyledHoverButton type="button" onClick={() => removeImage(index)}>
              {translation[language].delete}
            </StyledHoverButton>
          </StyledFiledRow>
        ))}
      </StyledFiledCol>

      {files.length < 3 ? (
        <>
          <FormFieldPhoto
            onChange={handleImageChange}
            type="file"
            accept="image/*"
            className="form__field"
            name={label}
            id={label}
          />
          <FormLabelPhoto htmlFor={label} className="form__label">
            {label}
          </FormLabelPhoto>
        </>
      ) : (
        <StyledError>Maks 3 photo</StyledError>
      )}
    </FormGroup>
  );
};
