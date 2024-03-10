import React from 'react';
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const CarrouselImage = ({items}) => {
    return (
        <Carousel sx={{
            width: {xs: '100%', md: '65%'},
            height: {xs: '300px', md: '400px'},
            border: 'none',
            justifyContent: 'flex-start',
        }}
                  indicatorIconButtonProps={{ style: { display: 'none' } }}
        >
            {items.map((item, i) => (
                <div style={{width: '100%', paddingTop: '100%'}}>
                    <Image
                        src={item.src}
                        alt={'Logotipo'}
                        layout="fill"
                        key={i}
                        objectFit="contain"
                        objectPosition="top center"
                        style={{borderRadius: '5px'}}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default CarrouselImage;