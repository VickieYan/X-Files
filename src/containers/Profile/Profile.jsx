import React, { Component } from 'react'
import AppBar from '../../components/AppBar/AppBar'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import styles from './Profile.scss'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name) {
        console.log(name)
    }

    render() {
        const testImgs = [
            'http://pic1.win4000.com/pic/7/55/4b82595293.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516701204885&di=1b4a8b8ae4945d54acb010f6019745b9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F16%2F20161016171724_HdSa2.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516701131383&di=2b084e06aa7a4775323a37c420f2677e&imgtype=0&src=http%3A%2F%2Ftp.codmst.com%2Fpc%2F14-16091ZU124.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516701142339&di=8583ece29dd2364750c6b6f58dd1d851&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201606%2F29%2F20160629131133_TEcfx.thumb.700_0.jpeg',
            'http://p0.ifengimg.com/pmop/2018/0107/2B10958C53F933452AAF16AA86C76B850EB0D598_size18_w466_h309.jpeg',
        ]
        const data = {
            name: 'Nana',
            signature: '我们不肯探索自己本身的价值，我们过分看重他人在自己生命里的参与。于是，孤独不再美好，失去了他人，我们惶惑不安。',
        }
        return (
            <div>
                <AppBar />
                <div className={styles.main}>
                    <div className={styles.left}>
                        <img alt="" src={testImgs[1]} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.logo}>
                            <img alt="" src="../../../static/images/logo.png" />
                        </div>
                        <h4>i am {data.name}</h4>
                        <p>{data.signature}</p>
                        <div className={styles['btn-group']}>
                            <div
                              className={styles.btn}
                              onClick={() => { this.handleClick('about') }}
                            >
                                <Button text="About" />
                            </div>
                            <div className={styles.btn}>
                                <Button text="Skill" />
                            </div>
                            <div className={styles.btn}>
                                <Button text="Work" />
                            </div>
                        </div>
                        <div className={styles['icon-group']}>
                            <div className={styles.icon}>
                                <Icon url="http://www.freepngimg.com/download/github/1-2-github-free-png-image.png" />
                            </div>
                            <div className={styles.icon}>
                                <Icon url="http://simpleicon.com/wp-content/uploads/linkedin.png" />
                            </div>
                            <div className={styles.icon}>
                                <Icon url="https://image.flaticon.com/icons/png/512/23/23931.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
