"use client"
import React, {useEffect} from 'react';
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import {Card, CardActionArea, CardContent, CardMedia, Tabs, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {getData} from "@/helper/crud/getData";
import {imgProject_end, project_end} from "@/constants/endpoints";
import Image from "next/image";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const getCategories = (projects) => {
  const categoryMap = new Map();

  projects.forEach(project => {
    if (project.category && !categoryMap.has(project.category)) {
      categoryMap.set(project.category, project.id);
    }
  });

  return Array.from(categoryMap, ([category, id]) => ({ id, category }));
};

const Page = () => {
  const [value, setValue] = React.useState(0);
  const [projectData, setProjectData] = React.useState([]);
  const [projectImageData, setProjectImageData] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const router = useRouter();

  console.log(projectData); // Debería devolver "lk;lk;l" o el valor correspondiente

  const handleCategory = async (cat) => {
    setCategories(cat);
  }

  useEffect(() => {
    getData(project_end, setProjectData)
    getData(imgProject_end, setProjectImageData)
  }, [])

  useEffect(() => {
    if (projectData.length > 0) {
      handleCategory(getCategories(projectData))
    }
  }, [projectData]);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  function getFirstImageByProjectID(project) {
    // Verificar si el proyecto tiene imágenes y devolver la URL de la primera imagen
    if (project && project.prosImgs && project.prosImgs.length > 0) {
      return project.prosImgs[0].imgs[0]; // Retorna la URL de la primera imagen
    } else {
      return null; // Si no hay imágenes, retorna null o puedes retornar una imagen por defecto
    }
  }


  const handleViewProject = (project) => {
    router.push(`/portfolio/project/${project.id}`);
  }

  const renderTabContent = (projects) => {
    return(
      <Box className={'d-flex justify-content-center flex-wrap'} sx={{ gap: '30px' }}>
        {projects.map((project, idx) => (
          <Box onClick={() => handleViewProject(project)} key={idx}>
            <Card sx={{ width: 330, height: 220, paddingBottom: 3, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
              <CardActionArea>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                  }}
                >

                  <div style={{width: '100%',  height: '150px', position: 'relative' }}>
                    <Image
                      src={getFirstImageByProjectID(project) || '/img/project.jpeg'}
                      alt="project"
                      layout='fill'
                      objectFit='cover'
                      priority
                    />
                  </div>


                </div>

                <CardContent sx={{textAlign: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body6" color="text.secondary">
                    {project.category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    )
  }

  return (
    <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
      <NameSections name={'Proyectos'}/>

      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{borderColor: 'divider', backgroundColor: 'primary'}}>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            aria-label="wrapped label tabs example"
            indicatorColor="none"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(128,128,128,0.55)",
              "& .Mui-selected": {
                color: "#05097c !important",
                fontWeight: "bold",
              }
            }}
          >
            <Tab label="All project" {...a11yProps(0)} />

            {categories.map((category, idx) => (
              <Tab label={category.category} {...a11yProps(category.category)} key={idx} />
            ))}
          </Tabs>
        </Box>
      </Box>

      <Box>
        <CustomTabPanel value={value} index={0}>
          {renderTabContent(projectData)}
        </CustomTabPanel>

       {/* xq funciona esto, los tab cada vez q se selecciona uno se pone su valo, ejemplo hay 3 tab
        empieza en 0, 1 , 2. Estos seran los value, luego abao index debe coincidir con vakue para q sepa
        a cual pertence, x lo q el map tiene indice 0 y losto */}


        {categories.map((category, idx) => (
          <CustomTabPanel value={value} index={idx+1} key={idx}>
            {renderTabContent(projectData.filter(proj => proj.category === category.category))}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Page;
