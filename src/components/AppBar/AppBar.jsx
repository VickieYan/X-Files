import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import HomeIcon from 'material-ui/svg-icons/action/account-circle'
import { connect } from 'react-redux'
import { search } from '../../actions/infoAction'
import { getSelfInfo, logout, uploadData } from '../../actions/userAction'
import Search from '../Search/Search'
import styles from './AppBar.scss'

@connect(
    state => state,
    {
 search, getSelfInfo, logout, uploadData,
},
)
class AppBar extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBackhome = this.handleBackhome.bind(this)
        this.handleILike = this.handleILike.bind(this)
        this.handleLikeMe = this.handleLikeMe.bind(this)
    }

    handleLogout() {
        sessionStorage.removeItem('route')
        this.props.logout(() => {
            this.props.uploadData({
                redirectTo: './login',
                msg: 0,
                fetchUser: -1,
                // 默认数据
                shortName: '',
                fullName: '',
                displayName: '',
                email: '',
                employeeID: '',
                domain: null,
                company: '',
                telephoneNumber: '',
                title: '',
                groups: '',
                // 用户填写
                avatar: '../static/images/default/avatar.jpg',
                indexShowPhotograph: '../static/images/default/pic1.jpg',
                photograph1: '../static/images/default/pic2.jpg',
                photograph2: '../static/images/default/pic3.jpg',
                photograph3: '../static/images/default/pic4.jpg',
                sex: null,
                isSingle: null,
                phoneNumber: '',
                hometown: '',
                signature: '',
                github: '',
                linkedin: '',
                twitter: '',
                hobbies: [],
                skills: [],
                contributes: [
                    {
                        startTime: new Date(),
                        endTime: new Date(),
                        duty: '',
                    },
                ],
            })
            this.props.history.push('../login')
        })
    }

    handleBackhome() {
        const currentPath = sessionStorage.getItem('route')
        if (currentPath === './edit' || currentPath === './') {
            this.props.history.push('./')
        } else {
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

    handleILike() {
        const currentPath = sessionStorage.getItem('route')
        if (currentPath === './iLike' || currentPath === './edit' || currentPath === './') {
            this.props.history.push('./iLike')
        } else {
            this.props.history.push('../iLike')
        }
        this.props.history.push('./iLike')
    }

    handleLikeMe() {
        const currentPath = sessionStorage.getItem('route')
        if (currentPath === './likeMe' || currentPath === './edit' || currentPath === './') {
            this.props.history.push('./likeMe')
        } else {
            this.props.history.push('../likeMe')
        }
        this.props.history.push('./likeMe')
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
                        <li onClick={this.handleBackhome}>首页</li>
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
                                <MenuItem primaryText="个人中心" onClick={this.handleClick} />
                                <MenuItem primaryText="谁赞过我" onClick={this.handleLikeMe} />
                                <MenuItem primaryText="我赞过谁" onClick={this.handleILike} />
                                <MenuItem primaryText="退出" onClick={this.handleLogout} />
                            </IconMenu>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(AppBar)
