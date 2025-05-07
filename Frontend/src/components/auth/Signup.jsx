import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
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
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <div className="my-1">
              <Label>Full Name</Label>
            </div>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your Full Name"
            ></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label>Email</Label>
            </div>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@gmail.com"
            ></Input>
          </div>
          {/* <div className="my-2">
            <div className="my-1">
              <Label></Label>
            </div>
            <Input type="text"  placeholder="Enter your Full Name"></Input>
          </div> */}
          <div className="my-2">
            <div className="my-1">
              <Label>Phone Number</Label>
            </div>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your Phone Number"
            ></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label>Password</Label>
            </div>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your Password"
            ></Input>
          </div>
          <div className="flex items-center justify-between py-2">
            <RadioGroup className={`flex items-center justify-between`}>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
                accept="image/*"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Button type="submit" className={` w-full cursor-pointer`}>
              Signup{" "}
            </Button>
          </div>
          <span className="text-sm ">
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
