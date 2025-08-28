import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";


const Job = () => {
  const jobId="fwefewffw"
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant={"outline"} className={"rounded-full"} size={"icon"}>
          <Bookmark></Bookmark>
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className={`p-6`} variant={"outline"} size={`icon`}>
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-50">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          modi.
        </p>
      </div>
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
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => {navigate(`/description/${jobId}`)}} variant={"outline"}>Details</Button>
        <Button className={`bg-[#6A38C2]`}>Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
