import React from "react";
import Card from "../../ui/card/card";
import PieChart from "../../ui/pieChart/pieChart";
import { useSelector } from "react-redux";
import classes from "./dashboard.module.css";

const CompanyMissionPieChart = () => {
  const missionsState = useSelector((state) => state.missionState);
  const updatedMissions = missionsState?.updatedMissions ?? [];

  const getComputedData = (missions) => {
    const groupedMissions = Object.groupBy(missions, ({ company }) => company);
    const result = [];
    for (let key in groupedMissions) {
      result.push({ company: key, total: groupedMissions[key].length });
    }
    return result;
  };
  const computedMissions = getComputedData(updatedMissions);

  return (
    <Card classProp={classes["company-mission-wrapper"]}>
      <Card.Header>Company Mission</Card.Header>
      <Card.Body>
        <PieChart
          title="Company Mission"
          missions={computedMissions}
          angleKey="total"
          legendItemKey="company"
        />
      </Card.Body>
    </Card>
  );
};

export default CompanyMissionPieChart;
