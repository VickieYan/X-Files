import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../Login/Login'
import Home from '../Home/index'
import styles from './App.scss'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className={styles.container}>
                    <Home />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
