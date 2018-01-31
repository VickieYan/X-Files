import React, { Component } from 'react'
import HomeIcon from 'material-ui/svg-icons/action/account-circle'
import { connect } from 'react-redux'
import { search } from '../../actions/infoAction'
import Search from '../Search/Search'
import styles from './AppBar.scss'

@connect(
    state => state.info,
    { search },
)
class AppBar extends Component {
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
                              onClick={() => { this.props.history.push('./edit') }}
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
