import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login, check } from '../../actions/userAction'

@connect(
    state => state.user,
    { login, check },
)

// 检测路由
class AuthRoute extends Component {
    componentDidMount() {
        const currentPath = sessionStorage.getItem('route')
        this.props.check(() => { this.props.history.push(currentPath || this.props.redirectTo) })
        // this.props.check(() => { this.props.history.push(this.props.redirectTo) })
    }

    render() {
        return null
    }
}

export default withRouter(AuthRoute)
