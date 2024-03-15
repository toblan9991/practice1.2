import React, { useState } from "react";
import {
  Container,
  TextField,
  Grid,
} from "@mui/material";

export default function EmployeeInformationForm({ formData, setFormData }) {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Employee Name"
              fullWidth
              autoComplete="name"
              variant="outlined"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Employee Address"
              fullWidth
              autoComplete="address"
              variant="outlined"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Employee Email"
              fullWidth
              autoComplete="email"
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Employee Phone Number"
              fullWidth
              autoComplete="phone"
              variant="outlined"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="education"
              name="education"
              label="Employee Education"
              fullWidth
              autoComplete="education"
              variant="outlined"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

