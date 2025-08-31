import { createSlice } from "@reduxjs/toolkit";
import { Search } from "lucide-react";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    showSingleCompany: null,
    allCompanies: [],
    SearchCompanyByText: "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setAllCompanies: (state, action) => {
      state.allCompanies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.SearchCompanyByText = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
  },
});

export const { setSingleCompany, setAllCompanies, setSearchCompanyByText } =
  companySlice.actions;
export default companySlice.reducer;
