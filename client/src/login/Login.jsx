import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {FcGoogle} from "react-icons/fc";


const useStyles = makeStyles({
    title: {
        textAlign: "center",
        fontSize: "3vw",
        paddingTop: "5%"
    },
    subtitle: {
        textAlign: "center",
        fontSize: "1.5vw"
    },
    loginButton: {
        position: "absolute",
        margin: "-20px -50px",
        left: "45%",
        marginTop: "3%"

    },
    loginIcon: {
        height: "auto",
        width: "2vw",
        paddingRight: "5%",
    }
})



function Login() {
    const classes = useStyles();
    return(
        <div>
        <h1 className={classes.title}>Worry Free Money Budget Tracker</h1>
        <h3 className={classes.subtitle}>Based on the book "Worry-Free Money: The Guilt-free Approach to Managing Your Money and Your Life"
        by Shannon Lee Simmons</h3>
        <Button variant="contained" className={classes.loginButton}><FcGoogle className={classes.loginIcon} />  Login / signup with Google </Button>
        </div>

    )
}

export default Login;