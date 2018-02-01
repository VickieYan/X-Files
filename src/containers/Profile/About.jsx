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
                            <li>{`${data.FullName}`}</li>
                            <li>{`${data.Department}`}</li>
                            <li>{`${data.Title}`}</li>
                            <li>{`${data.Hometown}`}</li>
                            <li>{`${data.PhoneNumber}`}</li>
                            <li>{`${data.Email}`}</li>
                            <li>{`${data.IsSingle ? '万年单身狗　丑拒' : '已有女票 比你漂亮'}`}</li>
                        </ul>
                    </div>
                    <div className={styles.tags}>
                        {data.Hobbies.map((item, index) => (
                            <Tag
                              name="hobbies"
                              key={index}
                              content={item}
                              clickable={false}
                            />
                            ))}
                        {data.Skills.map((item, index) => (
                            <Tag
                              name="skills"
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
