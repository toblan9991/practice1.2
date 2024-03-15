import React, { useState } from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import EmployeeOnboardTable from "./EmployeeOnboardTable";
import JobTypeSelection from "./JobTypeSelection";
import EmployOnboardForm from "./EmployOnboardForm";
import ContractorOnboardForm from "./ContractorOnboardForm";
export default function Onboard({ companyId }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleJobTypeSelection = (step) => {
    setCurrentStep(step);
    // setShowJobTypeSelection(false);
  };

  return (
    <Container style={{ backgroundColor: "#F4F5F7", padding: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        mb={2}
        style={{
          paddingBottom: "20px",
          borderBottom: currentStep === 0 ? "none" : "1px solid #E0E0E0",
        }}
      >
        {/* Displaying heading based on currentStep */}
        <div>
          {currentStep === 1 ? (
            <>
              <Typography variant="h4" gutterBottom>
                Onboard New Employee
              </Typography>
              <Typography variant="body1">
                Fill all the required fields to complete employee onboarding
              </Typography>
            </>
          ) : currentStep === 2 ? (
            <>
              <Typography variant="h4" gutterBottom>
                Onboard New Contractor
              </Typography>
              <Typography variant="body1">
                Fill all the required fields to complete contractor onboarding
              </Typography>
            </>
          ) : (
            currentStep === 3 && (
              <>
                <Typography variant="h4" gutterBottom>
                  On-Board Employee
                </Typography>
                <Typography variant="body1">
                  Discover your team easily with our simple and accessible
                  Employee Directory
                </Typography>
              </>
            )
          )}
        </div>
        {currentStep === 3 && (
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={() => handleJobTypeSelection(0)}
          >
            Onboard New Employees
          </Button>
        )}
      </Box>
      {/* Conditionally render components based on state */}
      {currentStep === 0 && (
        <JobTypeSelection handleJobTypeSelection={handleJobTypeSelection} />
      )}
      {currentStep === 1 && (
        <EmployOnboardForm
          handleJobTypeSelection={handleJobTypeSelection}
          companyId={companyId}
        />
      )}
      {currentStep === 2 && (
        <ContractorOnboardForm
          handleJobTypeSelection={handleJobTypeSelection}
          companyId={companyId}
        />
      )}
      {currentStep === 3 && <EmployeeOnboardTable companyId={companyId} />}
    </Container>
  );
}
