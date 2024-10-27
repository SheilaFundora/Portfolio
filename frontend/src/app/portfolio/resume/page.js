'use client'
import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import Box from "@mui/material/Box";
import DataResume from "@/components/Portfolio/resume/DataResume";
import {getDataPortfolio} from "@/helper/crud/getData";
import {category_end} from "@/constants/endpoints";

const Page = () => {
  const [categoryData, setCategoryData] = React.useState([]);

  useEffect( () => {
    getDataPortfolio(category_end, setCategoryData)
  }, [])


  return (
    <Box  sx={{paddingX: {xs: 4, md: '120px', mt:5},paddingY: 1, mt:3,  backgroundColor: 'rgb(247 248 252 )',
    }}>
      <NameSections name={'Resume'}/>

      <Grid container spacing={2} justifyContent="space-between" sx={{ mt: 3 }}>
        <Grid item xs={12} md={6} >
          {categoryData.slice(0, Math.ceil(categoryData.length / 2)).map((item) => (
            <DataResume key={item.id} {...item} />
          ))}
        </Grid>
        <Grid item xs={12} md={6} >
          {categoryData.slice(Math.ceil(categoryData.length / 2)).map((item) => (
            <DataResume key={item.id} {...item} />
          ))}
        </Grid>
      </Grid>

    </Box>
  );
};

export default Page;
