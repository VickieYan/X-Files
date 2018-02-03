import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import HomeIcon from 'material-ui/svg-icons/action/account-circle'
import { connect } from 'react-redux'
import { search } from '../../actions/infoAction'
import { getSelfInfo, logout } from '../../actions/userAction'
import Search from '../Search/Search'
import styles from './AppBar.scss'

@connect(
    state => state,
    { search, getSelfInfo, logout },
)
class AppBar extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBackhome = this.handleBackhome.bind(this)
    }

    handleLogout() {
        sessionStorage.removeItem('route')
        this.props.logout(() => {
            this.props.history.push('../login')
        })
    }

    handleBackhome() {
        const currentPath = sessionStorage.getItem('route')
        if (currentPath === './edit' || currentPath === './') {
            this.props.history.push('./')
        } else {
            console.log(sessionStorage.getItem('route'))
            this.props.history.push('../../')
        }
    }

    handleClick() {
        const currentPath = sessionStorage.getItem('route')
        if (currentPath === './edit' || currentPath === './') {
            this.props.history.push('./edit')
        } else {
            this.props.history.push('../edit')
        }
    }

    render() {
        const { search } = this.props
        return (
            <div className={styles.background}>
                <div className={styles.logo} onClick={this.handleBackhome}>
                    <img alt="" src="../../../static/images/xfiles.png" />
                </div>
                <div className={styles.main}>
                    <ul className={styles.nav}>
                        {/* <li onClick={() => { this.props.history.push('./') }}>首页</li> */}
                        {
                            this.props.showSearch &&
                            <li>
                                <Search onSearch={search} />
                            </li>
                        }
                        <li className={styles.center}>
                            <IconMenu
                              iconButtonElement={<IconButton><HomeIcon /></IconButton>}
                              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <MenuItem primaryText="personal center" onClick={this.handleClick} />
                                <MenuItem primaryText="Sign out" onClick={this.handleLogout} />
                            </IconMenu>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppBar
