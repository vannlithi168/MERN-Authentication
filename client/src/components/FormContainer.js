import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const FormContainer = ({ children }) => (
  <Paper elevation={0} sx={{ maxWidth: "400px", margin: "auto" }}>
    <Box>{children}</Box>
  </Paper>
);

export default FormContainer;
