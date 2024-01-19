import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function HelperTextMisaligned({ helperText, label, margin }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#82B440",
          },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#82B440",
        },
      }}
    >
      <TextField
        fullWidth
        helperText={helperText}
        label={label}
        margin={margin}
      />
    </Box>
  );
}
