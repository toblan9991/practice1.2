import React , {useState} from "react";
import {TextField, Button, Box, Icon, IconButton ,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import useFetch from "../hooks/useFetch";
export default function SignpDepartmemtInfo({formData, setFormData}){
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [departments, setDepartments] = useState([""]);
    const options = {
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
    }
    const {data, isLoading, error, fetchData} = useFetch("/api/v1/companies", "POST", options);


    const handleAddDepartment = () => {
        setDepartments([...departments, ""]);
    };
    

    const handleChange = (index, event) => {
        const newDepartments = departments.map((dept, i) => i === index ? event.target.value : dept);
        setDepartments(newDepartments);
        setFormData({ ...formData, departments: newDepartments });
    };

    const handleRemoveDepartment = (index) => {
        const newDepartments = departments.filter((_, i) => i !== index);
        setDepartments(newDepartments);
        setFormData({ ...formData, departments: newDepartments });
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       await fetchData();
       if(!error && !isLoading){
        setOpen(true);
       }
        console.log(formData); 
        // try {
        //   const res = await fetch("/api/v1/companies", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        //   });

        //   if (res.ok) {
        //     setOpen(true);
        //   }else {
        //     console.error('Failed to sign up:', res.statusText);
        //   }
    
        //   const data = await res.json();
        
        // } catch (err) {
        //   console.log(err);
        // }
    };

    const handleClose = () => {
        setOpen(false);
        navigate("/login");
    };

    
    const handlePrevious = () => {
        previous();
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>

        <Box sx={{margin:"auto", width:"70%"}}>
        <form onSubmit={handleSubmit} sx={{display : "flex", flexDirection: "column", gap:"1rem"}}>
                    {departments.map((department, index) => (
                        <Box key={index}>
                            <TextField
                                id={`department-${index}`}
                                name="departments"
                                label={`Department Name ${index + 1}`}
                                value={department}
                                onChange={(event) => handleChange(index, event)}
                                fullWidth
                            />
                            {departments.length > 1 && ( 
                                <IconButton onClick={() => handleRemoveDepartment(index)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                            )}
                        </Box>
                    ))}
                    <Button startIcon={<AddCircleOutlineIcon />} onClick={handleAddDepartment} sx={{alignSelf:"flex-start"}}>
                        Add more department
                    </Button>
                    <Button type="submit" sx={{ marginTop:"1rem",margin:"auto", width:"50%",display: "block"}} variant="contained">
                        Sign up
                    </Button>
                    
                </form>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Signup Successful!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You have successfully set up your company. You are now ready to use the app.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Launch App
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
        </>
    )
    }