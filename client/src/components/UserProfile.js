import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  // Assuming you have a selector to retrieve user data from the Redux store
  const user = useSelector((state) => state.user);

  console.log("user data", user);

  if (!user) {
    return <p>Loading...</p>; // Add a loading indicator if needed
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.data.email}</p>
      <p>Address: {user.data.address}</p>
      <p>Birth Date: {user.data.birthDate}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default UserProfile;
