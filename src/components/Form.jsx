import React from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import countries from "./utils/countries";
import districts from "./utils/districts";

const Form = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
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
            <Controller
              name="refno"
              control={control}
              defaultValue=""
              rules={{
                required: "This Field is required",
                pattern: {
                  value: /^AW\s\d{4}$/,
                  message: " enter valid reference number (eg: AW 1234) ",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Reference Number"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.refno)}
                  helperText={errors.refno ? errors.refno.message : ""}
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.name)}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
            />

            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Gender"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.gender)}
                  helperText={errors.gender ? errors.gender.message : ""}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>
              )}
            />

            <Controller
              name="civilStatus"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Civil Status"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.civilStatus)}
                  helperText={
                    errors.civilStatus ? errors.civilStatus.message : ""
                  }
                >
                  {civilStatusOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="nicNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "This Field is required",
                pattern: {
                  value: /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/m,
                  message: "Please Enter a valid NIC number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="NIC Number"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.nicNumber)}
                  helperText={errors.nicNumber ? errors.nicNumber.message : ""}
                />
              )}
            />

            <Controller
              name="passportNo"
              control={control}
              defaultValue=""
              rules={{
                required: "This Field is required",
                pattern: {
                  value: /^N\d{7,8}$/,
                  message: "Enter valid Passport Number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Passport Number"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.passportNo)}
                  helperText={
                    errors.passportNo ? errors.passportNo.message : ""
                  }
                />
              )}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This Field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Date of Birth"
                      type="date"
                      fullWidth
                      sx={{ mb: 2 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={Boolean(errors.dateOfBirth)}
                      helperText={
                        errors.dateOfBirth ? errors.dateOfBirth.message : ""
                      }
                      onChange={(e) => {
                        field.onChange(e);
                        setValue("age", calculateAge(e.target.value));
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="age"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Age"
                      fullWidth
                      sx={{ mb: 2 }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Applying Country"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.country)}
                  helperText={errors.country ? errors.country.message : ""}
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ boxShadow: 3, p: 2, borderRadius: 2, bgcolor: "#a4f5c0" }}>
            <Controller
              name="mobileNo"
              control={control}
              defaultValue=""
              rules={{
                required: "This Field is required",
                pattern: {
                  value: /^([0]{1}[0-9]{9})$/m,
                  message: "Enter Valid Phone Number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobile Number"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.mobileNo)}
                  helperText={errors.mobileNo ? errors.mobileNo.message : ""}
                />
              )}
            />

            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Address"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.address)}
                  helperText={errors.address ? errors.address.message : ""}
                />
              )}
            />

            <Controller
              name="policeDiv"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Police Division"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.policeDiv)}
                  helperText={errors.policeDiv ? errors.policeDiv.message : ""}
                />
              )}
            />

            <Controller
              name="district"
              control={control}
              defaultValue=""
              rules={{ required: "This Field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="District"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={Boolean(errors.district)}
                  helperText={errors.district ? errors.district.message : ""}
                >
                  {districts.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

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
};

export default Form;
