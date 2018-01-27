import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { login } from '../../actions/userAction'
import validator from '../../scripts/validator'
import styles from './Login.scss'

@connect(
    state => state.user,
    { login },
)
class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true,
            shortName: '',
            password: '',
            isUsernameValid: null,
            isPasswordValid: null,
            isCheckPwValid: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
        }))
    }

    handleFocus(e) {
        // reset current status
        const { target } = e
        const statusType = {
            shortName: 'isUsernameValid',
            password: 'isPasswordValid',
            checkPw: 'isCheckPwValid',
        }[target.name]

        this.setState({ [statusType]: null })
    }

    handleBlur(e) {
        const { target } = e
        const text = target.value.trim()
        const { pattern } = validator[target.name]
        const isValid = pattern.test(text)
        // const value = pattern.test(text) ? text : null
        const value = pattern.test(text) ? text : text
        const statusType = {
            shortName: 'isUsernameValid',
            password: 'isPasswordValid',
            checkPw: 'isCheckPwValid',
        }[target.name]
        this.setState({
            [statusType]: isValid,
            [target.name]: target.value,
        })

        // check username and password
        if (target.name !== 'checkPw') {
            this.setState({ [e.target.name]: value })
            return
        }

        // check password is equal
        if (value !== this.state.password) {
            this.setState({ isCheckPwValid: false })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const { isUsernameValid, isPasswordValid, isCheckPwValid } = this.state
        if (isUsernameValid && isPasswordValid && isCheckPwValid) {
            // submit code here
        }
    }

    handleLogin() {
        const { shortName, password } = this.state
        // this.props.history.push('./detail')
        // console.log(`username${username}`)
        console.log()
        this.props.login({ shortName, password })
    }

    render() {
        const {
            isLogin,
            isUsernameValid,
            isPasswordValid,
            isCheckPwValid,
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
                      name="shortName"
                      className={styles.textfield}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      errorText={isUsernameValid === false && validator.shortName.errorMsg}
                      floatingLabelText="shortName"
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
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      errorText={isPasswordValid === false && validator.password.errorMsg}
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
                              name="checkPw"
                              className={styles.textfield}
                              onFocus={this.handleFocus}
                              onBlur={this.handleBlur}
                              errorText={isCheckPwValid === false && validator.checkPw.errorMsg}
                              floatingLabelText="Password"
                              floatingLabelStyle={{ top: '30px' }}
                              floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                              underlineStyle={{ borderBottom: '2px solid #adadad' }}
                              underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                            /><br />
                        </div>
                    }
                    <div className={styles['form-btn-container']} onClick={this.handleLogin}>
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
