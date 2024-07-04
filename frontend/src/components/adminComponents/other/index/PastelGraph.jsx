'use client'
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader} from "@mui/material";

const datas = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 2800 },
  { label: 'Group E', value: 908 },
];

const PastelGraph = ({skill}) => {

  const groupCounts = skill.reduce((acc, item) => {
    acc[item.group] = (acc[item.group] || 0) + 1;
    return acc;
  }, {});

  const transformedData = Object.entries(groupCounts).map(([group, count]) => ({
    label: group,
    value: count,
  }));


  return (
    <Card sx={'100%'}>
      <CardHeader
        title="Skiils"
      />
      <CardContent>
        <PieChart
          series={[{data: transformedData}]}
          width={370}
          height={190}
          slotProps={{
            legend: { hidden: true },
          }}
        />

      </CardContent>
    </Card>
  );
};

export default PastelGraph;
