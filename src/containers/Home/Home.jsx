import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import { AppBar, Fiche, Slider } from '../../components/'
// import { info, info2 } from '../../../static/data/info'
// import members from '../../../static/data/members'
import departments from '../../../static/data/departments'
import { sort, getUserInfo, initInfo, loadMore } from '../../actions/infoAction'
import styles from './Home.scss'

@connect(
    state => state.info,
    { sort, getUserInfo, initInfo, loadMore },
)
class Home extends Component {
    constructor(props) {
        super(props)
        this.currentPage = 1
        this.handleClick = this.handleClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        // console.log(members)
        const { initInfo, loadMore } = this.props
        initInfo(1)

        // record path
        sessionStorage.setItem('route', './')

        // 检测是否触底
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        let scrollTop = 0
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // console.log(Math.floor(scrollTop) + "滑轮高度")
        // console.log(window.innerHeight + "页面当前高度")
        // console.log(document.body.scrollHeight + "总高度")
        // console.log(Math.round(scrollTop) + window.innerHeight === document.body.scrollHeight)
        if (Math.floor(scrollTop) + window.innerHeight + 1 >= document.body.scrollHeight) {
            this.props.loadMore(++this.currentPage)
        }
    }

    handleClick(index) {
        const { history, members } = this.props
        const shortName = members[index].ShortName
        history.push(`./profile/${shortName}`)
    }

    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        const { sort, members } = this.props
        return (
            <div>
                <AppBar {...this.props} showSearch />
                <div className={styles.main}>
                    <Slider
                      data={departments}
                      itemWidth={210}
                      spacing={8}
                      onSort={sort}
                    />
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {members.map((item, index) => (
                            <Fiche
                              {...this.props}
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
