import { FormField, FormGroup, FormLabel } from "../helpers/Helpers.styled";

interface InputProps {
  label: string;
  value: any;
  onChange: any;
  type: any;
  obligatory?: boolean;
}

export const Input = ({
  label,
  value,
  onChange,
  type,
  obligatory,
}: InputProps) => {
  return (
    <FormGroup className="form__group field">
      <FormField
        value={value}
        onChange={onChange}
        type={type}
        className="form__field"
        placeholder={label}
        name={label}
        id={label}
      />
      <FormLabel htmlFor={label} className="form__label">
        {label + `${obligatory ? "*" : ""}`}
      </FormLabel>
    </FormGroup>
  );
};
