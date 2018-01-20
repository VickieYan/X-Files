import React, { Component } from 'react'
import Search from '../Search/Search'
import styles from './AppBar.scss'

class AppBar extends Component {
    render() {
        return (
            <div className={styles.background}>
                logo
                <div>
                    <Search />
                </div>
            </div>
        )
    }
}

export default AppBar
