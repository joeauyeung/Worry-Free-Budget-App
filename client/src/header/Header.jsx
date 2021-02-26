import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    header: {
        paddingLeft: "1%",
        fontSize: "1.2vw"
    }
})


function Header() {
    const classes = useStyles();
    return <div>
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Typography className={classes.header}>
                    Worry Free Budget
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
}

export default Header;