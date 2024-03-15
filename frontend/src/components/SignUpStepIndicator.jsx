import React from 'react';
import { Stepper, Step, StepLabel, StepConnector,useTheme,useMediaQuery } from '@mui/material';



const SignUpStepIndicator = ({ steps, activeStep }) => {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  

  return (

  <Stepper activeStep={activeStep} alternativeLabel sx={{
    margin: "2rem", 
  }}>
    {steps.map((label, index) => (
      (!isMobile || index === activeStep) && (
        <Step key={label} sx={{ margin: "auto" }} completed={isMobile ? index < activeStep : index < activeStep}>
          <StepLabel sx={{
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: "center",
            // alignItems: "flex-start",
            '& .MuiStepLabel-label': { 
              fontSize: isMobile ? '0.875rem' : '1rem',
              whiteSpace: 'nowrap',
            },
          }}>
            {label}
          </StepLabel>
        </Step>
      )
    ))}
  </Stepper>

  )

}; 

export default SignUpStepIndicator;



