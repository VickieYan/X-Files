import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../Login/Login'
import Home from '../Home/index'
import Edit from '../Edit/Edit'
import styles from './App.scss'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className={styles.container}>
                    <Edit />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
