// src/components/RegisterForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../app/query";
import { setUser, setError } from "../features/user/userSlice";
import FormContainer from "./FormContainer";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
      dispatch(setUser(response.data.user));
      navigate("/login");
    } catch (error) {
      dispatch(setError("Error during registration"));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "20px" }}>
      <FormContainer>
        <Typography
          variant="h4"
          className="title"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            margin: "24px",
            marginTop: "80px",
          }}>
          Sign up
        </Typography>
        <TextField
          fullWidth
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={"require"}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={"require"}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={"require"}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label="Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText="Optional"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label="Birth Date"
          type="date"
          name="birthDate"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Optional"
          sx={{
            marginTop: "20px",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
          onChange={handleChange}
        />
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <FormHelperText>Optional</FormHelperText>
        </FormControl>

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={"require"}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          helperText={"require"}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => console.log("Button clicked")}
          sx={{ marginTop: "20px" }}>
          Sign up
        </Button>
        <Typography
          sx={{
            marginTop: "50px",
            textAlign: "center",
          }}>
          Already an account?{" "}
          <a
            href="/user-login"
            style={{
              color: "#82B440",
            }}>
            Log in
          </a>
        </Typography>
      </FormContainer>
    </form>
  );
};

export default RegisterForm;
