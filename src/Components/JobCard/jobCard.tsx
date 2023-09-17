import React from "react";
import { LiaEditSolid, LiaTrashAlt } from "react-icons/lia";
import Button from "../Button/button";
import logo from "../../Assets/Netflix-Symbol.png";
import JobCardType from "../../Types/jobCard";

const JobCard: React.FC<JobCardType> = ({job, handleDeleteClick, handleEditClick}) => {
  return (
    <div className="lg:w-[calc(50%-3rem)] w-full my-6 mx-4 self-stretch">
      <div className="flex py-4 px-6 rounded-lg border-border-grey border bg-white relative h-full">
      <div className="absolute top-2 right-2">
        <button className="mr-4" onClick={() => handleEditClick(job)}>
          <LiaEditSolid size="30px"/>
        </button>
        <button>
          <LiaTrashAlt size="30px" onClick={() => handleDeleteClick(job?.id)}/>
        </button>
      </div>
      <div>
        <div className="bg-black w-14 h-14 rounded-lg overflow-hidden">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="ml-2 flex flex-col justify-between">
        <div>
          <div className="text-3xl">{job.jobTitle}</div>
          <div className="text-lg">{job.companyName} {job.industry ? `- ${job.industry}` : ""}</div>
          <div className="text-lg text-gray">{job.location} {job?.locationType && <span>({job?.locationType})</span>}</div>
          <div className="my-6">
            <div className="my-2 text-lg">Part (Time 9.00 am - 5.00 pm IST)</div>
            <div className="my-2 text-lg">Experience 
              {job?.experience?.min || job?.experience?.max ?
                <span> ({job?.experience?.min} 
                      {job?.experience?.min && job?.experience?.max ? "-" : ""} {job?.experience?.max} years)</span> : " - NA"}
            </div>
            <div className="my-2 text-lg">INR (&#8377;) 
              {(job?.salary?.min || job?.salary?.max) ? <span> {job?.salary?.min} - {job?.salary?.max} / Month</span> : " - NA"}
            </div>
            <div className="my-2 text-lg">{job?.totalEmployee ? job?.totalEmployee : ""} Employees</div>
          </div>
        </div>
        <div>
          {job?.applyType === "Quick Apply" ? <Button bordered={false} title="Apply Now"></Button> : <Button bordered={true} title="External Apply"></Button>}
        </div>
        </div>
    </div>  
    </div>
  );
};

export default JobCard;
