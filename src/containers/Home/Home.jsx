import React, { Component } from 'react'
import Slider from './Slider'
import styles from './Home.scss'

class Home extends Component {
    render() {
        const data = [
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/vk.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/test.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
            {
                title: 'Dark Ranger',
                subtitle: 'Dota2',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/xiao.jpg',
            },
        ]
        return <Slider data={data} itemWidth={210} spacing={4} />
    }
}

export default Home
