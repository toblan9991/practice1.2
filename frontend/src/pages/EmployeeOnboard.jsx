import React from "react";
import MainArea from "../components/MainArea";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import EmployeeOnboardTable from "../components/EmployeeOnboardTable";
import Onboard from "../components/Onboard";
import { Navigate } from "react-router-dom";

const EmployeeOnboard = () => {
  const { currentCompany, loading, error } = useSelector(
    (state) => state.company
  );
  // formdata state [formData, setFormData]
  // [currentStep, setCurrentStep] = useState('select-type');

  const { _id } = currentCompany || {};

  return currentCompany ? (
    <Box>
      {/* <EmployOnboardForm companyId={_id} /> */}
      <Onboard companyId={_id} />
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default EmployeeOnboard;
