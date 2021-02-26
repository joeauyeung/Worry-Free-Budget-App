import React from "react";
import Login from "../src/login/Login";
import Header from "../src/header/Header";
import {createMuiTheme, ThemeProvider} from "@material-ui/core"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196f3"
        },
        secondary: {
            main: "#ef5350"
        }
    }
})

function App() {
    return <div>
        <Header/>
        <Login/>
    </div>
}

export default App;