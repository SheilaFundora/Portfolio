import React from 'react';
import {Grid} from "@mui/material";
import NameSections from "@/components/Portfolio/pageSections/NameSections";

const InformationsProyect = () => {
    return (
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} md={4}>
                <div>
                    <NameSections name={'Tecnologias'}/>

                    <p className={'text-style '} style={{textAlign: 'left'}}>
                        Html, Css, Js, Boostrap, Python, Django, Postgresql
                    </p>
                </div>
                <div>
                    <NameSections name={'Objective'}/>

                    <p className={'text-style'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam
                        enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
                    </p>
                </div>
            </Grid>

            <Grid item xs={12} md={7} >
                <div>
                    <NameSections name={'Descripción'}/>
                    <p className={'text-style'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
                        dignissimos
                        cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt,
                        fugit
                        eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur
                        adipisicing
                        elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus
                        similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis
                        labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero
                        tenetur neque consequatur ea.
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};

export default InformationsProyect;