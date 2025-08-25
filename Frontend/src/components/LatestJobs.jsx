import React from "react";
import LatestJobCard from "./LatestJobCard";

const jobs = ["1", "2", "3", "4", "5", "6", "7", "8"];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20  ">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          <span className="text-[#6A38C2]">Latest & Top</span> Job Opening
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-5">
        {jobs.slice(0, 6).map((job) => (
          <LatestJobCard></LatestJobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
