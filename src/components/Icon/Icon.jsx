import React, { Component } from 'react'
import styles from './Icon.scss'

class Icon extends Component {
    render() {
        const { src, href } = this.props
        return (
            <div className={styles.main}>
                <a target="_Blank" href={href}><img alt="" src={src} /></a>
            </div>
        )
    }
}

export default Icon
