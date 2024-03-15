import React, { useState } from "react";
import {
  Container,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import EmployeeInformationForm from "./EmployeeInformationForm";
import JobDetailsForm from "./JobDetailForm";
import ReviewSubmit from "./ReviewSubmit";


const steps = ["Employee Information", "Job Details", "Review & Submit"];

export default function OnboardEmployee({ companyId, handleJobTypeSelection }) {
  // console.log(companyId);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    jobType: "employee",
    password: "123456",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  async function handleSubmit() {
    // Example on how to use the id
    const url = `http://localhost:3000/api/v1/companies/${companyId}/employees`;
    // const url =
    //   "http://localhost:3000/api/v1/companies/65e36965a51c67d7569b05a4/employees";
    try {
      const response = await fetch(url, {
        method: "POST", //
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // transfer form into JSON
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        alert(`You have successfully onboarded ${formData.name}`);
        handleJobTypeSelection(3);
      } else {
        const errorResponse = await response.json();
        console.error("Server responded with status:", response.status);
        alert(`Failed to onboard: ${errorResponse}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error during onboarding: " + error.message);
    }
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <EmployeeInformationForm
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return <JobDetailsForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <ReviewSubmit formData={formData} setFormData={setFormData} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <Container component="main" maxWidth="md">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "On-Board Employee" : "Continue"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
