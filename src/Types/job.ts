interface Job {
    id?: number,
    createdAt?: Date,
    jobTitle: string,
    companyName: string,
    industry: string,
    location?: string | null,
    locationType?: string | null,
    experience: {
        min?: number | null,
        max?: number | null
    },
    salary: {
        min?: number | null,
        max?: number | null
    },
    totalEmployee?: number | null,
    applyType?: string | null
}

export default Job;