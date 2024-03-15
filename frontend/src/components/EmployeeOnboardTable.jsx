import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function EmployeeOnboardTable({ companyId }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/api/v1/companies/${companyId}/employees`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        const filteredAndMappedData = data
          .filter((item) => new Date(item.startDate) >= today) 
          .map((item) => ({
            id: item.id,
            name: item.name,
            jobTitle: item.jobTitle,
            startDate: item.startDate,
            jobType: item.jobType,
            email: item.email,
            status: item.status,
            daysToJoin: Math.round(
              (new Date(item.startDate) - today) / (1000 * 60 * 60 * 24)
            ), 
          }));
        setRows(filteredAndMappedData);
      })
      .catch((error) => console.error("There was an error!", error));
  }, [companyId]);

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead style={{ backgroundColor: "white", borderRadius: "10px" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Employee Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Job Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Days to Join</TableCell>{" "}
            <TableCell sx={{ fontWeight: "bold" }}>Start Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Employment Type</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableRow style={{ height: "10px", backgroundColor: "#F4F5F7" }} />
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={row.id}>
              <TableRow
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>{`${row.daysToJoin} days to join`}</TableCell>{" "}
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.jobType}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
              {index < rows.length - 1 && (
                <TableRow
                  style={{ height: "10px", backgroundColor: "#F4F5F7" }}
                />
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
