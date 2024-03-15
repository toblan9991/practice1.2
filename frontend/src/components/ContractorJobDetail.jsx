import React from "react";
import { Container, TextField, Grid, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";

export default function JobDetailsForm({ formData, setFormData }) {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="jobTitle"
              name="jobTitle"
              label="Job Duties"
              fullWidth
              variant="outlined"
              value={formData.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="department"
              name="department"
              label="Assign Department"
              fullWidth
              autoComplete="department"
              variant="outlined"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="sin"
              name="sin"
              label="Contractor SIN Number"
              fullWidth
              autoComplete="sin"
              variant="outlined"
              value={formData.sin}
              onChange={(e) =>
                setFormData({ ...formData, sin: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="managerName"
              name="managerName"
              label="Manager's Name"
              fullWidth
              variant="outlined"
              value={formData.managerName}
              onChange={(e) =>
                setFormData({ ...formData, managerName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="managerEmail"
              name="managerEmail"
              label="Manager's Email"
              fullWidth
              variant="outlined"
              value={formData.managerEmail}
              onChange={(e) =>
                setFormData({ ...formData, managerEmail: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel id="duration-label">Contract Duration</InputLabel>
              <Select
                labelId="duration-label"
                id="duration"
                name="duration"
                value={formData.duration}
                label="Contract Duration"
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              >
                <MenuItem value="3 months">3 months</MenuItem>
                <MenuItem value="6 months">6 months</MenuItem>
                <MenuItem value="1 year">1 year</MenuItem>
                <MenuItem value="3 years">3 years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="startDate"
              name="startDate"
              label="Job Start Date"
              fullWidth
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel id="payPeriod-label">Salary Pay Period</InputLabel>
              <Select
                labelId="payPeriod-label"
                id="payPeriod"
                name="payPeriod"
                value={formData.payPeriod}
                label="Salary Pay Period"
                onChange={(e) =>
                  setFormData({ ...formData, payPeriod: e.target.value })
                }
              >
                <MenuItem value="hourly">Hourly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary Amount"
              fullWidth
              autoComplete="salary"
              variant="outlined"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
