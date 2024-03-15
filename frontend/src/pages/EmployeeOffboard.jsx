import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import EmployeeImage from "../components/EmployeeImage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployee, addEmployees } from "../redux/employee/employeeSlice";
import { Navigate } from "react-router-dom";

const EmployeeOffBoarding = () => {
  const navigate = useNavigate();
  const renderActionButton = (status) => {
    return status !== "active" ? "Offboarding Initiated" : "Offboard";
  };

  const handleButtonClick = ({ _id: employeeId, status }) => {
    if (status === "active") {
      navigate(`/offboard-form/${employeeId}`);
    }
  };

  const { currentCompany } = useSelector((state) => state.company);
  const { _id: companyId } = currentCompany || {};

  const dispatch = useDispatch();
  const employees = useSelector(selectEmployee);

  useEffect(() => {
    const asyncFn = async () => {
      try {
        const url = `http://localhost:3000/api/v1/companies/${companyId}/employees`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();

          dispatch(addEmployees(jsonResponse));
        } else {
          console.error("Server responded with status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    asyncFn();
  }, []);

  const workerData = employees.filter(
    ({ jobType }) => jobType !== "contractor"
  );
  const contractorData = employees.filter(
    ({ jobType }) => jobType === "contractor"
  );

  const columns = [
    {
      field: "name",
      headerName: "Employee Name",
      headerAlign: "center",
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmployeeImage img={params.row.documentSrc} />
          <Typography variant="body2" style={{ marginLeft: 10 }}>
            {params.row.name}
          </Typography>
        </div>
      ),
    },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "jobTitle", headerName: "Role", flex: 1 },
    { field: "startDate", headerName: "Employee Since", flex: 1 },
    { field: "managerName", headerName: "Manager", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            onClick={() => handleButtonClick(params.row)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              gap: 2,
            }}
          >
            <Button
              variant="inherent"
              disabled={params.row.status !== "active"}
              sx={{
                textTransform: "none",
                px: 3,
              }}
            >
              {renderActionButton(params.row.status)}
            </Button>
            <IconButton disabled={params.row.status !== "active"}>
              <ArrowForwardIos sx={{ color: "black", fontSize: "13px" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const [showContractorData, setShowContractorData] = useState(false);

  return currentCompany ? (
    <Box
      sx={{
        bgcolor: "#F5F5F5",
        height: "90vh",
        width: "100%",
        // overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: 3,
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Off-Board Employee
        </Typography>
        <Typography variant="p" sx={{ fontWeight: "light", fontSize: "15px" }}>
          Streamlining Processes and Support for Off-Board Employees
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 3,
          alignItems: "center",
          paddingBottom: 2,
          borderBottom: "0.8px solid grey",
          position: "relative",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setShowContractorData(false)}
        >
          <Typography sx={{ fontSize: "15px" }} component="span">
            Company Employee&nbsp;
          </Typography>
          <Typography component="span" sx={{ color: "grey", fontSize: "15px" }}>
            ({workerData.length})
          </Typography>
          {!showContractorData && (
            <Box
              sx={{
                height: "2px",
                width: "10rem",
                bgcolor: "#FA6432",
                position: "absolute",
                bottom: -1,
                left: 2,
              }}
            ></Box>
          )}
        </Box>
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setShowContractorData(true)}
        >
          <Typography sx={{ fontSize: "15px" }} component="span">
            Contractors&nbsp;
          </Typography>
          <Typography component="span" sx={{ color: "grey", fontSize: "15px" }}>
            ({contractorData.length})
          </Typography>
          {showContractorData && (
            <Box
              sx={{
                height: "2px",
                width: "8rem",
                bgcolor: "#FA6432",
                position: "absolute",
                bottom: -1.5,
                left: "11rem",
              }}
            ></Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></Box>
      <Box sx={{ height: "35rem" }}>
        {showContractorData ? (
          <DataGrid
            rows={contractorData}
            columns={columns}
            pageSize={10}
            rowHeight={70}
            getRowId={({ _id }) => _id}
            columnHeaderHeight={70}
            rowsPerPageOptions={[5, 10, 20]}
            sx={{
              border: "none",
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "white",
                marginBottom: 2,

                border: "none",
              },
              "&.MuiDataGrid-root .MuiDataGrid-withBorderColor": {
                borderColor: "transparent",
              },
              "& .MuiDataGrid-columnHeader:first-child": {
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "1.2rem",
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader:last-child": {
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "1.2rem",
                backgroundColor: "white",
              },
              "& .MuiDataGrid-row": {
                backgroundColor: "white",
                marginBottom: 1,
                borderRadius: 3,
                border: "none",

                "& .MuiDataGrid-root": {
                  boxShadow: "none",
                  border: "none",
                  borderColor: "none",
                  borderStyle: "none",
                },

                "& .MuiDataGrid-cell": {
                  border: "none",
                },
              },
            }}
          />
        ) : (
          <DataGrid
            rows={workerData}
            columns={columns}
            pageSize={10}
            rowHeight={70}
            getRowId={({ _id }) => _id}
            columnHeaderHeight={70}
            rowsPerPageOptions={[5, 10, 20]}
            sx={{
              border: "none",
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "white",
                marginBottom: 2,
                border: 0,
                fontSize: "15px",
              },
              "&.MuiDataGrid-root .MuiDataGrid-withBorderColor": {
                borderColor: "transparent",
              },
              "& .MuiDataGrid-columnHeader:first-child": {
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "1.2rem",
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader:last-child": {
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "1.2rem",
                backgroundColor: "white",
              },

              "& .MuiDataGrid-row": {
                backgroundColor: "white",
                marginBottom: 1,
                borderRadius: 3,
                border: "none",

                "& .MuiDataGrid-root": {
                  boxShadow: "none",
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  border: "none",
                },
                "& .MuiDataGrid-headerCell": {
                  border: "none",
                },
                "& .MuiDataGrid-iconSeparator": {
                  display: "none",
                },
              },
            }}
          />
        )}
      </Box>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default EmployeeOffBoarding;
