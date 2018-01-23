import React, { Component } from 'react'
import { grey800 } from 'material-ui/styles/colors'
import Slider from './Slider'

class Home extends Component {
    render() {
        const data = [
            {
                title: 'Starks',
                subtitle: 'Winter is coming',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Winterfell.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Tully',
                subtitle: 'Family Duty Honor',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Riverrun.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Targaryen',
                subtitle: 'Fire and Blood',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Kings.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Lannister',
                subtitle: 'Hear Me Roar',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Casterly.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Tyrell',
                subtitle: 'growing strong',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Highgarden.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Baratheon',
                subtitle: 'Ours Is the Fury',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Storm.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Arryn',
                subtitle: 'As High as Honor',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Eyrie.jpg',
                background: grey800,
                color: '#fff',
            },
            {
                title: 'Greyjoy',
                subtitle: 'We Do Not Sow',
                avatar: '../../../../static/images/dota.jpg',
                img: '../../../../static/images/Pyke.jpg',
                background: grey800,
                color: '#fff',
            },
        ]
        return <Slider data={data} itemWidth={210} spacing={4} />
    }
}

export default Home
