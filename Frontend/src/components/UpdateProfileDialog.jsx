import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullname: user.fullname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    bio: user.profile.bio,
    skills: user.profile.skills.map((skill) => skill),
    // skills: user?.profile?.skills?.join(", ") || "",
    file: user.profile.resume,
  });

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file: file });
  };
  const changeEventListener = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills); // Send the raw string instead of JSON
    if (input.file) {
      formData.append("file", input.file);
    }
    
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className={`text-right`}>
                  Name
                </Label>
                <Input
                  id="fullname"
                  value={input.fullname}
                  name="fullname"
                  type={"text"}
                  onChange={changeEventListener}
                  className="col-span-3"
                  placeholder="Name"
                ></Input>
                <Label htmlFor="email" className={`text-right`}>
                  Email
                </Label>
                <Input
                  id="email"
                  value={input.email}
                  type={"email"}
                  name="email"
                  onChange={changeEventListener}
                  className="col-span-3"
                  placeholder="Email"
                ></Input>
                <Label htmlFor="phoneNumber" className={`text-right`}>
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventListener}
                  className="col-span-3"
                  placeholder="Number"
                ></Input>
                <Label htmlFor="bio" className={`text-right`}>
                  Bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  name="bio"
                  onChange={changeEventListener}
                  className="col-span-3"
                  placeholder="Bio"
                ></Input>
                <Label htmlFor="skills" className={`text-right`}>
                  Skills
                </Label>
                <Input
                  id="skills"
                  value={input.skills}
                  name="skills"
                  onChange={changeEventListener}
                  className="col-span-3"
                  placeholder="Skills"
                ></Input>
                <Label htmlFor="file" className={`text-right`}>
                  Resume
                </Label>
                <Input
                  id="file"
                  onChange={changeFileHandler}
                  name="file"
                  type={"file"}
                  accept="application/pdf"
                  className="col-span-3"
                  placeholder="Resume"
                ></Input>
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className={`w-full`}>
                  <Loader2 className="mr-2 h-4 w-full animate-spin"> </Loader2>{" "}
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className={` w-full cursor-pointer`}>
                  Update{" "}
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
