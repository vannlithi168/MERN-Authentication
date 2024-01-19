import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Typography, Button, Link, TextField } from "@mui/material";
import ReusableButton from "../components/Button";
import { setCredentials, updateUserInfo } from "../store/slice/authSlice";

function UserLogin() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate a successful login (replace with your actual login logic)
      const response = await simulateLogin(formData);

      if (response.success) {
        setSuccessMessage("Login successful!");

        dispatch(setCredentials(response.data));
        dispatch(updateUserInfo(response.userData));
      } else {
        setSuccessMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setSuccessMessage("An error occurred during login.");
    }
  };

  const simulateLogin = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true,
          userData: { formData },
        });
      }, 1000);
    });
  };

  return (
    <form style={{ marginLeft: "10px", marginRight: "10px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "80px", fontWeight: "bold" }}
      >
        Log in
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#a5a5a5",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        Welcome Back!
      </Typography>

      {successMessage && (
        <Typography
          sx={{
            textAlign: "center",
            color: "green",
            marginBottom: "20px",
            marginTop: "-20px",
          }}
        >
          {successMessage}
        </Typography>
      )}

      <TextField
        fullWidth
        helperText="* Required"
        label="Email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
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
        label={"Password"}
        helperText="* Required"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#82B440",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#82B440",
          },
          marginTop: "20px",
        }}
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        className="mt-2"
        onClick={handleSubmit}
        sx={{ marginTop: "30px", bgcolor: "#82B440" }}
      >
        Log in
      </Button>

      <Typography
        sx={{
          textAlign: "right",
          margin: "45px 10px",
          "& a": {
            color: "#82B440",
          },
        }}
      >
        <Link to="/">Forgot Password?</Link>
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#a5a5a5",
          marginBottom: "24px",
        }}
      >
        or Log in with
      </Typography>

      <ReusableButton variant="contained" type="submit" className="mt-2">
        Log with Facebook
      </ReusableButton>

      <ReusableButton
        variant="contained"
        type="submit"
        className="mt-2"
        backgroundColor="white"
        color="black"
      >
        Continue with Google
      </ReusableButton>

      <Typography
        sx={{
          marginTop: "72px",
          textAlign: "center",
        }}
      >
        Dont have an account?{" "}
        <a
          href="/user-register"
          style={{
            color: "#82B440",
          }}
        >
          Sign up
        </a>
      </Typography>
    </form>
  );
}

export default UserLogin;
