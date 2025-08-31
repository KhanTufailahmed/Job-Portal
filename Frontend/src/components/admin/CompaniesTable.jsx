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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  useGetAllCompanies();
  const navigate = useNavigate();

  const companies = useSelector((state) => state.company.allCompanies);
  const searchCompanyByText = useSelector(
    (state) => state.company.SearchCompanyByText
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(() => {
    const filteredCompany = companies.filter((company) => {
      if (!searchCompanyByText) {
        return true;
      }
      return company.name
        .toLowerCase()
        .includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);
  return (
    <div>
      <Table>
        <TableCaption>A list of your Regsitered Compinies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className={`text-right`}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.lenght <= 0 ? (
            <span>You have not registered any company yet</span>
          ) : (
            companies.map((company) => (
              <tr key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company.logo}></AvatarImage>
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell>{company.location}</TableCell>

                <TableCell className={`text-right `}>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer"></MoreHorizontal>
                    </PopoverTrigger>
                    <PopoverContent className={`w-32`}>
                      <div className="flex items-center gap-2 w-fit cursor-pointer" onClick={() => {navigate(`/admin/companies/${company._id}`)}}>
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

export default CompaniesTable;
//
