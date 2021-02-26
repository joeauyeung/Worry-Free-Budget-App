import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography"


function Header() {
    return <div>
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Typography varient="h3">
                    Worry Free Budget
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
}

export default Header;