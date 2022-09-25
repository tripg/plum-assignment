import * as React from "react";
import DropDownItem from "./DropDownItem";
import Select from "react-select";
import ValueContainer from "./ValueContainer";

const DropDown = ({ defaultValue, options, onChange }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      border: "2px solid #9AA5B6",
      borderRadius: "5px",
    }),
    option: (provided, state) => ({
      ...provided,
      background: "#FFFFFF",
      color: "#000",
      "&:hover": {
        background: "#F2F0ED",
      }
    }),
    input: (provided) => ({
      ...provided,
      background: "#FFFFFF",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "grey",
      background: "#FFFFFF",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#FFFFFF",
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
      backgroundColor: "#FFFFFF",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      background: "#FFFFFF",
    })
  }

  return (
    <Select
      placeholder={defaultValue}
      styles={customStyles}
      onChange={onChange}
      formatOptionLabel={DropDownItem}
      components={{
        ValueContainer: ValueContainer
      }}
      options={options}/>
  );
};

export default DropDown;
