import React from "react";
import ButtonType from "../../Types/button";

const Button: React.FC<ButtonType> = ({ title, handleSubmit, bordered }) => {
  return (
    <button
      type="button"
      className={bordered ? "bg-white border-blue border-2 text-blue px-4 py-2 rounded-md" : "bg-blue px-4 py-2 border-blue border-2 rounded-md text-white"}
      onClick={handleSubmit}
    >
      {title}
    </button>
  )
};

export default Button;
