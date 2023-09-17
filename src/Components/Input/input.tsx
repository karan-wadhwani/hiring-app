import React from "react";
import InputType from "../../Types/input";

const Input: React.FC<InputType> = ({ label, handleInput, value, placeHolder, isRequired, type, stateValue, error }) => {
  
  return (
    <div>
      <div>
        {label}{isRequired && <span className="text-red">*</span>}
      </div>
      <input
        className="w-full rounded-sm mt-1 px-1 py-0.5 border-border-grey border"
        required={isRequired}
        type={type}
        onChange={ev => handleInput(stateValue, ev.target.value)}
        value={value}
        placeholder={placeHolder}
        pattern = {type === "number" ? "[0-9]*" : ""} 
      />
      {(error && (value === "") && isRequired) && <div className="text-red text-xs">This field is required.</div>}
    </div>
  );
};

export default Input;
