import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLocations from "../api/apiDirectory";
import { GET, withCatch } from "../api/services";

const initialState = {
  isLoading: false,
  isFailed: false,
  isSucces: false,
  missions: [],
  updatedMissions: [],
};

export const getMissions = createAsyncThunk("mission/missionlist", async () => {
  const response = withCatch(GET, apiLocations.GET_MISSIONS(), {});
  return response;
});

export const missionsSlice = createSlice({
  name: "missionState",
  initialState,
  reducers: {
    getMissionsByYear: (state, action) => {
      const { year } = action.payload;
      let updatedMissionList = state.missions.filter((mission) =>
        mission.date.includes(year)
      );
      state.updatedMissions = updatedMissionList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
        state.isSucces = false;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        const { status = "", data = [] } = action.payload.response;
        state.isSucces = true;
        state.isLoading = false;
        if (status === 200) {
          state.missions = data;
        } else {
          state.missions = [];
        }
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.isSucces = false;
        state.isFailed = true;
        state.missions = [];
      });
  },
});

export const { getMissionsByYear } = missionsSlice.actions;

export default missionsSlice.reducer;
