import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey700, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Detail from '../Detail/index'
import Edit from '../Edit/Edit'
import Profile from '../Profile/Profile'
import styles from './App.scss'

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
                <div className={styles.container}>
                    <Profile />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
