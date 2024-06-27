import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const civilStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    refno: "",
    name: "",
    address: "",
    nicNumber: "",
    passportNo: "",
    civilStatus: "",
    mobileNo: "",
    dateOfBirth: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      age: name === "dateOfBirth" ? calculateAge(value) : prevState.age,
    }));
  };

  return (
    <Box
      component="form"
      sx={{ flexGrow: 1, p: 2, m: 2 }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Submitted Data:", formData);
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 3, p: 2, borderRadius: 2, bgcolor: "#f5f5f5" }}>
            <TextField
              id="refno"
              label="Reference Number"
              name="refno"
              value={formData.refno}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              id="name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              id="address"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              id="nicNumber"
              label="NIC Number"
              name="nicNumber"
              value={formData.nicNumber}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 3, p: 2, borderRadius: 2, bgcolor: "#f5f5f5" }}>
            <TextField
              id="passportNo"
              label="Passport Number"
              name="passportNo"
              value={formData.passportNo}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              id="civilStatus"
              label="Civil Status"
              name="civilStatus"
              value={formData.civilStatus}
              onChange={handleInputChange}
              select
              required
              fullWidth
              sx={{ mb: 2 }}
            >
              {civilStatusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="mobileNo"
              label="Mobile Number"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="age"
                  label="Age"
                  name="age"
                  value={formData.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
