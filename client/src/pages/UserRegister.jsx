import React from "react";
import FormContainer from "../components/FormContainer";
import { Typography, Button, Link, TextField } from "@mui/material";
import HelperTextMisaligned from "../components/TextField";
import InputAdornments from "../components/PasswordTextField";
import ReusableButton from "../components/Button";
import { useRegisterMutation } from "../store/slice/userSlice";
import { setCredentials } from "../store/slice/authSlice";

function UserRegister() {
  return (
    <form>
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
        <HelperTextMisaligned helperText="* Required" label="Username" />
        <HelperTextMisaligned helperText="* Required" label="Email address" />
        <HelperTextMisaligned helperText="* Required" label="Phone Number" />
        <HelperTextMisaligned helperText="* Required" label="Address" />
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
          sx={{ width: "95%", marginLeft: "10px", marginTop: "15px" }}
        />
        <HelperTextMisaligned helperText="* Required" label="Gender" />
        <InputAdornments passwordLabel={"Password"} />
        <InputAdornments passwordLabel={"Confirm Password"} />
        <ReusableButton
          fullWidth
          type="submit"
          variant="contained"
          className="mt-2"
          backgroundColor="#82B440"
        >
          Sign up
        </ReusableButton>

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
