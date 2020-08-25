import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

/**
 * スタイル
 * @type {(props?: any) => ClassNameMap<"root"|"menuButton"|"title">}
 */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

/**
 * アプリケーションのメニューバー
 * @param title
 * @param isAuth
 * @param onLogin
 * @param onLogout
 * @returns {JSX.Element}
 * @constructor
 */
const MenuAppBar = ({ title, isAuth, onLogin, onLogout}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>

                    {isAuth && (
                        <Button color="inherit" onClick={onLogout}>Logout</Button>
                    )}
                    {!isAuth && (
                        <Button color="inherit" onClick={onLogin}>Login</Button>
                    )}
                    <IconButton color="inherit" aria-label="link" href="http://www.yahoo.co.jp" target="_blank">
                        <HelpIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuAppBar.protoType = {
    title: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
}

MenuAppBar.defaultProps = {
    /**
     * title
     */
    title: 'no Title'
}

export default MenuAppBar