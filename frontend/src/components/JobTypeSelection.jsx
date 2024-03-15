import React from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { Container, Box } from "@mui/system"; // 

export default function JobTypeSelection({ handleJobTypeSelection }) {
  return (
    <Container
      style={{
        padding: 20,
        paddingTop: 40,
        paddingBottom: 150,
        backgroundColor: "#F4F5F7",
      }}
    >
      <Typography variant="h4" gutterBottom component="div" align="center">
        On-Board Employee?
      </Typography>
      <Typography
        gutterBottom
        component="div"
        align="center"
        style={{
          paddingBottom: 25,
        }}
      >
        Who would you like to add in your cleaning agency?
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={2.5}></Grid>
        <Grid item xs={3.5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 180,
              justifyContent: "space-between", 
            }}
          >
            <Typography
              align="center"
              variant="h5"
              style={{ paddingBottom: 10 }}
            >
              Employee
            </Typography>
            <Typography align="center" style={{ paddingBottom: 25 }}>
              An employee who will work in your cleaning company
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "10px",
                  border: "1px solid black",
                  width: "150px",
                }}
                onClick={() => handleJobTypeSelection(1)}
              >
                Onboard
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 180,
              justifyContent: "space-between", 
            }}
          >
            <Typography
              variant="h5"
              align="center"
              style={{ paddingBottom: 10 }}
            >
              Contractor
            </Typography>
            <Typography align="center" style={{ paddingBottom: 25 }}>
              Self-employed individual having their own company
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "10px",
                  border: "1px solid black",
                  width: "150px",
                }}
                onClick={() => handleJobTypeSelection(2)}
              >
                Onboard
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
