import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../ui/card/card";
import PieChart from "../../ui/pieChart/pieChart";
import { getMinMaxDateItem } from "../../../utils/commons";
import { getMissionsByYear } from "../../../store/missionsSlice";
import classes from "./dashboard.module.css";

const MissionStatusPieChart = (props) => {
  const dispatch = useDispatch();
  const missionsState = useSelector((state) => state.missionState);
  const updatedMissions = missionsState?.updatedMissions ?? [];

  const getComputedData = (missions) => {
    let result = [];
    const successMissions = missions?.filter((mission) => mission.successful);
    const failedMissions = missions?.filter((mission) => !mission.successful);
    result.push(
      { successful: "Successful", total: successMissions.length },
      { successful: "Unsuccessful", total: failedMissions.length }
    );
    return result;
  };

  const computedMissions = getComputedData(updatedMissions);

  useEffect(() => {
    const minMaxDateItem = getMinMaxDateItem(missionsState.missions);
    if (minMaxDateItem?.maxDate && minMaxDateItem?.minDate) {
      dispatch(
        getMissionsByYear({ year: minMaxDateItem?.maxDate.split("-")[0] })
      );
    }
  }, [missionsState.missions]);

  return (
    <Card classProp={classes["mission-status-wrapper"]}>
      <Card.Header>Mission Status</Card.Header>
      <Card.Body>
        <PieChart
          missions={computedMissions}
          angleKey="total"
          legendItemKey="successful"
        />
      </Card.Body>
    </Card>
  );
};

MissionStatusPieChart.propTypes = {};

export default MissionStatusPieChart;
