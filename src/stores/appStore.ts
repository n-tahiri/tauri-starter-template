import { create } from "zustand";

export const useAppStore = create(() => ({
  // App basic info
  developer: "nTahiri",
  company: null,
  version: "0.1.0",
}));
