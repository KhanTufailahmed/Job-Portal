import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { JOB_API_END_POINT } from "@/utils/constant";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const PostJob = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const allCompany = useSelector((state) => state.company.allCompanies);
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirement: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const selectChangeHandler = (value) => {
    const selectedCompany = allCompany.find(
      (company) => company.name.toLowerCase() === value.toLowerCase()
    );
    setInput({ ...input, companyId: selectedCompany?._id });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center w-screen my-5">
        <form
          className="p-8  border border-gray-200 shadow-lg rounded-md"
          onSubmit={submitHandler}
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                type={`text`}
                name="title"
                value={input?.title}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type={`text`}
                name="description"
                value={input?.description}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Requirement</Label>
              <Input
                type={`text`}
                name="requirement"
                value={input?.requirement}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type={`text`}
                name="salary"
                value={input?.salary}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type={`text`}
                name="location"
                value={input?.location}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type={`text`}
                name="jobType"
                value={input?.jobType}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type={`text`}
                name="experience"
                value={input?.experience}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
            <div>
              <Label>No of Position</Label>
              <Input
                type={`number`}
                name="position"
                value={input?.position}
                onChange={changeEventHandler}
                className={`focus-visible:ring-offset-0 focus-visible:righ-0 my-1`}
              ></Input>
            </div>
          </div>
          <div className="flex items-center justify-center my-4">
            {allCompany.length > 0 && (
              <Select onValueChange={selectChangeHandler}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {allCompany.map((company) => (
                      <SelectItem key={company?._id} value={company?.name}>
                        {company?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
          {loading ? (
            <Button className={`w-full`}>
              <Loader2 className="mr-2 h-4 w-full animate-spin"> </Loader2>{" "}
              Please wait
            </Button>
          ) : (
            <Button type="submit" className={` w-full cursor-pointer`}>
              Post New JOb{" "}
            </Button>
          )}
          {allCompany.length === 0 && (
            <p className="text-red-500 text-xs font-bold my-3 text-center">
              *Please Register First Before posting a job
            </p>
          )}
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PostJob;
