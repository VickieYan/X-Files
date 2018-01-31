import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
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
                        <li onClick={() => { this.props.history.push('./') }}>首页</li>
                        <li>
                            <Search />
                        </li>
                        <li className={styles.center}>
                            <IconMenu
                              iconButtonElement={<IconButton><HomeIcon /></IconButton>}
                              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <MenuItem primaryText="personal center" onClick={() => { this.props.history.push('./edit') }} />
                                <MenuItem primaryText="Sign out" />
                            </IconMenu>
                            {/* <span
                              className={styles.homeIcon}
                              onClick={() => { this.props.history.push('./edit') }}
                            >
                                <HomeIcon />
                            </span> */}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppBar
