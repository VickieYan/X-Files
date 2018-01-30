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
            isUsernameValid: null,
            isPasswordValid: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        }[target.name]

        this.setState({
            [statusType]: isValid,
            [e.target.name]: value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const { isUsernameValid, isPasswordValid, shortName, password } = this.state
        if (isUsernameValid && isPasswordValid) {
            // submit code here
            this.props.login({ ShortName: shortName, Password: password })
            // this.props.history.push(this.props.redirectTo)
            setTimeout(() => {
                this.props.history.push(this.props.redirectTo)
            }, 1000)
        }
    }

    render() {
        const { isUsernameValid, isPasswordValid } = this.state
        const action = 'Login'
        const sign = 'Please Use Your Shortname'

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
                          onBlur={this.handleBlur}
                          errorText={isUsernameValid === false && validator.shortName.errorMsg}
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
                          onFocus={this.handleFocus}
                          onBlur={this.handleBlur}
                          errorText={isPasswordValid === false && validator.password.errorMsg}
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
                                  onClick={this.handleLogin}
                                >
                                    {action}
                                </button>
                            </div>
                        </div>
                        <div className={styles['sign-wrap']}>
                            <span className={styles.sign}>{sign}</span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
