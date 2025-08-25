import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import React from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Thane", "Kolhapur", "Pune", "Nashik"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Dev", "Backend Dev", "App Dev", "Fullstack Dev"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1L", "1L-5L"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="my-2 "/>
      <RadioGroup>
        {filterData.map((item, index) => (
          <div>
            <h1 className="font-bold text-lg"> {item.filterType}</h1>
            {item.array.map((item, index) => (
              <div className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} />
                <Label>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
