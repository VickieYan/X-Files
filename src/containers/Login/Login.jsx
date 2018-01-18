import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import validator from '../../scripts/validator'
import styles from './Login.scss'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true,
            username: '',
            password: '',
            usernameErrorMsg: '',
            passwordErrorMsg: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        // this.handleBlurUsername = this.handleBlurUsername.bind(this)
        // this.handleBlurPassword = this.handleBlurPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
            username: '',
            password: '',
            usernameErrorMsg: '',
            passwordErrorMsg: '',
        }))
    }

    // handleBlurUsername(e) {
    //     const pattern = /^[a-zA-Z0-9_-]{4,16}$/
    //     const text = e.target.value.trim()
    //     const username = pattern.test(text) ? text : null

    //     this.setState({ username })
    // }

    // handleBlurPassword(e) {
    //     console.log(e.target.value)
    //     const pattern = /^[a-zA-Z0-9_-]{4,16}$/
    //     const text = e.target.value.trim()
    //     const password = pattern.test(text) ? text : null

    //     this.setState({ password })
    // }

    handleBlur(e) {
        const { target } = e
        const text = target.value.trim()
        const { pattern } = validator[target.name]
        let { errorMsg } = validator[target.name]
        const value = pattern.test(text) ? text : null
        const msgType = { username: 'usernameErrorMsg', password: 'passwordErrorMsg' }[target.name]

        if (target.name === 'password' && value && value === this.state.password) {
            errorMsg = 'plesase check your password'
        }

        this.setState({ [e.target.name]: value, [msgType]: errorMsg })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const {
            isLogin,
            username,
            password,
            usernameErrorMsg,
            passwordErrorMsg,
        } = this.state
        const actionText = isLogin ? 'Login' : 'Sign Up'
        const toggleText = isLogin ? 'Sign Up' : 'Login'
        const signText = isLogin ? "Don't have an account?" : 'Already have an account'

        return (
            <div className={styles.wrap}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <span className={styles['form-title']}>NEW EGG</span>
                    <span className={styles['form-logo-wrap']}><i className={styles['form-logo']}>X</i></span>
                    <TextField
                      fullWidth
                      type="text"
                      name="username"
                      className={styles.textfield}
                      onBlur={this.handleBlur}
                      errorText={username === null && usernameErrorMsg}
                      floatingLabelText="Username"
                      floatingLabelStyle={{ top: '30px' }}
                      floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                      underlineStyle={{ borderBottom: '2px solid #adadad' }}
                      underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                    /><br />
                    <TextField
                      fullWidth
                      type="password"
                      name="password"
                      className={styles.textfield}
                      onBlur={this.handleBlur}
                      errorText={password === null && passwordErrorMsg}
                      floatingLabelText="Password"
                      floatingLabelStyle={{ top: '30px' }}
                      floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                      underlineStyle={{ borderBottom: '2px solid #adadad' }}
                      underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                    /><br />
                    {!isLogin &&
                        <div>
                            <TextField
                              fullWidth
                              type="password"
                              name="password"
                              className={styles.textfield}
                              onBlur={this.handleBlur}
                              errorText={password === null && passwordErrorMsg}
                              floatingLabelText="Password"
                              floatingLabelStyle={{ top: '30px' }}
                              floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                              underlineStyle={{ borderBottom: '2px solid #adadad' }}
                              underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                            /><br />
                        </div>
                    }
                    <div className={styles['form-btn-container']}>
                        <div className={styles['form-btn-wrap']}>
                            <div className={styles['form-btn-bg']} />
                            <button type="submit" className={styles['form-btn']}>{actionText}</button>
                        </div>
                    </div>
                    <div className={styles['sign-wrap']}>
                        <span className={styles.sign}>{signText}</span>
                        <button type="button" className={styles['signup-btn']} onClick={this.handleClick}>{toggleText}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
