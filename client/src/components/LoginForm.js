import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../app/query";
import { setUser, setError } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";
import { Typography, Button, Link, TextField } from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await loginUser(formData);
      dispatch(setUser(response.data.user));
      navigate("/profile"); // Navigate to the user's profile page
    } catch (error) {
      dispatch(setError("Invalid credentials"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer style={{ marginLeft: "10px", marginRight: "10px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "80px", fontWeight: "bold" }}>
          Log in
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#a5a5a5",
            marginTop: "10px",
            marginBottom: "30px",
          }}>
          Welcome Back!
        </Typography>

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

        <button type="submit">Log in</button>

        <Typography
          sx={{
            textAlign: "right",
            margin: "45px 10px",
            "& a": {
              color: "#82B440",
            },
          }}>
          <Link to="/">Forgot Password?</Link>
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#a5a5a5",
            marginBottom: "24px",
          }}>
          or Log in with
        </Typography>

        <button type="submit" className="mt-2">
          Log with Facebook
        </button>

        <button type="submit">Continue with Google</button>

        <Typography
          sx={{
            marginTop: "72px",
            textAlign: "center",
          }}>
          Dont have an account?{" "}
          <a
            href="/user-register"
            style={{
              color: "#82B440",
            }}>
            Sign up
          </a>
        </Typography>
      </FormContainer>
    </form>
  );
};

export default LoginForm;
