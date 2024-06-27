import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import countries from "./utils/countries";
import districts from "./utils/districts";
// import InputAdornment from "@mui/material/InputAdornment";

export default function Form() {
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
    country: "",
    policeDiv: "",
    district: "",
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      age: name === "dateOfBirth" ? calculateAge(value) : prevState.age,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    // Add your form submission logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flexGrow: 1,
        p: 2,
        m: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 3, p: 2, borderRadius: 2, bgcolor: "#a4f5c0" }}>
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
              id="gender"
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              select
              required
              fullWidth
              sx={{ mb: 2 }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
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
              id="nicNumber"
              label="NIC Number"
              name="nicNumber"
              value={formData.nicNumber}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
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
                  label="age"
                  name="age"
                  value={formData.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                  // inputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">kg</InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
            </Grid>
            <TextField
              id="country"
              name="country"
              label="Applying Country"
              value={formData.country}
              onChange={handleInputChange}
              required
              fullWidth
              select
              sx={{ mb: 2 }}
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 3, p: 2, borderRadius: 2, bgcolor: "#a4f5c0" }}>
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
              id="mobileNo"
              label="Police Dvision"
              name="policeDiv"
              value={formData.policeDiv}
              onChange={handleInputChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              id="mobileNo"
              label="District"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
              fullWidth
              select
              sx={{ mb: 2 }}
            >
              {districts.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              color="primary"
              type="submit"
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
