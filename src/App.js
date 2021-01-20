import './App.css';
import Header from './components/Header.js';
import {Box, Grid, requirePropFactory} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Productcard from './components/Productcard';
import Carousel from 'react-elastic-carousel';
import Carouselimage from './components/Carouselimage';
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  heroimage: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../assets/heroimage.png'})`,
  },

}));


const App = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={0} md={3}>
        <Box display={{ xs: 'block', md: 'block', lg:'none' }}>
        
        
        </Box>
          
        </Grid>
        <Grid xs={0} sm={0} md ={9}>       
        <Content/>
        </Grid>
        
      </Grid>
      <Grid xs={0} sm={0} md={0}/>
    </Grid>
  );
};

export default App;