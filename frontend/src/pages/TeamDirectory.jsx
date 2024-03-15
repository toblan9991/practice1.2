import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import EmployeeImage from "../components/EmployeeImage.jsx";
import { addEmployees, selectEmployee } from "../redux/employee/employeeSlice";
import { Navigate } from "react-router-dom";

const TeamDirectory = () => {
  const navigate = useNavigate();

  const handleRowClick = ({ row }) => navigate(`/employee/${row._id}`);
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
    { field: "status", headerName: "Status", flex: 1 },
    { field: "jobTitle", headerName: "Role", flex: 1 },
    { field: "startDate", headerName: "Employee Since", flex: 1 },
    { field: "managerName", headerName: "Manager", flex: 1 },
  ];

  const [showContractorData, setShowContractorData] = useState(false);

  const dispatch = useDispatch();
  const employees = useSelector(selectEmployee);

  const { currentCompany } = useSelector((state) => state.company);

  const { _id: companyId } = currentCompany || {};

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

  if (!Array.isArray(employees)) {
    return <div>Error: Employees data is not available.</div>;
  }
  const workerData = employees.filter(
    ({ jobType }) => jobType !== "contractor"
  );
  const contractorData = employees.filter(
    ({ jobType }) => jobType === "contractor"
  );

  return currentCompany ? (
    <Box
      sx={{
        bgcolor: "#F4F5F7",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Employee Directory
          </Typography>
          <Typography
            variant="p"
            sx={{ fontWeight: "light", fontSize: "15px" }}
          >
            Discover your team easily with our simple and accessible Employee
            Directory
          </Typography>
        </Stack>
        <Button
          onClick={() => navigate("/employee-onboard")}
          sx={{
            color: "white",
            bgcolor: "#FA6432",
            borderRadius: 2,
            fontSize: "13px",
            px: 3,
            py: 1.5,
          }}
          variant="inherent"
        >
          Add New Employess
        </Button>
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
                width: "8rem",
                bgcolor: "black",
                position: "absolute",
                bottom: -1.5,
                left: 12,
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
                bgcolor: "black",
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
            onRowClick={handleRowClick}
            columns={columns}
            pageSize={10}
            rowHeight={70}
            getRowId={({ _id }) => _id}
            columnHeaderHeight={70}
            rowsPerPageOptions={[5, 10, 20]}
            sx={{
              cursor: "pointer",
              border: "none",
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "white",
                marginBottom: 4,

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
                marginBottom: 2,
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
            onRowClick={handleRowClick}
            getRowId={({ _id }) => _id}
            columns={columns}
            pageSize={10}
            rowHeight={70}
            columnHeaderHeight={70}
            rowsPerPageOptions={[5, 10, 20]}
            sx={{
              cursor: "pointer",
              border: "none",
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "white",
                marginBottom: 3,
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
                marginBottom: 2,
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

export default TeamDirectory;
