import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';


const EmployeeTypeDashboardCard = ({ employeeTypeCount}) => {

    const { companyEmployee, contractor } = employeeTypeCount;
    const total = companyEmployee + contractor;

    const calculatePercentage = (value) => {
        return (value / total) * 100;
    };

    return (
        <Card elevation={3}>
            <CardContent>
                <Typography variant="h6" style={{ marginBottom: '2rem' }}>Employment Type</Typography>
                <Box sx={{display:"flex", justifyContent:"center", gap:"1.76rem", alignItems:"center", padding:"1rem" , flexDirection:"column"}}>
                    <Box sx={{display:"flex", color:"white", marginLeft:"1rem"}}>
                        
                        <Typography variant="h3" style={{textAlign:"center", boxShadow: "0px 18.2259464263916px 35.641849517822266px 0px #FF996E66", borderRadius: '50%', padding:"1rem", background: "linear-gradient(180deg, #FF9A6E 34.38%, #FF524D 100%)",
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                                transform:'scale(1.3)',
                                zIndex: '1'}}>{companyEmployee}</Typography>
                        <Typography variant="h5" style={{ textAlign: 'center' , background: "linear-gradient(356.21deg, #6779B7 4.28%, #4B72FF 105.73%)",borderRadius: '50%', padding:"1rem",
                                width: '35px',
                                height: '35px',
                                objectFit: 'cover'}}>{contractor}</Typography>
                    </Box>
                    <Box sx={{flex:"2 0 50%"}}>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Box sx={{ width: 10, height: 10, borderRadius:"50%", background: "linear-gradient(180deg, #FF9A6E 34.38%, #FF524D 100%)", marginRight: 1 }} />
                            <Typography  style={{ textAlign: 'left',fontSize:"13px" }}>Company Employee</Typography>
                        </Box>

                        <Box sx={{display:"flex" ,alignItems:"center"}}>
                            <Box sx={{ width: 10, height: 10, borderRadius:"50%", background: "linear-gradient(356.21deg, #6779B7 4.28%, #4B72FF 105.73%)", marginRight: 1 }} />
                            <Typography  style={{ textAlign: 'left' , fontSize:"13px"}}>Contracter</Typography>
                        </Box>
                    </Box>
                    
                </Box>    
            </CardContent>
        </Card>
    );
}

export default EmployeeTypeDashboardCard;