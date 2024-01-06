import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissions, getMissionsByYear } from "../../../store/missionsSlice";
import { getMinMaxDateItem, sortFn } from "../../../utils/commons";
import Container from "../../ui/container/container";
import classes from "./dashboard.module.css";
import Navbar from "../../ui/navbar/navbar";
import Flexbox from "../../ui/flexbox/flexbox";
import Card from "../../ui/card/card";
import MissionStatusPieChart from "./missionStatusPieChart";
import CompanyMissionPieChart from "./companyMissionPieChart";
import { AgGridReact } from "ag-grid-react";
import { columns } from "./constants";

const Dashboard = () => {
  const dispatch = useDispatch();
  const missionsState = useSelector((state) => state.missionState);
  const [yearOptions, setYearOptions] = useState([]);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const getMinMaxDateOptions = (max, min) => {
    const lenth = +max - +min;
    let options = [];
    for (let i = 0; i <= lenth; i++) {
      options.push(+min + i);
    }

    return options;
  };

  useEffect(() => {
    const minMaxDateItem = getMinMaxDateItem(missionsState.missions);
    if (minMaxDateItem?.maxDate && minMaxDateItem?.minDate) {
      const maxYear = minMaxDateItem?.maxDate.split("-")[0];
      const minYear = minMaxDateItem?.minDate.split("-")[0];
      const options = getMinMaxDateOptions(maxYear, minYear).sort((a, b) =>
        sortFn(b, a)
      );
      setYearOptions(options);
    }
  }, [missionsState.missions]);

  const onYearChangeHandler = (e) => {
    const { value } = e.target;
    dispatch(getMissionsByYear({ year: value }));
  };

  return (
    <div className={classes["dashboard-wrapper"]}>
      <Navbar />
      <Container>
        <label>Select Year</label>
        {yearOptions?.length > 0 && (
          <select onChange={onYearChangeHandler}>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        )}

        <Flexbox gap={20}>
          <MissionStatusPieChart />
          <CompanyMissionPieChart />
          <div>
            <AgGridReact
              rowData={[
                {
                  mission: "Voyager",
                  company: "NASA",
                  location: "Cape Canaveral",
                  date: "1977-09-05",
                  rocket: "Titan-Centaur ",
                  price: 86580000,
                  successful: true,
                },
                {
                  mission: "Apollo 13",
                  company: "NASA",
                  location: "Kennedy Space Center",
                  date: "1970-04-11",
                  rocket: "Saturn V",
                  price: 3750000,
                  successful: false,
                },
                {
                  mission: "Falcon 9",
                  company: "SpaceX",
                  location: "Cape Canaveral",
                  date: "2015-12-22",
                  rocket: "Falcon 9",
                  price: 9750000,
                  successful: true,
                },
              ]}
              columnDefs={columns}
            />
          </div>
        </Flexbox>
      </Container>
    </div>
  );
};

export default Dashboard;
