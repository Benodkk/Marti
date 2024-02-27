import Select from "react-select";

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

export const SelectValue = ({
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
    />
  );
};
