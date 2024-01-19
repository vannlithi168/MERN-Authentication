import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import {
  Typography,
  Button,
  Link,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useRegisterMutation } from "../store/slice/userSlice";
import { setCredentials, updateUserInfo } from "../store/slice/authSlice";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [register] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    try {
      const { data } = await register(formData);

      if (data) {
        // Update Redux state with the form data
        dispatch(setCredentials(data));
        dispatch(updateUserInfo(formData)); // Assuming you have an action like updateUserInfo in your authSlice
        localStorage.setItem("registrationSuccess", "true");
      } else {
        console.error("Invalid credentials or server error");
      }
    } catch (err) {
      console.error(err?.data?.message || err.error);
    }
  };

  const formattedBirthDate = formData.birthDate
    ? format(new Date(formData.birthDate), "yyyy-MM-dd")
    : "";

  return (
    <form
      onSubmit={submitHandler}
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <FormContainer>
        <Typography
          variant="h4"
          className="title"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            margin: "24px",
            marginTop: "80px",
          }}
        >
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
          value={formattedBirthDate}
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
          }}
        >
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
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
          sx={{ marginTop: "20px" }}
        >
          Sign up
        </Button>
        <Typography
          sx={{
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          Already an account?{" "}
          <a
            href="/user-login"
            style={{
              color: "#82B440",
            }}
          >
            Log in
          </a>
        </Typography>
      </FormContainer>
    </form>
  );
}

export default UserRegister;
