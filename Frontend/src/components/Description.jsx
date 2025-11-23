import React, {  useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const Description = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const singleJob = useSelector((state) => state.job.singleJob);

  const params = useParams();
  const jobId = params.id;

  const checkIfApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) ?? false;
  const [isApplied, setIsApplied] = useState(checkIfApplied);
  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
          ));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJobs();
  }, [jobId, user?._id,dispatch]);
  // const isApplied = false;

  // const isApplied = singleJob?.applications?.length ?? 0.some(
  //   (application) => application.user === user?._id
  // );

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setIsApplied(true); //update the local state
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob)); //update the global state
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="max-w-7xl mx-auto
      my-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex gap-2 mt-2">
              <Badge className={`text-blue-700 font-bold`} variant={`ghost`}>
                {singleJob?.position} Positions
              </Badge>
              <Badge className={` text-[#F83002] font-bold`} variant={`ghost`}>
                {singleJob?.jobType}
              </Badge>
              <Badge className={`text-[#6A38C2] font-bold`} variant={`ghost`}>
                {singleJob?.salary}
              </Badge>
            </div>
          </div>
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#6A38C2] cursor-pointer hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium my-4">
          Job Describtion
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.title}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.location}{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Description:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.description}{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.experience} Years{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.salary}{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.createdAt.split("T")[0]}{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              {singleJob?.applications.length}{" "}
            </span>
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Description;
