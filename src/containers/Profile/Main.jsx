import React, { Component } from 'react'
import { Button, Icon } from '../../components/'
import logos from '../../../static/data/logo'
import styles from './Profile.scss'

class Main extends Component {
    render() {
        const data = {
            name: 'Nana',
            signature: '我们不肯探索自己本身的价值，我们过分看重他人在自己生命里的参与。于是，孤独不再美好，失去了他人，我们惶惑不安。',
        }
        const group = ['about', 'work']
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img alt="" src="../../../static/images/profile.jpg" />
                </div>
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <img alt="" src="../../../static/images/logo.png" />
                    </div>
                    <h4>i am {data.name}</h4>
                    <p>{data.signature}</p>
                    <div className={styles['btn-group']}>
                        {
                            group.map((item, index) => (
                                <Button
                                  key={index}
                                  text={item}
                                  className={styles.btn}
                                  onClick={() => { this.props.onClick(item) }}
                                />
                            ))
                        }
                    </div>
                    <div className={styles['icon-group']}>
                        {
                            logos.map((item, index) => (
                                <div
                                  className={styles.icon}
                                  key={index}
                                >
                                    <Icon url={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
