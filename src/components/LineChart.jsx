import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "red",
        borderColor: "pink",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={3} style={{ color: "#434343" }}>
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title
            level={4}
            className="price-change"
            style={{ color: "#434343" }}
          >
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title
            level={4}
            style={{ color: "#434343" }}
            className="current-price"
          >
            Current Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} style={{ marginBottom: 50 }} />
    </>
  );
};

export default LineChart;
