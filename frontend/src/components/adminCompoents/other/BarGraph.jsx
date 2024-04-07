"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {Card, CardContent, CardHeader} from "@mui/material";

const monthsAbbreviated = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];


const data = [4, 3, 5, 1, 6, 3, 2, 5, 6, 4, 3, 5];


export const BarGraph = ({sx='100%'}) => {

  return (
    <Card sx={sx}>
      <CardHeader
        title="Views"
      />
      <CardContent>
        <BarChart
          xAxis={[{ scaleType: 'band', data: monthsAbbreviated }]}
          series={[{ data }]}
          width={650}
          height={230}

        />
      </CardContent>
    </Card>

  );
};
