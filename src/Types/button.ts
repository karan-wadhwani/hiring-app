interface ButtonType {
    title: string;
    handleSubmit?(e: React.MouseEvent<HTMLButtonElement>): void;
    bordered: boolean;
}

export default ButtonType;