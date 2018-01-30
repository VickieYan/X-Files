import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { login } from '../../actions/userAction'

@connect(
    state => state.user,
    { login },
)
// 检测路由
class AuthRoute extends Component {
    componentDidMount() {
        this.props.history.push(this.props.redirectTo)
    }

    render() {
        return null
    }
}

export default withRouter(AuthRoute)
