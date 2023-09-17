import Job from "./job";

interface Form {
    handleSubmit(ev: boolean): void;
    job: Job;
    handleChange(title: string, value: string | number): void;
    error?: boolean;
}

export default Form;