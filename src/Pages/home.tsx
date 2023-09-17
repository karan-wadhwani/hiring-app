import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../constant";
import Header from "../Components/Header/header";
import JobCard from "../Components/JobCard/jobCard";
import Modal from "../Components/Modal/modal";
import NoDataFound from "../Components/NoDataFound/noDataFound";
import FormStepOne from "../Components/Forms/formStep1";
import FormStepTwo from "../Components/Forms/formStep2";
import Job from "../Types/job";

const Home: React.FC = () => {
  const deafaultJobValue: Job = {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    locationType: "",
    experience: {
        min: null,
        max: null
    },
    salary: {
        min: null,
        max: null
    },
    totalEmployee: null,
    applyType: ""
  }
  const [job, setJob] = useState<Job>({} as Job);
  const [allJobs, setAllJobs] = useState([]);
  const [createJobToggle, handleCreateJobToggle] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<string>("step-1");
  const [error, setError] = useState<boolean>(false);

  const getAllJobs = () => {
    axios.get(`${base_url}/jobs`).catch(err => err.response).then(response => {
      setAllJobs(response.data);
    })
  }

  useEffect(() => {
    getAllJobs();
  }, [createJobToggle]);

  const handleDeleteJob = (id: number) => {
    axios.delete(`${base_url}/jobs/${id}`).catch(err => err.response).then(response => {
      alert("Job deleted successfully");
      getAllJobs();
    })
  }

  const handleEditJob = (editJob: Job) => {
    setJob(editJob);
    handleCreateJobToggle(true);
  }

  const handleFormButtonClick = (isFinalStep: boolean) => {
    if (error) {
      setError(job.jobTitle !== "" && job.companyName !== "" && job.industry !== "")
    } else {
      if (!isFinalStep) {
        if (job.jobTitle !== "" && job.companyName !== "" && job.industry !== "") {
          setCurrentStep("step-2");
          setError(false);
        } else {
          setError(true);
        }
      } else if (job.id) {
        axios.put(`${base_url}/jobs/${job.id}`, job).catch(err => err.response).then(response => {
          handleCreateJobToggle(false);
          alert("Job Updated successfully");
        })
      } else {
        axios.post(`${base_url}/jobs`, job).catch(err => err.response).then(response => {
          handleCreateJobToggle(false);
          setCurrentStep("step-1")
          alert("Job Added successfully");
        })
      }
    }
  };

  const handleModalClose = () => {
    setError(false);
    handleCreateJobToggle(false);
  };

  const handleCreateJobClick = () => {
    handleCreateJobToggle(true);
    setError(false);
    setJob(deafaultJobValue);
  }

  const handleChange = (title: string, value: string | number) => {
    const jobValues: Job = {...job};
    setError(false);
    switch(title) {
      case "job-title":
        jobValues.jobTitle = value as string;
        break;
      case "company-name":
        jobValues.companyName = value as string;
        break;
      case "industry":
        jobValues.industry = value as string;
        break;
      case "location":
        jobValues.location = value as string;
        break;
      case "remote-type":
        jobValues.locationType = value as string;
        break;
      case "experience-min":
        jobValues.experience.min = value as number;
        break;
      case "experience-max":
        jobValues.experience.max = value as number;
        break;
      case "salary-min":
        jobValues.salary.min = value as number;
        break;
      case "salary-max":
        jobValues.salary.max = value as number;
        break;
      case "total-employee":
        jobValues.totalEmployee = value as number;
        break;
      case "apply-type":
        jobValues.applyType = value as string;
        break;
      default:
        break;
    }
    setJob(jobValues);
  }

  return (
    <div className={`bg-light-grey h-screen relative relative ${createJobToggle ? "overflow-y-hidden" : "overflow-y-auto"}`}>
      {createJobToggle && (
        <Modal onModalClose={handleModalClose}>
          {currentStep === "step-1"
            ? <FormStepOne handleSubmit={handleFormButtonClick} job={job} error={error} handleChange={handleChange}/>
            : <FormStepTwo job={job} handleSubmit={handleFormButtonClick} handleChange={handleChange}/>
          }
        </Modal>
      )}
      <Header handleToggle={handleCreateJobClick} toggle={createJobToggle} />
      <div className="w-10/12 m-auto flex flex-wrap mt-12 justify-evenly">
        {allJobs?.length > 0
          ? allJobs?.map((obj: Job) => {
            return (
              <JobCard
                job={obj}
                handleDeleteClick={handleDeleteJob}
                handleEditClick={handleEditJob}
              />
            )
          })
          : <NoDataFound handleCreateAJob={handleCreateJobClick}/>}
      </div>
    </div>
  );
};

export default Home;
