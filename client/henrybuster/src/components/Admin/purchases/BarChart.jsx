import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import BarChartFormat from "./BarChartFormat";
import BarChartGenres from "./BarChartGenres";

const BarChart = () => {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Row>
        <BarChartFormat />
      </Row>
      <Row>
        <BarChartGenres />
      </Row>
    </Container>
  );
};

export default BarChart;
