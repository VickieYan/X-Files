import React, { Component } from 'react'
import { Timeline } from 'antd'
// import 'antd/dist/antd.css'
import { Button } from '../../components/'
import { formatDate } from '../../scripts/utils'
import styles from './Profile.scss'

class Work extends Component {
    render() {
        const { onClick, data } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img alt="" src={data.Photograph3} />
                </div>
                <div className={styles.right}>
                    <Button
                      text="Back to home"
                      className={`${styles.btn} ${styles['btn-back']}`}
                      onClick={() => { onClick('main') }}
                    />
                    <div className={styles.timeline}>
                        <Timeline pending="to be continue...">
                            {data.Contributes.map((item, index) => (
                                <Timeline.Item key={index} color="pink">
                                    <span>From {formatDate(item.startTime)} to {formatDate(item.endTime)}</span>
                                    <h3>{item.duty}</h3>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
