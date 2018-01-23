import React, { Component } from 'react'
import styles from './Icon.scss'

class Icon extends Component {
    render() {
        return (
            <div className={styles.main}>
                <img alt="" src={this.props.url} />
            </div>
        )
    }
}

export default Icon
