import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import { getUserInfo, current } from '../../actions/infoAction'
import { AppBar } from '../../components/'
import Main from './Main'
import About from './About'
import Hobby from './Hobby'
import Skill from './Skill'
import Work from './Work'
import styles from './Profile.scss'

@connect(
    state => state.info,
    { getUserInfo, current },
)
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'main',
            group: [{
                name: 'main',
                component: Main,
            }, {
                name: 'about',
                component: About,
            }, {
                name: 'hobby',
                component: Hobby,
            }, {
                name: 'skill',
                component: Skill,
            }, {
                name: 'work',
                component: Work,
            }],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // 根据短名向服务端请求用户信息
        const path = this.props.location.pathname
        const index = path.lastIndexOf('/') + 1
        const shortName = path.slice(index)
        this.props.getUserInfo(shortName)

        // focus here
        const currentPath = this.props.location.pathname
        const pathIndex = currentPath.lastIndexOf('/')
        sessionStorage.setItem('route', `.${currentPath.slice(pathIndex)}`)
    }

    handleClick(name) {
        this.setState({ currentPage: name })
    }

    render() {
        const { currentPage, group } = this.state
        const { current } = this.props
        return (
            <div>
                <AppBar {...this.props} />
                <div className={styles.wrap}>
                    <CSSTransitionGroup
                      transitionName="fade"
                      transitionEnterTimeout={200}
                      transitionLeaveTimeout={200}
                    >
                        {group.map((item, index) => {
                            const Specifystory = item.component
                            return currentPage === item.name &&
                                <Specifystory
                                  key={index}
                                  onClick={this.handleClick}
                                  data={current}
                                />
                        })}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Profile
