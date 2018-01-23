import React, { Component } from 'react'
import styles from './Form.scss'

class Form extends Component {
    render() {
        return (
            <form className={styles['field-form']}>
                <h3 className={styles['field-label']}>{}</h3>
                <span className={styles['field-name']}>17621973154</span>
            </form>
        )
    }
}

export default Form
