import {
  FormNoLabelField,
  FormNoLabelGroup,
  FormLabel,
} from "../helpers/Helpers.styled";

interface NoLabelInputProps {
  name: string;
  value: any;
  onChange: any;
}

export const NoLabelInput = ({ name, value, onChange }: NoLabelInputProps) => {
  return (
    <FormNoLabelGroup className="form__group field">
      <FormNoLabelField
        value={value}
        onChange={onChange}
        type="number"
        className="form__field"
        name={name}
        id={name}
      />
    </FormNoLabelGroup>
  );
};
