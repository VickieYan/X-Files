import React, { Component } from 'react'
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
    { search, getSelfInfo, logout, uploadData },
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
                avatar: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
                indexShowPhotograph: 'http://img.hb.aicdn.com/462f07883ed8a00729b89e0e11da56264f5d6a391884cb-EKAEeC_fw658',
                photograph1: 'http://img.hb.aicdn.com/878bcfdf964345f2aba707a01bb87c84a5fac10c1f4f0-tzoR1H_fw658',
                photograph2: 'http://img.hb.aicdn.com/a117393c570026946b9184daa9715253eb46d1067c560-er7jVl_fw658',
                photograph3: 'http://img.hb.aicdn.com/a8d1d7cacb6175a19ba6df6cd87bec4f66ac4bb4a87b4-SztuMm_fw658',
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
                                <MenuItem primaryText="个人中心" onClick={this.handleClick} />
                                <MenuItem primaryText="退出" onClick={this.handleLogout} />
                            </IconMenu>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppBar
