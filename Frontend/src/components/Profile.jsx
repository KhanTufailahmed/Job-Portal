import React, { use, useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "./ui/button";

import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs(); 
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const skills = ["React", "Next", "Tailwind", "Node", "MongoDB", "Express"];
  const isResume = true;
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className={`w-24 h-24`}>
              <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className={`curson-pointer`}
            variant={`outline`}
          >
            <Pen></Pen>
          </Button>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-3 my-2">
            <Mail></Mail>
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact></Contact>
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          {user?.profile?.skills?.length != 0 ? (
            user?.profile?.skills?.map((item, index) => (
              <Badge className={`m-1`} key={index}>
                {item}
              </Badge>
            ))
          ) : (
            <span>No Skills</span>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>No Resume</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable></AppliedJobsTable>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}></UpdateProfileDialog>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
