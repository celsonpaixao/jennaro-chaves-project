import { create } from "zustand";

type SnackbarType = "success" | "error" | "warning";

interface SnackbarState {
  open: boolean;
  message: string;
  type: SnackbarType;
  showSnackbar: (message: string, type?: SnackbarType) => void;
  hideSnackbar: () => void;
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
  open: false,
  message: "",
  type: "success",
  showSnackbar: (message, type = "success") =>
    set({ open: true, message, type }),
  hideSnackbar: () => set({ open: false, message: "", type: "success" }),
}));
