import { Snackbar, Alert } from "@mui/material";
import { useSnackbarStore } from "../../../store/snackbarStore";

export default function GlobalSnackbar() {
  const { open, message, type, hideSnackbar } = useSnackbarStore();

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={hideSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={hideSnackbar}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
