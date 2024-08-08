import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      teams: [],

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
    }),
    { name: "appData" }
  )
);
