import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Description = () => {
  const isApplied = true;
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="max-w-7xl mx-auto
      my-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Fullstack Developer</h1>
            <div className="flex gap-2 mt-2">
              <Badge className={`text-blue-700 font-bold`} variant={`ghost`}>
                4 Positions
              </Badge>
              <Badge className={` text-[#F83002] font-bold`} variant={`ghost`}>
                Part Time
              </Badge>
              <Badge className={`text-[#6A38C2] font-bold`} variant={`ghost`}>
                12LPA
              </Badge>
            </div>
          </div>
          <Button
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
              Full Stack Developer
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="pl-4 font-normal text-gray-800"> Mumbai </span>
          </h1>
          <h1 className="font-bold my-1">
            Description:
            <span className="pl-4 font-normal text-gray-800">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              sint repellendus et dolorum veniam placeat!{" "}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="pl-4 font-normal text-gray-800"> 2 Years </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="pl-4 font-normal text-gray-800"> 12LPA </span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:
            <span className="pl-4 font-normal text-gray-800"> 10-10-2023 </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:
            <span className="pl-4 font-normal text-gray-800"> 4 </span>
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Description;
