import Box from "@mui/material/Box";
import FirstSection from "@/components/pageSections/FirstSection";
import NameSections from "@/components/pageSections/NameSections";
import About from "@/components/pageSections/About";
import DataAbout from "@/components/pageSections/DataAbout";

export default function Home() {
  return (
      <div>
          <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
              <FirstSection/>

              <NameSections name={'Acerca de mi'}/>
              <About/>
          </Box>


          <DataAbout/>

          <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
              <NameSections name={'Habilidades'}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <NameSections name={'Servicios'}/>
          </Box>


      </div>
  );
}
