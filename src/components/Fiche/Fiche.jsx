import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import styles from './Fiche.scss'

class Fiche extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        const { isLiked } = nextProps
        this.setState({
            checked: isLiked,
        })
    }

    handleClick(e) {
        this.setState((oldState, props) => {
            if (oldState.checked) {
                props.onDisLike()
            } else {
                props.onLike()
            }
            return {
                checked: !oldState.checked,
            }
        })
        e.stopPropagation()
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
        const { onClick, showLike } = this.props
        const {
            FullName, Signature, Domain, IndexShowPhotograph, LikedNum,
            } = this.props.data
        return (
            <div className={styles.main} onClick={onClick}>
                <div className={styles.photo}>
                    <img alt="" src={IndexShowPhotograph} />
                </div>
                <div className={styles.text}>
                    <p className={styles.signature}>{Signature === '' ? '这个人很懒,什么都没留下。' : Signature}</p>
                    <div className={styles.info}>
                        <span className={styles.name}>{FullName}</span>
                        <span className={styles.department}>{Domain}</span>
                        {
                            showLike &&
                            <div className={styles['like-wrap']}>
                                <span className={styles.like}>
                                    <Checkbox
                                      checked={this.state.checked}
                                      iconStyle={mStyles.icon}
                                      checkedIcon={<ActionFavorite />}
                                      uncheckedIcon={<ActionFavoriteBorder />}
                                      style={mStyles.checkbox}
                                      onClick={this.handleClick}
                                    />
                                </span>
                                { LikedNum !== 0 && <span className={styles['like-number']}>{LikedNum}</span> }
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Fiche
