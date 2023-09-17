interface MultiColumnInputType {
    handleInput(title: string, ev: string | number): void;
    value1: string | number;
    value2: string | number;
    placeHolder1: string;
    placeHolder2: string;
    isRequired: boolean;
    type: string;
    label: string;
    stateValue1: string;
    stateValue2: string;
}

export default MultiColumnInputType;
