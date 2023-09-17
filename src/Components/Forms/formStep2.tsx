import React from "react";
import Input from "../Input/input";
import MultiComponentInput from "../Input/multiColumnInput";
import Button from "../Button/button";
import Form from "../../Types/form";

const FormStepTwo: React.FC<Form> = ({ handleSubmit, job, handleChange }) => {
    return (
        <div>
            <div className="flex text-2xl justify-between items-center">
                <div>Create a Job</div>
                <div>Step 2</div>
            </div>
            <div className="my-6">
                <MultiComponentInput
                    label="Experience"
                    isRequired={false}
                    placeHolder1="minimum"
                    placeHolder2="maximum"
                    stateValue1="experience-min"
                    stateValue2="experience-max"
                    type="number"
                    value1={job.experience?.min || ""}
                    value2={job.experience?.max || ""}
                    handleInput={handleChange}
                />
            </div>
            <div className="my-6">
                <MultiComponentInput
                    label="Salary"
                    isRequired={false}
                    placeHolder1="minimum"
                    placeHolder2="maximum"
                    stateValue1="salary-min"
                    stateValue2="salary-max"
                    type="number"
                    value1={job.salary?.min || ""}
                    value2={job.salary?.max || ""}
                    handleInput={handleChange}
                />
            </div>
            <div className="my-6">
                <Input
                    stateValue="total-employee"
                    label="Total Employee"
                    isRequired={false}
                    placeHolder="ex. 100"
                    type="text"
                    value={job.totalEmployee || ""}
                    handleInput={handleChange}
                />
            </div>
            <div className="my-6">
                <div>
                    Apply Type
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <input className="mr-1" checked={job.applyType === "Quick Apply"} onChange={() => handleChange("apply-type", "Quick Apply")} type="radio" id="quick_apply" name="apply_type" value="Quick Apply" />
                        Quick Apply
                    </div>
                    <div>
                        <input className="mr-1" checked={job.applyType === "External Apply"} onChange={() => handleChange("apply-type", "External Apply")} type="radio" id="external_apply" name="apply_type" value="External Apply" />
                        External Apply
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-24">
                <Button bordered={false} title="Save" handleSubmit={() => handleSubmit(true)} />
            </div>
        </div>
    );
};

export default FormStepTwo;
