'use client';
import SearchAppBar from '@/components/AppBar';
import TourCard from '@/components/TourCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import cities from '@/data.json'
import React from 'react';



export default function Home() {
  return (
    <div>
      <SearchAppBar/>
      <Container sx={{marginY:5}}>
        {cities.map((city)=>(
        < React.Fragment  key={city.id}>
          <Typography
       
          variant="h6"
          component="h4"
          marginTop={5}
          marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>
        <Grid container spacing={5} >
          {city.tours.map((tour)=>(
            // <Grid item key={tour.id} xs={12} sm={6} md={3}>
              <TourCard tour={tour}/>

            // </Grid>
          ))}
        </Grid>  
        </React.Fragment>
      
        ))}
      

      </Container>
     
    </div>
  );
}
