import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    title: {
        textAlign: "center",
        fontSize: "3vw",
        paddingTop: "5%"
    }
})

function Login() {
    const classes = useStyles();
    return(
        <div>
        <h1 className={classes.title}>Worry Free Money Budget Tracker</h1>
        <h3>Based on the book "Worry-Free Money: The Guilt-free Approach to Managing Your Money and Your Life"
        by Shannon Lee Simmons</h3>
        <Button variant="contained" color="secondary"> Login / signup with Google </Button>
        </div>

    )
}

export default Login;