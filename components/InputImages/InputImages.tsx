import {
  FormField,
  FormFieldPhoto,
  FormGroup,
  FormLabel,
  FormLabelPhoto,
} from "../helpers/Helpers.styled";

interface InputIamgesProps {
  label: string;
  value?: any;
  onChange: any;
}

export const InputIamges = ({ label, value, onChange }: InputIamgesProps) => {
  return (
    <FormGroup className="form__group field">
      <FormFieldPhoto
        onChange={onChange}
        type="file"
        accept="image/*"
        multiple
        className="form__field"
        name={label}
        id={label}
      />
      {/* Umieszczenie tekstu labela wewnątrz FormLabelPhoto */}
      <FormLabelPhoto htmlFor={label} className="form__label">
        {label}
      </FormLabelPhoto>
    </FormGroup>
  );
};
