import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import styles from './Login.scss'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true,
            username: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({ isLogin: !prevState.isLogin }))
    }

    handleBlur(e) {
        const username = e.target.value.trim()
        const pattern = /^[a-zA-Z0-9_-]{4,16}$/

        if (pattern.test(username)) {
            this.setState({ username })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const { isLogin } = this.state
        const actionText = isLogin ? 'Login' : 'Sign Up'
        const toggleText = isLogin ? 'Sign Up' : 'Login'
        const signText = isLogin ? "Don't have an account?" : 'Already have an account'
        // const errorMsg = {
        //     username: '请输入4-16位的英文短名，支持下划线',
        //     password: '密码需配合英文',
        // }
        return (
            <div className={styles.wrap}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <span className={styles['form-title']}>NEW EGG</span>
                    <span className={styles['form-logo-wrap']}><i className={styles['form-logo']}>X</i></span>
                    <TextField
                      fullWidth
                      className={styles.textfield}
                      onBlur={this.handleBlur}
                    //   errorText={username  }
                      floatingLabelText="Username"
                      floatingLabelStyle={{ top: '30px' }}
                      floatingLabelFocusStyle={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.3)', transition: 'all .4s' }}
                      underlineStyle={{ borderBottom: '2px solid #adadad' }}
                      underlineFocusStyle={{ borderBottom: '2px solid #6a7dfe' }}
                    /><br />
                    <TextField
                      fullWidth
                      type="password"
                      className={styles.textfield}
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
                              className={styles.textfield}
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
