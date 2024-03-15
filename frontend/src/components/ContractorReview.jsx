import React, { useState, useMemo } from "react";
import { Typography, Grid, Paper, Button, TextField } from "@mui/material";

const DisplayFormData = ({ formData, setFormData }) => {
  const dataToDisplay = useMemo(() => {
    return [
      { label: "Employee Name", value: formData.name, name: "name" },
      { label: "Employee Address", value: formData.address, name: "address" },
      { label: "Employee Email", value: formData.email, name: "email" },
      { label: "Employee Phone Number", value: formData.phone, name: "phone" },
      { label: "Education", value: formData.education, name: "education" },
      { label: "Job Duties", value: formData.jobTitle, name: "jobTitle" },
      {
        label: "Assign Department",
        value: formData.department,
        name: "department",
      },
      { label: "Contractor SIN Number", value: formData.sin, name: "sin" },
      {
        label: "Manager's Name",
        value: formData.managerName,
        name: "managerName",
      },
      {
        label: "Manager's Email",
        value: formData.managerEmail,
        name: "managerEmail",
      },
      {
        label: "Contractor Duration",
        value: formData.duration,
        name: "duration",
      },
      { label: "Job Start Date", value: formData.startDate, name: "startDate" },
      {
        label: "Salary Pay Period",
        value: formData.payPeriod,
        name: "payPeriod",
      },
      { label: "Salary Annual", value: formData.salary, name: "salary" },
    ];
  }, [formData]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Paper style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
      <Typography variant="h5" gutterBottom component="div" align="center">
        Employee Summary
        <Button
          variant="contained"
          onClick={handleEditToggle}
          style={{ position: "relative", right: -240, top: 0 }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Typography>

      <Grid container spacing={2}>
        {dataToDisplay.map((item, index) => (
          <Grid item xs={12} container key={index}>
            <Grid item xs={6}>
              <Typography align="left">{item.label}</Typography>
            </Grid>
            <Grid item xs={6}>
              {isEditing ? (
                <TextField
                  align="right"
                  fullWidth
                  name={item.name}
                  value={item.value}
                  onChange={(e) => handleChange(e, item.name)}
                />
              ) : (
                <Typography align="right">{item.value}</Typography>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default DisplayFormData;
