import React from "react";
import {
  Container,
  TextField,
  Grid,
} from "@mui/material";


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
              label="Job Title"
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
              label="Employee SIN Number"
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
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary Annual"
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

