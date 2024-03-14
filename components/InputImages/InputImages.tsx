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

      const updatedFiles = [...files, ...Array.from(event.target.files)].slice(
        0,
        3
      );
      setFiles(updatedFiles);
      onChange(updatedFiles);
    }
  };

  const removeImage = (index: number) => {
    // onChange();
    // Usuń zdjęcie o podanym indeksie
    setFiles(files.filter((_: any, i: any) => i !== index));
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
