'use client'
import React from 'react';
import Box from "@mui/material/Box";
import TableAdmin from "@/components/adminCompoents/other/TableAdmin";
import TablePerson from "@/app/admin/person/TablePerson";

const Page = () => {

  return (
    <Box sx={{ marginTop: 4}}>
      <TablePerson />
    </Box>
  );
};

export default Page;
