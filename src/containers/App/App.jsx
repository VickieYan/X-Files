import React, { Component } from 'react'
import styles from './App.scss'

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.hello}>hello, world</h1>
            </div>
        )
    }
}

export default App
