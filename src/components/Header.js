import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },

    wishlistButton: {
        color: '#555555',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '14px',
        marginRight: '5px',
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="#ffff">
            <Toolbar  >
                <Typography className={classes.typographyStyles}>
                    FabYou
                </Typography>
                <IconButton classes={{ label: classes.wishlistButton }}>
                    <PersonIcon />
                    <div>
                        Profile
                    </div>
                </IconButton>

                <IconButton classes={{ label: classes.wishlistButton }}>
                    <FavoriteBorderIcon />
                    <div>
                        Wishlist
                    </div>
                </IconButton>

                <IconButton classes={{ label: classes.wishlistButton }}>
                    <ShoppingCartIcon />
                    <div>
                        Cart
                    </div>
                </IconButton>




            </Toolbar>
        </AppBar>

    );
}

export default Header;