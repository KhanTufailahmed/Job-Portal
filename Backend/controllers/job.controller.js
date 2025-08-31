import Company from "../models/company.model.js";
import Job from "../models/job.model.js";
//admin post the job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      jobType,
      companyId,
      location,
      experience,
      position,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !jobType ||
      !companyId ||
      !location ||
      !experience ||
      !position
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: "true",
      });
    }
    const job = await Job.create({
      title: title,
      description: description,
      requirement: requirement.split(","),
      salary: Number(salary),
      jobType: jobType,
      experience: experience,
      location:location,
      position: position,
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      message: "New job created successfully",
      job: job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//for student
export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({path:"company"});//well we can use as as populate we want (as many objectId present in the model)
    if (!jobs) {
      return res.status(404).json({
        message: "Job not Found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs: jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//for student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate({ path: "company" })
      .populate({ path: "applications" });
    if (!jobId) {
      return res.status(404).json({
        message: "No Job found",
        success: false,
      });
    }

    return res.status(200).json({
      job: job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//job posted by the admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({path:"company"});

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: "true",
      });
    }

    return res.status(200).json({
      jobs: jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
