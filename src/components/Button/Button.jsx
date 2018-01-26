import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './Button.scss'

class Button extends Component {
    render() {
        const { className } = this.props
        const classes = classnames({
            [styles.main]: true,
            [className]: className,
        })
        return (
            <div
              className={classes}
              onClick={this.props.onClick}
            >
                {this.props.text}
            </div>
        )
    }
}

export default Button
