import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import { setSearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className={`w-fit`}
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button
            onClick={() => {
              navigate("/admin/jobs/create");
            }}
          >
            New Jobs
          </Button>
        </div>
        <AdminJobsTable></AdminJobsTable>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminJobs;
