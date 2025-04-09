import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <div className="my-1">
              <Label>Full Name</Label>
            </div>
            <Input type="text" placeholder="Enter your Full Name"></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label>Email</Label>
            </div>
            <Input type="email" placeholder="example@gmail.com"></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label></Label>
            </div>
            <Input type="text" placeholder="Enter your Full Name"></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label>Phone Number</Label>
            </div>
            <Input type="text" placeholder="Enter your Full Name"></Input>
          </div>
          <div className="my-2">
            <div className="my-1">
              <Label>Password</Label>
            </div>
            <Input type="password" placeholder="Enter your Full Name"></Input>
          </div>
          <div className="flex items-center justify-between py-2">
            <RadioGroup className={`flex items-center justify-between`}>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  value="student"
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type={`radio`}
                  name="role"
                  value="recruiter"
                  className={`cursor-pointer`}
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input type="file" className="cursor-pointer" accept="image/*" />
            </div>
          </ div>
          <div className="flex items-center">
            <Button type="submit" className={` w-full`}>Signup </Button>
          </div>
          <span className='text-sm '>Already have an account?<Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Signup
