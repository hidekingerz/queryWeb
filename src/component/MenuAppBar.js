import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MenuAppBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>

                    {props.isAuth && (
                        <Button color="inherit">Logout</Button>
                    )}
                    {!props.isAuth && (
                        <Button color="inherit">Login</Button>
                    )}
                    <IconButton color="inherit" aria-label="link" href="http://www.yahoo.co.jp" target="_blank">
                        <HelpIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuAppBar.prototype = {
    title: PropTypes.string,
    isAuth: PropTypes.bool
}

export default MenuAppBar