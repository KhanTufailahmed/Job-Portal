import React, { use, useEffect } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const allJobs = useSelector((state) => state.job.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Reasults ({allJobs.length})
        </h1>
        {allJobs.length <= 0 ? (
          <span>Job not Found</span>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => (
              <div key={job._id}>
                <Job job={job}></Job>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Browse;
