import React from "react";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 35,
  height: 35,
  borderRadius: "100%",
  overflow:'hidden'

}));

const EmployeeImage = ({ img }) => {
 
  return (
    <StyledAvatar>
      <img style={{objectFit:'cover' , width:'100%'}} src={img} alt="avatar" />
    </StyledAvatar>
  );
};

export default EmployeeImage;
