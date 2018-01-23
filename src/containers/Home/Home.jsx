import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import AppBar from '../../components/AppBar/AppBar'
import Fiche from '../../components/Fiche/Fiche'
import styles from './Home.scss'
import info from '../../../static/data/info'

class Home extends Component {
    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        return (
            <div>
                <AppBar />
                <div className={styles.main}>
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
