import React, { Component } from 'react'
import styles from './EditCard.scss'

class EditCard extends Component {
    render() {
        const { title } = this.props
        return (
            <div className={styles.wrap}>
                <div className={styles.head}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default EditCard
