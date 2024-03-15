import React , {useState} from "react";
import {TextField,InputLabel, Button , Box, InputAdornment, IconButton} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { validateEmail, passwordHelperText} from "../utils/validator";



export default function SignUpAccount({formData, setFormData, next}){
    
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({}); 

    const validateEmail = (email) => {
        // email regex pattern for validation
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };
    
    
    const passwordHelperText = () => {
        if (errors.password) return errors.password;
        if (!formData.password) return "Password is required.";
        if (formData.password.length < 8) return "Password must be at least 8 characters.";
        if (!/\d/.test(formData.password)) return "Password must include a number.";
        if (!/[!@#$%^&*]/.test(formData.password)) return "Password must include a special character.";
        return "Password meets requirements.";
    };
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!validateEmail(formData.email)) tempErrors.email = "Email is not valid";
        if (!formData.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleNext = () => {
        if (validateForm()) {
            next();

        }
    };


    return(
        <>
            <Box sx={{display : "flex", flexDirection: "column", margin:"auto", width:"70%"}}>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <TextField
                    error={Boolean(errors.name)} 
                    helperText = {errors.name || "Please enter your name."}
                    id= "name-input"
                    name = "name"
                    value = {formData.name}
                    onChange = {handleChange}
                />
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <TextField
                    error={Boolean(errors.email)}
                    helperText={errors.email || 'Please enter a valid email.'}
                    id = "email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <TextField
                    error={Boolean(errors.password)}
                    id="password-input"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    helperText={passwordHelperText()}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                
                <Button onClick = {handleNext} sx={{color:"primary", margin: "auto", width:"50%" ,marginTop:"1rem"}} variant="contained">
                    Continue
                </Button>
                       
            </Box>
        </>
    )
}