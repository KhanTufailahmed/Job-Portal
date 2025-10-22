import React, { use, useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";

const Applicants = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const applicants = useSelector((state) => state.application.applicants);
  console.log("this is",applicants);
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${jobId}/applicants`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applications {applicants?.applications?.length}
        </h1>
        <ApplicantsTable></ApplicantsTable>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Applicants;
