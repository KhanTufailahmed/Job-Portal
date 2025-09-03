import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const allJobs = useSelector((state) => state.job.allJobs);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-5 max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard></FilterCard>
          </div>
          {allJobs.length <= 0 ? (
            <span>Job not Found</span>
          ) : (
            <div className="flex-1 h-[88hv] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.length <= 0 ? (
                  <span>Job not Found</span>
                ) : (
                  allJobs.map((job) => (
                    <div key={job._id}>
                      <Job job={job}></Job>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Jobs;
