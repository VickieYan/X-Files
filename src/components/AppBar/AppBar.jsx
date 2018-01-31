import React, { Component } from 'react'
import HomeIcon from 'material-ui/svg-icons/action/account-circle'
import { connect } from 'react-redux'
import { search } from '../../actions/infoAction'
import { getSelfInfo } from '../../actions/userAction'
import Search from '../Search/Search'
import styles from './AppBar.scss'

@connect(
    state => state.info,
    { search, getSelfInfo },
)
class AppBar extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.getSelfInfo(() => { this.props.history.push('./edit') })
    }

    render() {
        const { search } = this.props
        return (
            <div className={styles.background}>
                <div className={styles.logo}>
                    <img alt="" src="../../../static/images/xfiles.png" />
                </div>
                <div className={styles.main}>
                    <ul className={styles.nav}>
                        <li onClick={() => { this.props.history.push('./') }}>首页</li>
                        <li>
                            <Search onSearch={search} />
                        </li>
                        <li className={styles.center}>
                            <span
                              className={styles.homeIcon}
                              onClick={this.handleClick}
                            >
                                <HomeIcon />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppBar
