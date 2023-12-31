"use strict";

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import './index.css'

var hours = [
  "Risk score",
  "Genetic",
  "MULTI-OMIC",
  "ACC",
  "CBE",
  "IFG",
  "FP",
  "IFG",
  "PCC",
  "PHG",
  "STG",
  "TCX",
  "PCC",
  "ACC",
  "IFG",
  "ACC",
  "PCC",
  "Genetic",
  "Genetic",
  "IFG",
  "MULTI",
  "Genetic",
  "IFG",
  "MULTI",
];

var days = [
  "HLAC",
  "APP",
  "APOE",
  "HLA-B",
  "MYO5A",
  "PLEC",
  "HLA-DRB1",
  "MADD",
  "ABCA8",
  "PEPD",
];

var rawData = [
  [0, 0, 10],
  [0, 1, 1],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
  [0, 5, 0],
  [0, 6, 0],
  [0, 7, 0],
  [0, 8, 0],
  [0, 9, 0],
  [0, 10, 0],
  [0, 11, 2],
  [0, 12, 4],
  [0, 13, 1],
  [0, 14, 1],
  [0, 15, 3],
  [0, 16, 4],
  [0, 17, 6],
  [0, 18, 4],
  [0, 19, 4],
  [0, 20, 3],
  [0, 21, 3],
  [0, 22, 2],
  [0, 23, 5],
  [1, 0, 7],
  [1, 1, 0],
  [1, 2, 0],
  [1, 3, 0],
  [1, 4, 0],
  [1, 5, 0],
  [1, 6, 0],
  [1, 7, 0],
  [1, 8, 0],
  [1, 9, 0],
  [1, 10, 5],
  [1, 11, 2],
  [1, 12, 2],
  [1, 13, 6],
  [1, 14, 9],
  [1, 15, 11],
  [1, 16, 6],
  [1, 17, 7],
  [1, 18, 8],
  [1, 19, 12],
  [1, 20, 5],
  [1, 21, 5],
  [1, 22, 7],
  [1, 23, 2],
  [2, 0, 1],
  [2, 1, 1],
  [2, 2, 0],
  [2, 3, 0],
  [2, 4, 0],
  [2, 5, 0],
  [2, 6, 0],
  [2, 7, 0],
  [2, 8, 0],
  [2, 9, 0],
  [2, 10, 3],
  [2, 11, 2],
  [2, 12, 1],
  [2, 13, 9],
  [2, 14, 8],
  [2, 15, 10],
  [2, 16, 6],
  [2, 17, 5],
  [2, 18, 5],
  [2, 19, 5],
  [2, 20, 7],
  [2, 21, 4],
  [2, 22, 2],
  [2, 23, 4],
  [3, 0, 7],
  [3, 1, 3],
  [3, 2, 0],
  [3, 3, 0],
  [3, 4, 0],
  [3, 5, 0],
  [3, 6, 0],
  [3, 7, 0],
  [3, 8, 1],
  [3, 9, 0],
  [3, 10, 5],
  [3, 11, 4],
  [3, 12, 7],
  [3, 13, 14],
  [3, 14, 13],
  [3, 15, 12],
  [3, 16, 9],
  [3, 17, 5],
  [3, 18, 5],
  [3, 19, 10],
  [3, 20, 6],
  [3, 21, 4],
  [3, 22, 4],
  [3, 23, 1],
  [4, 0, 1],
  [4, 1, 3],
  [4, 2, 0],
  [4, 3, 0],
  [4, 4, 0],
  [4, 5, 1],
  [4, 6, 0],
  [4, 7, 0],
  [4, 8, 0],
  [4, 9, 2],
  [4, 10, 4],
  [4, 11, 4],
  [4, 12, 2],
  [4, 13, 4],
  [4, 14, 4],
  [4, 15, 14],
  [4, 16, 12],
  [4, 17, 1],
  [4, 18, 8],
  [4, 19, 5],
  [4, 20, 3],
  [4, 21, 7],
  [4, 22, 3],
  [4, 23, 0],
  [5, 0, 2],
  [5, 1, 1],
  [5, 2, 0],
  [5, 3, 3],
  [5, 4, 0],
  [5, 5, 0],
  [5, 6, 0],
  [5, 7, 0],
  [5, 8, 2],
  [5, 9, 0],
  [5, 10, 4],
  [5, 11, 1],
  [5, 12, 5],
  [5, 13, 10],
  [5, 14, 5],
  [5, 15, 7],
  [5, 16, 11],
  [5, 17, 6],
  [5, 18, 0],
  [5, 19, 5],
  [5, 20, 3],
  [5, 21, 4],
  [5, 22, 2],
  [5, 23, 0],
  [6, 0, 1],
  [6, 1, 0],
  [6, 2, 0],
  [6, 3, 0],
  [6, 4, 0],
  [6, 5, 0],
  [6, 6, 0],
  [6, 7, 0],
  [6, 8, 0],
  [6, 9, 0],
  [6, 10, 1],
  [6, 11, 0],
  [6, 12, 2],
  [6, 13, 1],
  [6, 14, 3],
  [6, 15, 4],
  [6, 16, 0],
  [6, 17, 0],
  [6, 18, 0],
  [6, 19, 0],
  [6, 20, 1],
  [6, 21, 2],
  [6, 22, 2],
  [6, 23, 6],
];

