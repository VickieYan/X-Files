import React, { Component } from 'react'
import styles from './Button.scss'

class Button extends Component {
    render() {
        return (
            <div className={styles.main}>
                {this.props.text}
            </div>
        )
    }
}

export default Button
