import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import axios from 'axios'
import { AppBar, Fiche, Slider } from '../../components/'
import departments from '../../../static/data/departments'
import { sort, getUserInfo, initInfo, loadMore, updateLike } from '../../actions/infoAction'
import styles from './Home.scss'

@connect(
    state => state,
    {
 sort, getUserInfo, initInfo, loadMore, updateLike,
},
)
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likedUsers: [],
        }
        this.currentPage = 1
        this.handleClick = this.handleClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }

    componentDidMount() {
        const { initInfo, loadMore } = this.props
        // const { updateLike } = this.props
        // const { members } = this.props.info
        // const temp = members.slice()
        const initLike = () => {
            const { shortName } = this.props.user
            // 获取user点赞过的用户
            axios.post('/info/giveGet', { query: shortName })
            .then((res) => {
                console.log(members)
                members.forEach((item, index) => {
                    res.data.data.Give.indexOf(item.ShortName)
                    // members[index].isLiked = res.data.data.Give.indexOf(item.ShortName) !== -1
                    temp[index].isLiked = res.data.data.Give.indexOf(item.ShortName) !== -1
                    updateLike(temp)
                })
                // this.setState({
                //     likedUsers: res.data.data.Give,
                // })
            })
        }
        const initLikeNum = () => {
            // 获取每个用户的被赞数
            const { members } = this.props.info
            members.forEach((item, index) => {
                axios.post('/info/getNumber', { query: item.ShortName })
                .then((res) => {
                    const { members } = this.props.info
                    const { updateLike } = this.props
                    const temp = members.slice()
                    temp[index].LikedNum = res.data.data.GetNumber
                    updateLike(temp)
                })
            })
        }
        // 初始化首页
        initInfo(1, initLike, initLikeNum)
        sessionStorage.setItem('route', './')
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        let scrollTop = 0
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (Math.floor(scrollTop) + window.innerHeight + 1 >= document.body.scrollHeight) {
            this.props.loadMore(++this.currentPage)
        }
    }

    handleClick(index) {
        const { history } = this.props
        const { members } = this.props.info
        const shortName = members[index].ShortName
        history.push(`./profile/${shortName}`)
    }

    handleLike(index) {
        const { updateLike } = this.props
        const { members } = this.props.info
        const { shortName } = this.props.user
        axios.post('/info/giveGood', { from: shortName, to: members[index].ShortName })
        members[index].LikedNum++
    }

    handleDislike(index) {
        const { updateLike } = this.props
        const { members } = this.props.info
        const { shortName } = this.props.user
        axios.post('/info/deleteGood', { from: shortName, to: members[index].ShortName })
        members[index].LikedNum--
    }

    render() {
        const masonryOptions = {
            transitionDuration: 0,
        }
        const { sort } = this.props
        const { members } = this.props.info
        return (
            <div>
                <AppBar {...this.props.info} showSearch />
                <div className={styles.main}>
                    <Slider
                      data={departments}
                      itemWidth={210}
                      spacing={8}
                      onSort={sort}
                    />
                    { members.length === 0 ? '查无此人ก็ʕ•͡ᴥ•ʔ ก้' :
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {members.map((item, index) => {
                          const { likedUsers } = this.state
                          const { shortName } = this.props.user
                          return (
                              <Fiche
                                {...this.props}
                              //   likedNum={res.data.data.GetNumber}
                                showLike
                                // shortName={shortName}
                                // index={index}
                                isLiked={likedUsers.indexOf(item.ShortName) !== -1}
                                key={index}
                                data={item}
                                onClick={() => { this.handleClick(index) }}
                                onLike={() => { this.handleLike(index) }}
                                onDisLike={() => { this.handleDislike(index) }}
                              />
                          )
                      })}
                    </Masonry>
                    }

                </div>
            </div>
        )
    }
}

export default Home
