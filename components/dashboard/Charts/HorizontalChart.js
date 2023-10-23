import React, { Component } from "react";
// import Chart from "react-apexcharts";
import Chart from "react-apexcharts"
import styles from "./ChartStyles.module.css";

class HorizontalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 1,
            horizontal: true,
            distributed: true,
            barHeight: "40%",
          },
        },
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: Object.keys(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
        colors: [
          "#00FFFF",
          "#0000FF",
          "#008000",
          "#FFA500",
          "#800080",
          "#FF0000",
          "#FFFF00",
        ],
      },
      series: [
        {
          name: "featured",
          data: Object.values(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
      ],
    };
  }
   

  render() {
    return (
      <div className={styles.chartcontainer}>
        <h2>Performance</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }

}
export default HorizontalChart;
