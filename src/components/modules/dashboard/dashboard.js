import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissions } from "../../../store/missionsSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionState);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
