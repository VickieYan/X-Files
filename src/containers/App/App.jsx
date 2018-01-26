import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey700, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import Login from '../Login/Login'
// import Detail from '../Detail/index'
// import Home from '../Home/Home'
// import Profile from '../Profile/Profile'
import './App.scss'

class App extends Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: blueGrey700,
                textColor: blueGrey700,
                alternateTextColor: white,
            },
            appBar: {
              height: 50,
            },
        })
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <BrowserRouter>
                    <div>
                        <Login />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default App
