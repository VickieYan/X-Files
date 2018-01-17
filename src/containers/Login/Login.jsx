import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import styles from './Login.scss'

class Login extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <form className={styles.form} >
                    <span className={styles['form-title']}>NEW EGG</span>
                    <span className={styles['form-logo-wrap']}><i className={styles['form-logo']}>X</i></span>
                    <TextField
                      className={styles.textfield}
                      hintText=""
                      floatingLabelText="Email"
                    /><br />
                    <TextField
                      className={styles.textfield}
                      hintText=""
                      floatingLabelText="Password"
                    /><br />
                    <div className={styles['form-btn-container']}>
                        <div className={styles['form-btn-wrap']}>
                            <div className={styles['form-btn-bg']} />
                            <button type="submit" className={styles['form-btn']}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
