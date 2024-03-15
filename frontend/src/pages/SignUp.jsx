import React, {useState} from "react";
import {Box} from "@mui/material";
import SignUpAccount from "./../components/SignUpAccout";
import SignpDepartmemtInfo from "../components/SignUpDepartmentInfo";
import SignUpCompanyInfo from "../components/SignUpCompanyInfo";
import SignUpStepIndicator from "../components/SignUpStepIndicator";
import SignUpFormTitle from "../components/SignUpFormTitle";

export default function SignUp() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    name: '',
    address: '',
    size: '',
    phone: '',
    website: '',
    departments: ''
  })

  const [activeStep, setActiveStep] = useState(0);

  const formSteps = [
    { title: 'Setup Account', subtitle: 'One HRMS solution for all Cleaning agencies ' },
    { title: 'Setup Your Company', subtitle: 'Add your company details' },
    { title: 'Add Departments', subtitle: 'These departments are basically the areas your company work or give cleaning services.' },
  ];

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  
  
  const renderForm = () => {
    
    switch(activeStep){
      case 0 : 
      return < SignUpAccount formData={formData} setFormData={setFormData} next={nextStep}/>

      case 1 : 
      return <SignUpCompanyInfo formData={formData} setFormData={setFormData} next={nextStep} previous={prevStep}/>

      case 2 :
      return <SignpDepartmemtInfo formData={formData} setFormData={setFormData} next={nextStep}/>
      
      default :
      return <>Signup Complete!</>
    }

    
  }


  return <Box>
  
      {formSteps[activeStep] && (
        <SignUpFormTitle
          title={formSteps[activeStep].title}
          subtitle={formSteps[activeStep].subtitle}
        />
      )}
        <SignUpStepIndicator steps={formSteps.map((step) => step.title)} activeStep={activeStep} />
        {renderForm()}
    
    </Box>
}
