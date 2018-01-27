import React, { Component } from 'react'
import { Timeline } from 'antd'
// import 'antd/dist/antd.css'
import { Button } from '../../components/'
import styles from './Profile.scss'

class Work extends Component {
    render() {
        const { onClick, data } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img alt="" src="../../../static/images/profile.jpg" />
                </div>
                <div className={styles.right}>
                    <Button
                      text="Back to home"
                      className={`${styles.btn} ${styles['btn-back']}`}
                      onClick={() => { onClick('main') }}
                    />
                    <div className={styles.timeline}>
                        <Timeline pending="to be continue...">
                            <Timeline.Item color="pink">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Network problems being solved 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Network problems being solved 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item color="pink">Network problems being solved 2015-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
