import React, { Component } from 'react'
import { blueGrey700, white } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Edit from '../Edit/Edit'
import styles from './App.scss'

class App extends Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: blueGrey700,
                // primary2Color: cyan700,
                // primary3Color: indigo300,
                // accent1Color: pinkA200,
                // accent2Color: grey100,
                // accent3Color: grey500,
                textColor: blueGrey700,
                alternateTextColor: white,
                // canvasColor: white,
                // borderColor: grey300,
                // disabledColor: fade(darkBlack, 0.3),
                // pickerHeaderColor: cyan500,
                // clockCircleColor: fade(darkBlack, 0.07),
                // shadowColor: fullBlack,
            },
            appBar: {
              height: 50,
            },
        })
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={styles.container}>
                    <Edit />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
