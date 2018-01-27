import React, { Component } from 'react'
import { lightBlue50 } from 'material-ui/styles/colors'
import { Button, Tag } from '../../components/'
import styles from './Profile.scss'

class About extends Component {
    render() {
        const { onClick, data } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img
                      alt=""
                      src="../../../static/images/profile.jpg"
                    />
                </div>
                <div className={`${styles.right} ${styles.about}`}>
                    <div>
                        <Button
                          text="Back to home"
                          className={`${styles.btn} ${styles['btn-back']}`}
                          onClick={() => { onClick('main') }}
                        />
                        <ul className={styles['info-list']}>
                            <li>{`${data.FullName} ${data.cName}`}</li>
                            <li>{`${data.Department}`}</li>
                            <li>{`${data.Title}`}</li>
                            <li>{`${data.hometown}`}</li>
                            <li>{`${data.phoneNumber}`}</li>
                            <li>{`${data.Email}`}</li>
                            <li>{`${data.isSingle ? '万年单身狗　丑拒' : '已有女票 比你漂亮'}`}</li>
                        </ul>
                    </div>
                    <div className={styles.tags}>
                        {data.hobbies.map((item, index) => (
                            <Tag
                              key={index}
                              content={item}
                              clickable={false}
                            />
                            ))}
                        {data.skills.map((item, index) => (
                            <Tag
                              key={index}
                              content={item}
                              backgroundColor={lightBlue50}
                              clickable={false}
                            />
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default About
