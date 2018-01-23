import React, { Component } from 'react'
import HomeIcon from 'material-ui/svg-icons/action/account-circle'
import Search from '../Search/Search'
import styles from './AppBar.scss'

class AppBar extends Component {
    render() {
        return (
            <div className={styles.background}>
                <div className={styles.logo}>
                    <img alt="" src="../../../static/images/xfiles.png" />
                </div>
                <div className={styles.main}>
                    <ul className={styles.nav}>
                        <li>首页</li>
                        <li>
                            <Search />
                        </li>
                        <li className={styles.center}>
                            <span className={styles.homeIcon}><HomeIcon /></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppBar
