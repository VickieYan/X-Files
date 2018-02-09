import React, { Component } from 'react'
import axios from 'axios'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import { Button, Icon } from '../../components/'
import logos from '../../../static/data/logo'
import styles from './Profile.scss'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleUnLike = this.handleUnLike.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        const { shortName, data } = nextProps
        axios.post('../info/giveGet', { query: shortName })
        .then((res) => {
            if (res.data.code === 200 && res.data.data) {
                this.setState({
                    checked: res.data.data.Give.indexOf(data.ShortName) !== -1,
                })
            }
        })
    }

    handleClick(e) {
        this.setState((oldState, props) => {
            if (oldState.checked) {
                this.handleUnLike()
            } else {
                this.handleLike()
            }
            return {
                checked: !oldState.checked,
            }
        })
        e.stopPropagation()
    }

    handleLike() {
        const { updateLike, shortName } = this.props
        const { ShortName } = this.props.data
        axios.post('/info/giveGood', { from: shortName, to: ShortName })
    }

    handleUnLike() {
        const { updateLike, shortName } = this.props
        const { ShortName } = this.props.data
        axios.post('/info/deleteGood', { from: shortName, to: ShortName })
    }

    render() {
        const mStyles = {
            block: {
                maxWidth: 200,
            },
            icon: {
                fill: '#FF5252',
            },
            checkbox: {
                marginBottom: 16,
            },
        }
        const group = ['about me', 'work']
        const { data } = this.props
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <img alt="" src={data.Photograph1} />
                </div>
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <img alt="" src="../../../static/images/logo.png" />
                    </div>
                    <h4>i am {data.FullName && data.FullName.split('.')[0]}</h4>
                    <p>{data.Signature}</p>
                    <div className={styles['btn-group']}>
                        {
                            group.map((item, index) => (
                                <Button
                                  key={index}
                                  text={item}
                                  className={styles.btn}
                                  onClick={() => { this.props.onClick(item) }}
                                />
                            ))
                        }
                    </div>
                    <div className={styles['icon-group']}>
                        {
                            logos.map((item, index) => {
                                const icon = ['GitHub', 'LinkedIn', 'Twitter'][index]
                                return (
                                    <div
                                      className={styles.icon}
                                      key={index}
                                    >
                                        <Icon src={item} href={data[icon]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles['like-btn']}>
                    <Checkbox
                      checked={this.state.checked}
                      iconStyle={mStyles.icon}
                      checkedIcon={<ActionFavorite />}
                      uncheckedIcon={<ActionFavoriteBorder />}
                      style={mStyles.checkbox}
                      onClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default Main
