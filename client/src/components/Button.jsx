import React from "react";
import { Button } from "@mui/material";

const ReusableButton = ({
  variant,
  color,
  fullWidth,
  onClick,
  children,
  backgroundColor,
}) => {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        marginLeft: "10px",
        width: "95%",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
