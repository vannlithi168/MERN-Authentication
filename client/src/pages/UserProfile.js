import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { Typography, Button, TextField } from "@mui/material";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  console.log("user data", user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <Avatar
        alt="profile"
        src="/assets/pfpic.jpg"
        sx={{
          width: 100,
          height: 100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <Typography>Username</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={user.data.userName}
        variant="outlined"
      />

      <Typography>Email</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={user.data.email}
        variant="outlined"
      />

      <Typography>Address</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={user.data.address}
        variant="outlined"
      />

      <Typography>BirthDate</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={user.data.birthDate}
        variant="outlined"
      />

      <Typography>Gender</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={user.data.gender}
        variant="outlined"
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px", bgcolor: "#82B440" }}>
        Update
      </Button>
    </div>
  );
};

export default UserProfile;
