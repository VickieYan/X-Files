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
            shortName: '',
            password: '',
            isShortNameValid: null,
            isPasswordValid: null,
            passwordErrorMsg: validator.password.errorMsg,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
        }))
    }

    handleCheck() {
        const { shortName, password } = this.state
        const isShortNameValid = validator.shortName.pattern.test(shortName)
        const isPasswordValid = validator.password.pattern.test(password)
        this.setState({ isShortNameValid, isPasswordValid },
            () => {
                if (this.state.isShortNameValid && this.state.isPasswordValid) {
                    this.handleLogin(shortName, password)
                }
            },
        )
    }

    handleLogin(shortName, password) {
        this.props.login(
            { ShortName: shortName, Password: password },
            () => { this.props.history.push(this.props.redirectTo) },
        )
    }

    handleFocus(e) {
        // reset current status
        const { target } = e
        const statusType = {
            shortName: 'isShortNameValid',
            password: 'isPasswordValid',
        }[target.name]

        this.setState({ [statusType]: null })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur(e) {
        const { target } = e
        const value = this.state[target.name]
        const { pattern } = validator[target.name]
        const isValid = pattern.test(value)

        const statusType = {
            shortName: 'isShortNameValid',
            password: 'isPasswordValid',
        }[target.name]

        this.setState({ [statusType]: isValid })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.handleCheck()
    }

    render() {
        const { isShortNameValid, isPasswordValid, passwordErrorMsg } = this.state
        const action = 'Login'
        const sign = 'Please Use Your '
        const signHignlight = 'Shortname'

        return (
            <div className={styles.container}>
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
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          errorText={isShortNameValid === false && validator.shortName.errorMsg}
                          floatingLabelText="Shortname"
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
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          errorText={isPasswordValid === false && passwordErrorMsg}
                          floatingLabelText="Password"
                          floatingLabelStyle={{ top: '30px' }}
                          floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                          underlineStyle={{ borderBottom: '2px solid #adadad' }}
                          underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                        /><br />
                        <div className={styles['form-btn-container']}>
                            <div className={styles['form-btn-wrap']}>
                                <div className={styles['form-btn-bg']} />
                                <button
                                  type="submit"
                                  className={styles['form-btn']}
                                >
                                    {action}
                                </button>
                            </div>
                        </div>
                        <div className={styles['sign-wrap']}>
                            <span className={styles.sign}>{sign}<span className={styles['sign-highlight']}>{signHignlight}</span></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
