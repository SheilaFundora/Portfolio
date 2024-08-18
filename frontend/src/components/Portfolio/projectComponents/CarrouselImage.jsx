import React from 'react';
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const CarrouselImage = ({projectImages}) => {
    return (
        <Carousel sx={{
            width: {xs: '100%', md: '65%'},
            height: {xs: '300px', md: '400px'},
            border: 'none',
            justifyContent: 'flex-start',
            marginBottom: '30px'
        }}
                  indicatorIconButtonProps={{ style: { display: 'none' } }}
        >
          {
            projectImages !== undefined ? ( projectImages.map((item, i) => (
                <div style={{width: '100%', paddingTop: '100%'}}>
                    <Image
                        src={item.imgs[0]}
                        alt={'project image'}
                        layout="fill"
                        key={i}
                        objectFit="contain"
                        objectPosition="top center"
                        style={{borderRadius: '5px'}}
                    />
                </div>
              ))
            ) : ''
          }
        </Carousel>
    );
};

export default CarrouselImage;
