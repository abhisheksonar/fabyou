import React from 'react';
import Productcard from './Productcard';
import {Grid} from '@material-ui/core';
import appareldata from './constants';

const Content = () => {

    const getapparelCard= (apparelobject) => {
        
        return(
            <Grid item xs={6} sm={4} md={3}>
            <Productcard{...apparelobject}/>
            </Grid>
        ) 
        
    };
    return (
        <Grid container spacing={2}>
            
            {appareldata.map(apparelobject => getapparelCard(apparelobject))}
            
            
        </Grid>
    );

};

export default Content;