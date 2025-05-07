import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
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
          <h1 className="font-bold text-xl mb-5">Login</h1>
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

          <div className="my-2">
            <div className="my-1">
              <Label>Password</Label>
            </div>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your Full Name"
            ></Input>
          </div>
          <div className="flex items-center justify-between py-2">
            <RadioGroup className={`flex items-center justify-between`}>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  value="student"
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  value="recruiter"
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center">
            <Button type="submit" className={` w-full cursor-pointer`}>
              Login{" "}
            </Button>
          </div>
          <span className="text-sm ">
            Don't have an account?
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
