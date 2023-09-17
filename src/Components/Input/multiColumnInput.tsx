import React from "react";
import MultiColumnInputType from "../../Types/multiColumnInput";

const MultiComponentInput: React.FC<MultiColumnInputType> = ({ label, handleInput,stateValue1, stateValue2 ,value1, value2, placeHolder1, placeHolder2, isRequired, type }) => {
    return (
        <div>
            <div>
                {label}{isRequired && <span className="text-red">*</span>}
            </div>
            <div className="flex w-full justify-between">
                <input
                    className="w-[calc(50%-0.75rem)] rounded-sm mt-1 px-1 py-0.5 border-border-grey border"
                    type={type}
                    onChange={ev => handleInput(stateValue1, ev.target.value)}
                    value={value1}
                    placeholder={placeHolder1}
                    pattern = {type === "number" ? "[0-9]*" : ""}
                />
                <input
                    className="w-[calc(50%-0.75rem)] rounded-sm mt-1 px-1 py-0.5 border-border-grey border"
                    type={type}
                    onChange={ev => handleInput(stateValue2, ev.target.value)}
                    value={value2}
                    placeholder={placeHolder2}
                    pattern = {type === "number" ? "[0-9]*" : ""}
                />
            </div>
        
        </div>
    );
};

export default MultiComponentInput;
