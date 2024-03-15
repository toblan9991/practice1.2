import React, {useState} from "react";
import {
  Box,
  Drawer,
  Typography,
  InputLabel,
  Input,
  Button,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { BorderColorOutlined } from "@mui/icons-material";
import EmployeeAvatar from "./EmployeeAvatar";
import "../App.css";
import {editEmployee} from "../redux/employee/employeeSlice.js";

const EditBasicDetails = ({ selectedEmployee, open, onClose }) => {
  const [formData, setFormData] = useState(selectedEmployee);
  const handleSave= async () => {

    try {
      const url = `http://localhost:3000/api/v1/companies/${formData.companyId}/employees/${formData._id}`
      const response = await fetch(url, {
        method: "PUT", //
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // transfer form into JSON
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('jsonResponse', jsonResponse)
        console.log("Success:", jsonResponse);

        onClose()
      } else {
        console.error("Server responded with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }

  }
  return (
    <>
      {selectedEmployee && (
        <Drawer anchor="right" open={open} onClose={onClose}>
          <Stack
            width="30rem"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight={700} fontSize={20} variant="p">
                Edit Basic Details
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <EmployeeAvatar name={selectedEmployee.name} />
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ color: "#FA6432" }}
                aria-label="edit"
              >
                <BorderColorOutlined />
                <Typography sx={{ ml: 1 }}>Edit Picture</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "14px",
                  }}
                  htmlFor="add months"
                >
                  Employee Name
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.name}`}
                  onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                  }
                  sx={{
                    px: 1,
                    py: 0.4,
                    backgroundColor: "white",
                    border: "1px solid #CECED1",
                    borderRadius: 2,
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                      fontSize: "14px",
                      opacity: 0.7,
                    },
                  }}
                ></Input>
              </Stack>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "14px",
                  }}
                  htmlFor="add months"
                >
                  Employee Address
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.address}`}
                  onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                  }
                  sx={{
                    px: 1,
                    py: 0.4,
                    backgroundColor: "white",
                    border: "1px solid #CECED1",
                    borderRadius: 2,
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                      fontSize: "14px",
                      opacity: 0.7,
                    },
                  }}
                ></Input>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: 4,
                  justifyContent: "space-between",
                }}
              >
                <Stack width="50%">
                  <InputLabel
                    sx={{
                      color: "#84858C",
                      fontSize: "14px",
                    }}
                    htmlFor="add months"
                  >
                    Province
                  </InputLabel>
                  <Select
                      onChange={(e) => null
                          //setFormData({ ...formData, province: e.target.value })
                      }
                    autoWidth
                    sx={{
                      borderRadius: 2,
                      height: "2.5rem",

                      padding: 0,
                    }}
                  >
                    <MenuItem value={10}>BC</MenuItem>
                  </Select>
                </Stack>
                <Stack width="50%">
                  <InputLabel
                      onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                      }
                    sx={{
                      color: "#84858C",
                      fontSize: "14px",
                    }}
                    htmlFor="add months"
                  >
                    Country
                  </InputLabel>
                  <Select
                    autoWidth
                    sx={{
                      borderRadius: 2,
                      height: "2.5rem",
                    }}
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                  </Select>
                </Stack>
              </Box>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "14px",
                  }}
                  htmlFor="add months"
                >
                  Employee Email
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.email}`}
                  onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                  }
                  sx={{
                    px: 1,
                    py: 0.4,
                    backgroundColor: "white",
                    border: "1px solid #CECED1",
                    "& .MuiInputBase-input::placeholder": {
                      color: "black", 
                      fontSize: "14px",
                      opacity: 0.7, 
                    },

                    borderRadius: 2,
                  }}
                ></Input>
              </Stack>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "14px",
                  }}
                  htmlFor="add months"
                >
                  Employee Phone Number
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.phone}`}
                  onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                  }
                  sx={{
                    px: 1,
                    py: 0.4,
                    backgroundColor: "white",
                    border: "1px solid #CECED1",
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                      fontSize: "14px",
                      opacity: 0.7,
                    },

                    borderRadius: 2,
                  }}
                ></Input>
              </Stack>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "14px",
                  }}
                  htmlFor="add months"
                >
                  Education
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.education}`}
                  onChange={(e) =>
                      setFormData({ ...formData, education: e.target.value })
                  }
                  sx={{
                    px: 1,
                    py: 0.4,
                    backgroundColor: "white",
                    border: "1px solid #CECED1",
                    "& .MuiInputBase-input::placeholder": {
                      color: "black", 
                      fontSize: "14px",
                      opacity: 0.7,
                    },

                    borderRadius: 2,
                  }}
                />
              </Stack>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",

                width: "100%",
                bgcolor: "#f5f5f5",
                gap: 2,
                p: 4,
              }}
            >
              <Button
                sx={{
                  border: "1px solid black",
                  px: 2,
                  py: 1,
                  fontSize: "13px",
                  textTransform: "none",
                }}
                variant="inherent"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  bgcolor: "#FA6432",
                  color: "white",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  fontSize: "13px",
                }}
                variant="inherent"
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </Drawer>
      )}
    </>
  );
};

export default EditBasicDetails;
