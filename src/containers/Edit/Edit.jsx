import React, { Component } from 'react'
import styles from './Edit.scss'
import AppBar from '../../components/AppBar/AppBar'

class Edit extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <AppBar />
                <div className={styles.main}>
                    <div className={styles.info}>
                        <div className={styles.head}>
                            <h2 className={styles.title}>Public profile</h2>
                        </div>
                        <div className={styles.fields}>
                            <form className={styles['field-form']}>
                                <h3 className={styles['field-label']}>手机号码</h3>
                                <span className={styles['field-name']}>17621973154</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit
