import Job from "./job";

interface JobCardType {
    job: Job;
    handleEditClick(ev: Job): void;
    handleDeleteClick(ev?: number): void;
}

export default JobCardType;
