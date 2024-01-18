import FormContainer from "../components/FormContainer";
import InputAdornments from "../components/PasswordTextField";
import HelperTextMisaligned from "../components/TextField";
import { Typography, Button, Link } from "@mui/material";
import ReusableButton from "../components/Button";

function UserLogin() {
  return (
    <FormContainer>
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
      <HelperTextMisaligned helperText="* Required" label="Email address" />
      <InputAdornments passwordLabel={"Password"} />

      <ReusableButton
        fullWidth
        type="submit"
        variant="contained"
        className="mt-2"
        backgroundColor="#82B440"
      >
        Log in
      </ReusableButton>
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
    </FormContainer>
  );
}

export default UserLogin;
