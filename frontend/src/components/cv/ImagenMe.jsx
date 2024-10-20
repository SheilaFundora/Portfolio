import React, {useEffect} from 'react';
import Image from "next/image";
import Box from "@mui/material/Box";
import {getDataPerson} from "@/helper/crud/getDataPerson";
import {getData} from "@/helper/crud/getData";
import {images_end} from "@/constants/endpoints";

const ImagenMe = () => {
  const [imagesData, setImagesData] = React.useState([]);
  const imgMe = (imagesData || []).find(item => item.section === 'Me' || item.section === 'me');

  useEffect( () => {
    getData(images_end, setImagesData)

  }, [])

  return (
    <Box className="image-container">
      {imgMe && imgMe.imgs &&
        <Image
          src={imgMe.imgs}
          alt="me"
          layout="responsive"
          width={60}
          height={60}
          objectFit="cover"
        />
      }
    </Box>
  );
};

export default ImagenMe;
