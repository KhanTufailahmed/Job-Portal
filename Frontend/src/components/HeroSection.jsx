import React, { use, useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse")
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002]">
          No-1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold mt-1">
          Search,Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p className="">
          Discover exciting job opportunities, connect with employers, and find
          the role that's meant for you—today.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-300 rounded-full pl-3 items-center gap-4 mx-auto h-10">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full "
          />
          <Button
            onClick={searchJobHandler}
            className={`rounded-r-full h-10 w-12 cursor-pointer bg-[#6A38C2]`}
          >
            <Search className="h-8 w-5"></Search>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
