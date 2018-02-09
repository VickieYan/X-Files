import React, { Component } from 'react'
import { lightBlue50, pink50 } from 'material-ui/styles/colors'
import { colorsA, colorsB, colorsC } from '../../../static/data/color'
import { Button, Tag } from '../../components/'
import styles from './Profile.scss'

class About extends Component {
    constructor(props) {
        super(props)
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    getRandomColor(colors) {
        const index = Math.floor(colors.length * Math.random())
        return colors[index]
    }

    render() {
        const { onClick, data } = this.props
        const text = data.Sex === '女' ? '已有男票 比你帅' : '已有女票 比你漂亮'
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img
                      alt=""
                      src={data.Photograph2}
                    />
                </div>
                <div className={`${styles.right} ${styles.about}`}>
                    <div>
                        <Button
                          text="Back to profile"
                          className={`${styles.btn} ${styles['btn-back']}`}
                          onClick={() => { onClick('main') }}
                        />
                        <ul className={styles['info-list']}>
                            <li>{`${data.FullName}`}</li>
                            <li>{`${data.Department}`}</li>
                            <li>{`${data.Title}`}</li>
                            <li>{`${data.Hometown}`}</li>
                            <li>{`${data.PhoneNumber}`}</li>
                            <li>{`${data.School}`}</li>
                            <li>{`${data.Email}`}</li>
                            <li>{`${data.IsSingle === '是' ? '万年单身狗　丑拒' : text}`}</li>
                            {
                                data.WeChat !== '' &&
                                <li>
                                    <img className={styles.wechat} alt="" src="../../../static/images/logo/wechat.png" />
                                    {`${data.WeChat}`}
                                </li>
                            }
                        </ul>
                    </div>
                    <div className={styles.tags}>
                        {data.Hobbies.map((item, index) => (
                            <Tag
                              name="hobbies"
                              key={index}
                              content={item}
                              backgroundColor={this.getRandomColor(colorsA)}
                              clickable={false}
                            />
                            ))}
                        {data.Skills.map((item, index) => (
                            <Tag
                              name="skills"
                              key={index}
                              content={item}
                              backgroundColor={this.getRandomColor(colorsA)}
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
