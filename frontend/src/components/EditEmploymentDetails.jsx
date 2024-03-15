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

const EditEmploymentDetails = ({ selectedEmployee, open, onClose }) => {
  const [formData, setFormData] = useState(selectedEmployee);
  //console.log('formData', formData)
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
            }}
          >
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight={700} fontSize={20} variant="p">
                Employee Details
              </Typography>
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
                  sx={{
                    color: "#84858C",
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Employment Status
                </InputLabel>
                <Select
                  sx={{
                    borderRadius: 2,
                    height: "2.5rem",
                  }}
                  value={formData.status}
                >
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
              </Stack>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Job Title
                </InputLabel>
                <Input
                  disableUnderline
                  variant="inherent"
                  value={`${formData.jobTitle}`}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                }
                  sx={{
                    px: 1,
                    py: 0.4,
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
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
              }
                  sx={{
                    color: "#84858C",
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Assign Department
                </InputLabel>
                <Select
                  autoWidth
                  sx={{
                    borderRadius: 2,
                    height: "2.5rem",
                  }}
                >
                  <MenuItem>Sweeping</MenuItem>åååå
                </Select>
              </Stack>
              <Stack>
                <InputLabel
                  variant="inherent"
                  sx={{
                    color: "#84858C",
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Employee SIN Number
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.sin}`}
                  onChange={(e) =>
                    setFormData({ ...formData, sin: e.target.value })
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
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Managers Name
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.managerName}`}
                  onChange={(e) =>
                    setFormData({ ...formData, managerName: e.target.value })
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
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Manager's Email
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.managerEmail}`}
                  onChange={(e) =>
                    setFormData({ ...formData, managerEmail: e.target.value })
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
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Job Start Date
                </InputLabel>
                <Input
                  disableUnderline
                  value={`${formData.startDate}`}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
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
                    fontSize: "13px",
                  }}
                  htmlFor="add months"
                >
                  Salary Annual
                </InputLabel>
                <Input
                  disableUnderline
                  value={`CAD ${formData.salary}`}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
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

export default EditEmploymentDetails;
