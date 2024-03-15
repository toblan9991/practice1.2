import React , {useState} from "react";
import {TextField,InputLabel, Button,Box,Typography} from "@mui/material";
import {useDispatch} from 'react-redux';
export default function SignUpCompanyInfo({formData, setFormData, next , previous}){
    const [errors, setErrors] = useState({}); 

    const dispatch = useDispatch();
    
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Company name is required";
        if (!formData.address) tempErrors.address = "Company address is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; 
    };

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext= () =>{
        if (validateForm()) {
            next();
        }
    }

    const handlePrevious = () => {
        previous();
    }

    return (
        <>
        <Box sx={{display : "flex", flexDirection: "column", margin:"auto", width:"70%"}}>
            <InputLabel htmlFor="companyname-input">Company Name</InputLabel>
            <TextField
                id = "companyname-input"
                name = "name"
                value = {formData.name}
                onChange = {handleChange}
                required
            />
            <InputLabel htmlFor="companyaddress-input">Company Address</InputLabel>
            <TextField
                id = "companyaddress-input"
                name = "address"
                value = {formData.address}
                onChange = {handleChange}
                required
            />
            <InputLabel htmlFor="companysize-input">Company Size</InputLabel>
            <TextField
                id=" companysize-input"
                name = "size"
                value = {formData.size}
                onChange = {handleChange}
            />
            <InputLabel htmlFor="companyphone-input">Company Phone</InputLabel>
            <TextField
                id="companyphone-input"
                name = "phone"
                value = {formData.phone}
                onChange = {handleChange}
            />
            <InputLabel htmlFor="companywebsite-input">Website</InputLabel>
            <TextField
                id= "companywebsite-input"
                name = "website"
                value = {formData.website}
                onChange = {handleChange}
                required
            />
            <Button onClick = {handleNext} variant="contained" sx={{margin:"auto", width:"50%", marginTop:"1rem", marginBottom:"1rem"}}>
                Continue
            </Button>
            <Button onClick = {handlePrevious}  sx={{ marginTop:"1rem",margin:"auto", width:"50%"}} variant="outlined">
                Back
            </Button>
        </Box>


        </>
    )

    
}