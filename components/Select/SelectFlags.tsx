import Select from "react-select";
import { components } from "react-select";
interface SelectProps {
  options: any;
  defaultValue: any;
  handleChange: any;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    fontWeight: "700",
    border: "none",
    marginRight: "5px",
    cursor: "pointer",

    // Możesz też ustawić rozmiar fontu
  }),
  option: (provided: any) => ({
    ...provided,
    fontWeight: "700",
    cursor: "pointer",
  }),
  // Możesz dodać więcej dostosowań dla innych części komponentu, jeśli potrzebujesz
};

// Komponent opcji z obrazem
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <img
        src={props.data.image}
        alt={props.data.label}
        style={{ width: 20 }}
      />
    </components.Option>
  );
};
const SingleValue = ({ children, ...props }: any) => {
  return (
    <components.SingleValue
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={props.data.image}
        alt={props.data.label}
        style={{ width: 20, marginTop: 5 }}
      />
    </components.SingleValue>
  );
};

export const SelectValueFlags = ({
  options,
  defaultValue,
  handleChange,
}: SelectProps) => {
  return (
    <Select
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={handleChange}
      components={{ Option, SingleValue }}
    />
  );
};
