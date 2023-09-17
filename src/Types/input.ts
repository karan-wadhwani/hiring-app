interface InputType {
    handleInput(title: string, ev: string | number): void;
    value?: string | number;
    placeHolder?: string;
    isRequired?: boolean;
    type: string;
    label: string;
    stateValue: string;
    error?: boolean;
}

export default InputType;
