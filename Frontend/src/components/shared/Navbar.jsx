import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { setAllAdminJobs, setAllJobs, setSingleJob } from "@/redux/jobSlice";
import { setAllCompanies, setSingleCompany } from "@/redux/companySlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        dispatch(setAllJobs([]));
        dispatch(setSingleJob(null));
        dispatch(setAllAdminJobs([]));
        dispatch(setSingleCompany(null));
        dispatch(setAllCompanies([]));
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white border-md border-gray-400 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl font-bold">
            Job<span className=" text-[#F83082]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-5 font-medium justify-content-end">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  {" "}
                  <Link to={"/admin/companies"}> Companies</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/admin/jobs"}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link to={"/"}> Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
                <li>
                  <Link to={"/browse"}>Browse</Link>
                </li>
              </>
            )}
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
                <Avatar className={`cursor-pointer w-10 h-10`}>
                  <AvatarImage src={user.profile.profilePhoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className={`w-80 m-4`}>
                <div>
                  <div className="flex space-y-2 gap-4">
                    <Avatar className={`cursor-pointer h-10 w-10`}>
                      <AvatarImage
                        src={user.profile.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user.profile.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 ">
                    {user && user.role === "student" ? (
                      <>
                        <div className="flex items-center w-fit cursor-pointer gap-2">
                          <User2></User2>
                          <Link to={`/profile`}>
                            {" "}
                            <Button variant="link">View Profile</Button>
                          </Link>
                        </div>
                        <div className="flex items-center w-fit cursor-pointer gap-2">
                          <LogOut></LogOut>
                          <Button variant="link" onClick={logOut}>
                            Logout
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center w-fit cursor-pointer gap-2">
                          <LogOut></LogOut>
                          <Button variant="link" onClick={logOut}>
                            Logout
                          </Button>
                        </div>
                      </>
                    )}
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
