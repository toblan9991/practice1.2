import React from 'react';
import { Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';


export default function FormTitle ({ title, subtitle , onClick}){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate  = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>

      <IconButton onClick={handleBack} aria-label="back" sx={{position:"relative"}}>
        <ArrowBackIcon sx={{position:"absolute",  left: isMobile? "4rem" : "9rem", top: isMobile? "2rem": "3rem" }}/>
      </IconButton>
      {title && (
        <Typography variant="h5" component="h2" gutterBottom sx={{textAlign:"center"}}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="subtitle1" sx={{textAlign:"center"}}>
          {subtitle}
        </Typography>
      )}
    </>
  );
};