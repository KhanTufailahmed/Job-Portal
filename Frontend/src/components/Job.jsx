import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongoDbTime) => {
    const createdAt = new Date(mongoDbTime);
    const today = new Date();
    const timeDiff = today - createdAt;
    if (Math.floor(timeDiff / (1000 * 60 * 60 * 24)) === 0) {
      return "Today";
    } else if (Math.floor(timeDiff / (1000 * 60 * 60 * 24)) >= 30) {
      return "Month ago";
    } else {
      return `${Math.floor(timeDiff / (1000 * 60 * 60 * 24))} days ago`;
    }
  };
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job.createdAt)}{" "}
          
        </p>
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
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <Badge className={`text-blue-700 font-bold`} variant={`ghost`}>
          {job?.position} Positions
        </Badge>
        <Badge className={` text-[#F83002] font-bold`} variant={`ghost`}>
          {job?.jobType}
        </Badge>
        <Badge className={`text-[#6A38C2] font-bold`} variant={`ghost`}>
          {job?.salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => {
            navigate(`/description/${job?._id}`);
          }}
          variant={"outline"}
        >
          Details
        </Button>
        <Button className={`bg-[#6A38C2]`}>Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
