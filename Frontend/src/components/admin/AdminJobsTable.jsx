import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";

const AdminJobsTable = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();

  const allAdminJobs = useSelector((state) => state.job.allAdminJobs);
  const searchJobByText = useSelector((state) => state.company.searchJobByText);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  useEffect(() => {
    console.log(allAdminJobs)
    const filteredJob = allAdminJobs?.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return job.name
        .toLowerCase()
        .includes(searchJobByText.toLowerCase());
    });
    setFilterJobs(filteredJob);
  }, [allAdminJobs, searchJobByText]);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={`text-right`}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs?.lenght <= 0 ? (
            <span>You have not registered any company yet</span>
          ) : (
            filterJobs?.map((job) => (
              <tr key={job._id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>

                <TableCell className={`text-right `}>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer"></MoreHorizontal>
                    </PopoverTrigger>
                    <PopoverContent className={`w-32`}>
                      <div
                        className="flex items-center gap-2 w-fit cursor-pointer"
                        onClick={() => {
                          navigate(`/admin/companies/${company._id}`);
                        }}
                      >
                        <Edit2 className="w-4"></Edit2>
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
//
