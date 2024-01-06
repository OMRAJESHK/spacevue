import React, { useState } from "react";
import PropTypes from "prop-types";
import { AgChartsReact } from "ag-charts-react";

function getData1() {
  return [
    {
      company: "companies",
      nasa: 140,
      esa: 16,
      jaxa: 14,
      isro: 12,
    },
    {
      company: "companies",
      nasa: 124,
      esa: 20,
      jaxa: 14,
      isro: 12,
    },
    {
      company: "companies",
      nasa: 112,
      esa: 20,
      jaxa: 18,
      isro: 14,
    },
    {
      company: "companies",
      nasa: 18,
      esa: 24,
      jaxa: 14,
      isro: 144,
    },
  ];
}

const BarChart = (props) => {
  const [options, setOptions] = useState({
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData1(),
    series: [
      {
        type: "bar",
        xKey: "company",
        yKey: "nasa",
        yName: "Nasa",
      },
      {
        type: "bar",
        xKey: "company",
        yKey: "esa",
        yName: "ESA",
      },
      {
        type: "bar",
        xKey: "company",
        yKey: "jaxa",
        yName: "JAXA",
      },
      {
        type: "bar",
        xKey: "company",
        yKey: "isro",
        yName: "ISRO  ",
      },
    ],
  });
  return <AgChartsReact options={options} />;
};

BarChart.propTypes = {};

export default BarChart;
