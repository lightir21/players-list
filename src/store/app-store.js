import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      teams: {},
      currTeam: "",

      addNewTeam: (newTeam) => {
        set((state) => ({
          teams: {
            ...state.teams,
            [newTeam]: {},
          },
        }));
      },

      setCurrTeam: (teamName) => {
        set({ currTeam: teamName });
      },

      addNewPlayerToTeam: ({ name, team }) => {
        const { teams } = get();

        let newPlayersArray = [];

        if (teams[team].players) {
          newPlayersArray = [...teams[team].players];
          newPlayersArray.push({ name });
          set((state) => ({
            teams: {
              ...state.teams,
              [team]: { players: newPlayersArray },
            },
          }));
        } else {
          set((state) => ({
            teams: {
              ...state.teams,
              [team]: { players: [{ name }] },
            },
          }));
        }
      },
    }),
    { name: "appData" }
  )
);
