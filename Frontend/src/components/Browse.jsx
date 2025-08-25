import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Job from "./Job";

const Browse = () => {
  const randomJobs = [1, 2, 3, 4];
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">Search Reasults ({randomJobs.length})</h1>
        {
          randomJobs.length <= 0 ? (
            <span>Job not Found</span>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {randomJobs.map((job) => (
                <div>
                  <Job></Job>
                </div>
              ))}
            </div>
          )
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Browse;
