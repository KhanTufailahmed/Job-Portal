import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobsTable = () => {
  const appliedJobs = useSelector((state) => state.job.allAppliedJobs);
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length <= 0 ? (
            <span>You have not applied any job yet</span>
          ) : (
            appliedJobs.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item.createdAt.split("T")[0]}</TableCell>
                <TableCell>{item?.job?.title}</TableCell>
                <TableCell>{item?.job?.company?.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      item?.status === "rejected"
                        ? "bg-red-400"
                        : item?.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {item?.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
