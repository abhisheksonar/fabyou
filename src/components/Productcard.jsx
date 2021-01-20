import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(() => ({
    root: {
       // minWidth:"200px",
        //backgroundColor:'#F4F2E5',
        //height:"425px",
        marginRight: "10px",
        marginLeft: "10px",
        marginTop: "20px",  
        borderRadius: "0.6rem",
        overflow:"hidden",
        boxShadow: "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);",
        '&:hover':{
          },
        cursor:"pointer",
        //color: "#555555",
    '&:hover': {
       //color: "#f7df1e",
       boxShadow: "0 13px 60px -5px hsla(240, 30.1%, 28%, 0.50), 0 8px 32px -8px hsla(0, 0%, 0%, 0.5), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.09);",
    },
    },
    media: {
        height: "250px",
        //width: "auto",
        objectFit: "inherit",
        
      },
      similarButton: {
          width: "100%",
      },
    subtitle: {
      fontSize: "0.85rem",
      paddingBottom:"5px"
    },
    cardheader: {
        margin:"2px",
        paddingLeft: "10px",
        paddingBottom:"1px",
        //backgroundColor:"#8f8f8f",
        paddingTop: "1px",
        
    },

    cardcontent: {
        paddingTop: "1px",
        paddingLeft: "10px",
        paddingBottom: "5px",
    },
    cardactions: {
        //backgroundColor: "#8f8f8f"

    },
    originalprice:{
        paddingLeft: "5px",
        textDecoration:"line-through",
        fontSize:"0.75rem",
    },
    discount:{
        paddingLeft: "5px",
        fontSize:"0.75rem",
        color:"#A12725"
    },
    discountedprice:{
        fontWeight: "bold",
    },
    cardheader: {
        color: "#A12725",
        paddingBottom: '2px',
        paddingLeft:'10px',
        fontWeight:'bold'
    },


  }));

const Productcard = (props) => {
    const classes = useStyles();
const {title, description, cardimageUrl,originalPrice, discountedPrice, discount} = props;
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={cardimageUrl}
          //title="Bagru Print Saree"
        />
        <CardHeader className={classes.cardheader} 
        title={title}
        titleTypographyProps={{variant:'subtitle1' }} 
       //subheaderTypographyProps={{variant:'subtitle2' }}
        //title ="Bagru Print Saree"
        //subheader="Bagru Print Saree"
        action={
            <IconButton aria-label="Add to Wishlist">
              <FavoriteBorderIcon/>
            </IconButton>
        }
      />
      
      <CardContent className={classes.cardcontent}>
          
        <Typography className={classes.subtitle} color="textSecondary">
          {description}
        </Typography>
        <Typography>
            <span className={classes.discountedprice}>{discountedPrice} </span>
            <span className={classes.originalprice}>{originalPrice} </span>
            <span className={classes.discount}>{discount} </span>
        </Typography>
        <Typography>
        
        </Typography>
      </CardContent>
      <CardActions className={classes.cardactions}>
        <Button className={classes.similarButton} variant="outlined" color="primary">
            View Similar
        </Button>
      </CardActions>
    </Card>
  )
}

export default Productcard;