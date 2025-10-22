import React from "react";
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
import { Check, Cross, MoreHorizontal, X } from "lucide-react";
import { useSelector } from "react-redux";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const applicants = useSelector((state) => state.application.applicants);
  console.log("this is from redux", applicants.applications);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={`text-right`}>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants?.applications?.map((item, index) => (
            <tr key={item._id}>
              <TableCell>{item?.applicant?.fullname}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phoneNumber}</TableCell>
              <TableCell>
                {item?.applicant?.profile?.resumeOriginalName ? (
                  <a
                    className={`text-blue-400`}
                    href={item?.applicant?.profile?.resume}
                    target="_blank"
                  >
                    {item?.applicant?.profile.resumeOriginalName}
                  </a>
                ) : (
                  <span>NA</span>
                )}
              </TableCell>
              <TableCell>{item?.applicant?.createdAt?.split("T")[0]}</TableCell>
              <TableCell className={"text-right"}>
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal className="cursor-pointer"></MoreHorizontal>
                  </PopoverTrigger>
                  <PopoverContent className={`w-25`}>
                    {shortlistingStatus.map((status, index) => (
                      <div
                        key={index}
                        className="flex w-fit items-center mt-1 cursor-poniter"
                      >
                        <span className="cursor-pointer ">
                          {status === "Accepted" ? (
                            <div className="flex items-center gap-1 text-green-500">
                              Accept{" "}
                              <span>
                                <Check className="w-5"></Check>
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-red-500">
                              Reject{" "}
                              <span>
                                <X className="w-5"></X>
                              </span>
                            </div>
                          )}
                        </span>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
