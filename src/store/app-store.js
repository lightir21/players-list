import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      teams: [],
      currTeam: "",

      addNewTeam: (newTeam) => {
        set((state) => ({
          teams: [
            ...state.teams,
            {
              [newTeam]: {},
            },
          ],
        }));
      },

      setCurrTeam: (teamName) => {
        set({ currTeam: teamName });
      },
    }),
    { name: "appData" }
  )
);
