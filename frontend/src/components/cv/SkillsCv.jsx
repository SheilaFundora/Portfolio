import React, {useEffect} from 'react';
import TittleWhite from "@/components/cv/TittleWhite";
import Box from "@mui/material/Box";
import {getData} from "@/helper/crud/getData";
import {skill_end} from "@/constants/endpoints";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import {Typography} from "@mui/material";

const SkillsCv = () => {
  const [skillData, setSkillData] = React.useState([]);

  useEffect( () => {
    getData(skill_end, setSkillData)
  }, [])

  return (
    <Box>
      <TittleWhite title={'Skills'}/>
        <ul style={{listStyleType: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap"}}>
          {skillData.map((skill, index) => (
            <li key={skill.id} style={{
              display: "flex",
              alignItems: "center",
              marginTop: 4,
              marginRight: index < skillData.length - 1 ? "10px" : "0"
            }}>
              <Typography>{skill.name}</Typography>
              {index < skillData.length - 1 && (
                <Typography sx={{marginLeft: "10px"}}>|</Typography>
              )}
            </li>
          ))}
        </ul>
    </Box>
  );
};

export default SkillsCv;
