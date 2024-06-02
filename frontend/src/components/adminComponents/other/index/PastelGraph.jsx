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

const PastelGraph = () => {
  return (
    <Card sx={'100%'}>
      <CardHeader
        title="Skiils"
      />
      <CardContent>
        <PieChart
          series={[{data: datas}]}
          width={370}
          height={190}
          slotProps={{
            legend: { hidden: true },
          }}        />

      </CardContent>
    </Card>
  );
};

export default PastelGraph;
