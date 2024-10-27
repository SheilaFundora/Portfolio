import React from 'react';
import Box from "@mui/material/Box";

const TitleWhite = ({title}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      fontWeight="bold"
      textTransform="inherit"
      letterSpacing="0.5px"
      fontSize="11.5pt"
      lineHeight="20px"
      color="rgb(255, 255, 255)"
      marginTop={3}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="0.6032em"
        textAlign="center"
        borderRadius="2px"
        pt="3px"
        pb="3px"
        bgcolor="rgba(255, 255, 255, 0.07)"
      >
        <Box ml="0.35em" />
        {title}
      </Box>
    </Box>
  );
};

export default TitleWhite;