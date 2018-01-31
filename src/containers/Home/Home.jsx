import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
// import AppBar from '../../components/AppBar/AppBar'
import { AppBar, Fiche, Slider } from '../../components/'
import { info, info2 } from '../../../static/data/info'
import members from '../../../static/data/members'
import departments from '../../../static/data/departments'
import styles from './Home.scss'

class Home extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log(members)
    }

    handleClick(index) {
        // members[index].ShortName 用短命向后台请求数据
        const { history } = this.props
        const shortName = members[index].ShortName
        history.push(`./profile/${shortName}`)
    }

    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        return (
            <div>
                <AppBar {...this.props} />
                <div className={styles.main}>
                    <Slider
                      data={departments}
                      itemWidth={210}
                      spacing={8}
                    />
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {members.map((item, index) => (
                            <Fiche
                              {... this.props}
                              key={index}
                              data={item}
                              onClick={() => { this.handleClick(index) }}
                            />
                        ))}
                    </Masonry>
                </div>
            </div>
        )
    }
}

export default Home