var data = rawData.map(function (item) {
  return {
    hour: hours[item[1]],
    day: days[item[0]],
    size: item[2],
    color:'green'
  };
});

function getData() {
  return data;
}

const ChartExample = () => {
  const [options, setOptions] = useState({
    autoSize: true,
    data: getData(),
    title: {
      text: "Gene Comparison Tool",
      fontSize: 22,
    },
    subtitle: {
      text: "RNA Differential Expression",
      fontSize: 18,
    },
    series: [
      {
        type: "scatter",
        xKey: "hour",
        xName: "Time",
        yKey: "day",
        yName: "Day",
        sizeKey: "size",
        sizeName: "Commits",
        title: "Punch Card",
        marker: {
          size: 0,
          maxSize: 30,
          fill: "rgb(236, 71, 105)",
          // fills:['#c16068', '#a2bf8a', '#ebcc87'],
          // fill: ['red', 'blue'],
          fillOpacity: 0.85,
          strokeOpacity: 0.85,
        },
      },
    ],
    axes: [
      {
        position: "bottom",
        type: "category",
        gridStyle: [
          {
            stroke: "rgba(0,0,0,0.2)",
            lineDash: [0, 5, 0],
          },
        ],
        paddingInner: 0.2,
        paddingOuter: 0.3,
        tick: {
          color: "black",
        },
        line: {
          color: undefined,
        },
      },
      {
        position: "left",
        type: "category",
        gridStyle: [],
        paddingInner: 0.2,
        paddingOuter: 0.3,
        tick: {
          color: "black",
        },
        line: {
          color: undefined,
        },
      },
    ],
  });

  return (
    <div style={{display:"flex"}}>
      <div style={{position:'relative', top:'10px', fontSize:'13px'}}>
      <table class="table"
      //  style={{height:'100%'}}
       >
  <thead>
    <tr style={{}}>
      <th scope="col">No.</th>
      <th scope="col">RiskScore</th>
      <th scope="col">Genetics</th>
      <th scope="col">MultiOmic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>142k</td>
      <td>241</td>
      <td>HLAC</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>231</td>
      <td>244</td>
      <td>APP</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>345</td>
      <td>3453</td>
      <td>APOE</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>345</td>
      <td>353</td>
      <td>HLA-B</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>343</td>
      <td>352</td>
      <td>MYO5A</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3532</td>
      <td>3453</td>
      <td>PLEC</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3543</td>
      <td>3453</td>
      <td>HLA-DRB1r</td>
    </tr>
  </tbody>
</table>
      </div>
      <div style={{width:"100%", height:'675px'}}>
  <AgChartsReact options={options} />
  </div>
  </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);
