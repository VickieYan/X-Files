import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
// import AppBar from '../../components/AppBar/AppBar'
import { AppBar, Fiche, Slider } from '../../components/'
import { info, info2 } from '../../../static/data/info'
import styles from './Home.scss'

class Home extends Component {
    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        return (
            <div>
                <AppBar {...this.props} />
                <div className={styles.main}>
                    <Slider
                      data={info2}
                      itemWidth={210}
                      spacing={8}
                    />
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {info.map((item, index) => (
                            <Fiche
                              {... this.props}
                              key={index}
                              data={item}
                            />
                        ))}
                    </Masonry>
                </div>
            </div>
        )
    }
}

export default Home
