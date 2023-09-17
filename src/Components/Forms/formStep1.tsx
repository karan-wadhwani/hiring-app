import React from "react";
import Input from "../Input/input";
import Button from "../Button/button";
import Form from "../../Types/form";

const FormStepOne: React.FC<Form> = ({handleSubmit, job, handleChange, error}) => {
  return (
    <div>
        <div className="flex text-2xl justify-between items-center">
            <div>Create a Job</div>
            <div>Step 1</div>
        </div>
        <div className="my-6">
            <Input
                label="Job Title"
                stateValue="job-title"
                isRequired={true}
                placeHolder="ex. UX UI Designer"
                type="text"
                value={job.jobTitle}
                handleInput={handleChange}
                error={error}
            />
        </div>
        <div className="my-6">
            <Input
                label="Company Name"
                stateValue="company-name"
                isRequired={true}
                placeHolder="ex. Google"
                type="text"
                value={job.companyName}
                handleInput={handleChange}
                error={error}
            />
        </div>
        <div className="my-6">
            <Input
                label="Industry"
                stateValue="industry"
                isRequired={true}
                placeHolder="ex. Information Technology"
                type="text"
                value={job.industry}
                handleInput={handleChange}
                error={error}
            />
        </div>
        <div className="flex w-full justify-between my-6">
            <div className="w-[calc(50%-0.75rem)]">
            <Input
                label="Location"
                stateValue="location"
                isRequired={false}
                placeHolder="ex. Chennai"
                type="text"
                value={job.location || ""}
                handleInput={handleChange}
                error={error}
            />
            </div>
            <div className="w-[calc(50%-0.75rem)]">
            <Input
                stateValue="remote-type"
                label="Remote Type"
                isRequired={false}
                placeHolder="ex. In-office"
                type="text"
                value={job.locationType || ""}
                handleInput={handleChange}
                error={error}
            />
            </div>
        </div>
        <div className="flex justify-end mt-24">
            <Button bordered={false} title="Next" handleSubmit={() => handleSubmit(false)}/>
        </div>
    </div>
  );
};

export default FormStepOne;
