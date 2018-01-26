import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import Tag from '../../components/Tag/Tag'
import styles from './Profile.scss'

class Hobbit extends Component {
    render() {
        const { onClick, data } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img alt="" src="../../../static/images/profile.jpg" />
                </div>
                <div className={`${styles.right} ${styles['right-btm']}`}>
                    <Button
                      text="Back to home"
                      className={`${styles.btn} ${styles['btn-back']}`}
                      onClick={() => { onClick('main') }}
                    />
                    <div className={styles.tags}>
                        {data.hobbies.map((item, index) => (
                            <Tag
                              key={index}
                              content={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hobbit
