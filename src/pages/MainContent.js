import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    contents: {
        width: "100%",
        height: "100%"
    }
});

const MainContent = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.contents}>
            <Grid container
                  direction={"column"}
                  justify={"center"}
                  alignItems={"center"}>
                <span>{props.contentBody}</span>
                <span>{props.contentBody}</span>
                <span>{props.contentBody}</span>
                <span>{props.contentBody}</span>
                <span>{props.contentBody}</span>
            </Grid>

        </Paper>
    );
}

MainContent.prototype = {
    contentBody: PropTypes.string,
}

export default MainContent