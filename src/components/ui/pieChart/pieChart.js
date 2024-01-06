import React from "react";
import PropTypes from "prop-types";
import { AgChartsReact } from "ag-charts-react";

const PieChart = (props) => {
  const { missions, title = "", angleKey, legendItemKey } = props;

  const pieOptions = {
    data: missions,
    title: { text: title },
    series: [{ type: "pie", angleKey, legendItemKey }],
  };

  return <AgChartsReact options={pieOptions} />;
};

PieChart.propTypes = {
  missions: PropTypes.array,
  title: PropTypes.string,
  angleKey: PropTypes.string,
  legendItemKey: PropTypes.string,
};

export default PieChart;
