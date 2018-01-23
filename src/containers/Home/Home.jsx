import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import AppBar from '../../components/AppBar/AppBar'
import Fiche from '../../components/Fiche/Fiche'
import Slider from '../../components/Slider/Slider'
import { info, info2 } from '../../../static/data/info'
import styles from './Home.scss'

class Home extends Component {
    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        return (
            <div>
                <AppBar />
                <div className={styles.main}>
                    <Slider data={info2} itemWidth={210} spacing={4} />
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {
                            info.map((item, index) => (
                                <Fiche
                                  key={index}
                                  data={item}
                                />
                            ))
                        }
                    </Masonry>
                </div>
            </div>
        )
    }
}

export default Home
