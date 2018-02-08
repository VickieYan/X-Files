import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import axios from 'axios'
import { AppBar, Fiche, Slider } from '../../components/'
import departments from '../../../static/data/departments'
import { sort, getUserInfo, initInfo, loadMore, updateLike } from '../../actions/infoAction'
import styles from './Like.scss'

@connect(
    state => state,
    {
 sort, getUserInfo, initInfo, loadMore, updateLike,
},
)
class Like extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likedUsers: [],
            users: [],
            msg: '',
        }
        this.currentPage = 1
        this.handleClick = this.handleClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }

    componentDidMount() {
        const { initInfo, loadMore } = this.props
        const { shortName } = this.props.user
        // 拉取用户列表
        const userList = []
        if (this.props.location.pathname === '/likeMe') {
            axios.post('/info/getGet', { query: shortName })
            .then((res) => {
                const users = res.data.data.Get
                if (users.length > 0) {
                    users.forEach((item) => {
                        axios.post('/user/info', { query: item })
                        .then((res2) => {
                            userList.push(res2.data.data)
                        })
                        .then(() => {
                            this.setState({
                                users: userList,
                            })
                        })
                    })
                } else {
                    this.setState({
                        users: [],
                    })
                }
            })
        } else {
            axios.post('/info/giveGet', { query: shortName })
            .then((res) => {
                const users = res.data.data.Give
                if (users.length > 0) {
                    users.forEach((item) => {
                        axios.post('/user/info', { query: item })
                        .then((res2) => {
                            userList.push(res2.data.data)
                        })
                        .then(() => {
                            this.setState({
                                users: userList,
                            })
                        })
                    })
                } else {
                    this.setState({
                        users: [],
                        msg: '查无此人ก็ʕ•͡ᴥ•ʔ ก้',
                    })
                }
            })
        }


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
        const { users } = this.state
        const shortName = users[index].ShortName
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
        const { sort } = this.props.info
        const { users, msg } = this.state
        return (
            <div>
                <AppBar {...this.props.info} />
                <div className={styles.main}>
                    { users.length === 0 ? msg :
                    <Masonry
                      options={masonryOptions}
                      updateOnEachImageLoad={false}
                    >
                        {users.map((item, index) => {
                          const { likedUsers } = this.state
                          return (
                              <Fiche
                                {...this.props}
                              //   likedNum={res.data.data.GetNumber}
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

export default Like
