import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BusinessCenter,
  BorderColorOutlined,
  ArrowBackIosNewRounded,
  Feed,
} from "@mui/icons-material";
import EditBasicDetails from "../components/EditBasicDetails";
import EditEmploymentDetails from "../components/EditEmploymentDetails";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id: employeeId } = useParams();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [openBasicEditModal, setOpenBasicEditModal] = useState(false);
  const [openEmploymentEditModal, setOpenEmploymentEditModal] = useState(false);
  const [currentDetail, setCurrentDetail] = useState("employee-details");

  const { currentCompany } = useSelector((state) => state.company);
  const { _id: companyId } = currentCompany || {};

  useEffect(() => {
    const asyncFn = async () => {
      try {
        const url = `http://localhost:3000/api/v1/companies/${companyId}/employees/${employeeId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log("jsonResponse", jsonResponse);
          setSelectedEmployee(jsonResponse);
        } else {
          console.error("Server responded with status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    asyncFn();
  }, [openBasicEditModal, openEmploymentEditModal]);

  return currentCompany ? (
    <>
      {selectedEmployee && (
        <Box
          sx={{
            bgcolor: "#F4F5F7",
            height: "90vh",
            width: "98%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: 3,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Stack sx={{ pl: 8 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {selectedEmployee.name}
              </Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: "light", fontSize: "13px", color: "#98999B" }}
              >
                {selectedEmployee.country}
              </Typography>
            </Stack>
            <Button
              onClick={() => navigate("/employee-offboard")}
              sx={{
                color: "black",
                border: "1.5px solid black",

                fontSize: "13px",
                px: 2,
                py: 1,
              }}
            >
              Off-Board Employee
            </Button>
            <IconButton
              sx={{
                position: "absolute",
                top: 5,
                left: 10,
              }}
              onClick={() => navigate("/team-directory")}
            >
              <ArrowBackIosNewRounded
                sx={{ color: "black", width: "1rem", height: "1rem" }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: 3,
              alignItems: "center",
              borderBottom: "0.9px solid grey",
              position: "relative",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setCurrentDetail("employee-details")}
            >
              <Typography sx={{ fontSize: "15px" }} component="span">
                Employee Overview
              </Typography>

              {currentDetail === "employee-details" && (
                <Box
                  sx={{
                    height: "2px",
                    width: "8rem",
                    bgcolor: "black",
                    position: "absolute",
                    bottom: -1.5,
                    left: 2,
                  }}
                ></Box>
              )}
            </Box>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setCurrentDetail("employee-documents")}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  color:
                    currentDetail === "employee-details" ? "#98999B" : "black",
                  component: "span",
                }}
              >
                Documents
              </Typography>

              {currentDetail === "employee-documents" && (
                <Box
                  sx={{
                    height: "2px",
                    width: "8rem",
                    bgcolor: "black",
                    position: "absolute",
                    bottom: -1.5,
                    left: "10rem",
                  }}
                ></Box>
              )}
            </Box>
          </Box>
          {currentDetail === "employee-details" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: "white",
                  p: 2,
                  flex: 1,
                  height: "34.5rem",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    background: `radial-gradient(circle at center, 
                    #708FFF 0%, 
                    #6C82FF 20%, 
                    #647BEF 40%, 
                    #5C74DF 60%, 
                    #546BCE 80%)`,
                    p: 6,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    {selectedEmployee.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "white",
                    }}
                  >
                    {selectedEmployee.role}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Stack spacing={0.4} sx={{}}>
                    <Typography color={"gray"} fontSize={13}>
                      Employment Status
                    </Typography>
                    <Typography fontSize={15} fontWeight={500}>
                      {selectedEmployee.status}
                    </Typography>
                  </Stack>
                  <Stack spacing={0.4} sx={{}}>
                    <Typography color={"gray"} fontSize={13}>
                      Job Role
                    </Typography>
                    <Typography fontSize={15} fontWeight={500}>
                      {selectedEmployee.jobTitle}
                    </Typography>
                  </Stack>
                  <Stack spacing={0.4} sx={{}}>
                    <Typography color={"gray"} fontSize={13}>
                      Manager
                    </Typography>
                    <Typography fontSize={15} fontWeight={500}>
                      {selectedEmployee.managerName}
                    </Typography>
                  </Stack>
                  <Stack spacing={0.4} sx={{}}>
                    <Typography color={"gray"} fontSize={13}>
                      Department
                    </Typography>
                    <Typography fontSize={15} fontWeight={500}>
                      {selectedEmployee.department}
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: "#f4f5f7",
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography color={"#84858C"} fontSize={13}>
                    Salary 💰
                  </Typography>
                  <Typography fontSize={20} fontWeight={500}>
                    CAD {selectedEmployee.salary}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 2.4,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    height: "28rem",
                    bgcolor: "white",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography fontSize={20} fontWeight={500}>
                      <Feed
                        sx={{ color: "black", width: "1rem", height: "1rem" }}
                      />
                      Basic Details
                    </Typography>
                    <IconButton
                      onClick={() => setOpenBasicEditModal(true)}
                      sx={{
                        color: "#FA6432",
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                      aria-label="edit"
                    >
                      <BorderColorOutlined />
                      <Typography sx={{ ml: 1, fontSize: "14px" }}>
                        Edit
                      </Typography>
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Employment Name:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.name}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Employee Address:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.address}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Country:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.country}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Employee Email:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.email}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Employee Phone Number:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.phone}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.4} sx={{}}>
                      <Typography color={"gray"} fontSize={13}>
                        Education:
                      </Typography>
                      <Typography fontSize={15} fontWeight={500}>
                        {selectedEmployee.education}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: "white",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography fontSize={20} fontWeight={500}>
                      <BusinessCenter
                        sx={{
                          color: "black",
                          width: "1rem",
                          height: "1rem",
                          bgcolor: "#00CAED",
                        }}
                      />
                      Employment Details
                    </Typography>
                    <IconButton
                      onClick={() => setOpenEmploymentEditModal(true)}
                      sx={{
                        color: "#FA6432",
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                      aria-label="edit"
                    >
                      <BorderColorOutlined />
                      <Typography sx={{ ml: 1, fontSize: "14px" }}>
                        Edit
                      </Typography>
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {openBasicEditModal && (
            <EditBasicDetails
              selectedEmployee={selectedEmployee}
              open={openBasicEditModal}
              onClose={() => setOpenBasicEditModal(false)}
            />
          )}
          {openEmploymentEditModal && (
            <EditEmploymentDetails
              selectedEmployee={selectedEmployee}
              open={openEmploymentEditModal}
              onClose={() => setOpenEmploymentEditModal(false)}
            />
          )}
        </Box>
      )}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default EmployeeDetails;
