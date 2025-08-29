import React from "react";
import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.job.allJobs);
  return (
    <div className="max-w-7xl mx-auto my-20  ">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? <span>Job not Found</span> : allJobs.slice(0, 6).map((job) => (
          <LatestJobCard key={job._id} job={job}></LatestJobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
