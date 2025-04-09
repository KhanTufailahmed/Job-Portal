import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  let user = false;
  return (
    <div className="bg-white border-md border-gray-400 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className=" text-[#F83082]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-5 font-medium justify-content-end">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}>
                <Button variant="outline" className={`cursor-pointer`}>
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  variant="outline"
                  className={` cursor-pointer bg-[#6A38C2] hover:bg-[#5b30a6]`}
                >
                  Sigup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className={`cursor-pointer`}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className={`w-80 m-4`}>
                <div>
                  <div className="flex space-y-2 gap-4">
                    <Avatar className={`cursor-pointer`}>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Tufail Ahmed Khan</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 ">
                    <div className="flex items-center w-fit cursor-pointer gap-2">
                      <User2></User2>
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex items-center w-fit cursor-pointer gap-2">
                      <LogOut></LogOut>
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
