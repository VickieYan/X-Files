import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import styles from './Fiche.scss'

class Fiche extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }
    handleClick() {
        this.props.history.push('./profile')
    }
    handleLike(e) {
        e.stopPropagation()
    }
    render() {
        // const mStyles = {
        //     block: {
        //       maxWidth: 250,
        //     },
        //     checkbox: {
        //       marginBottom: 16,
        //     },
        // }
        const { onClick } = this.props
        const { Cover, Signature, Department, CName } = this.props.data
        return (
            <div className={styles.main} onClick={onClick}>
                <div className={styles.photo}>
                    <img alt="" src={Cover} />
                </div>
                <div className={styles.text}>
                    <p className={styles.signature}>{Signature}</p>
                    <div className={styles.info}>
                        <span>{CName}</span>
                        <span className={styles.department}>{Department}</span>
                        {/* <span className={styles.like}>
                            <Checkbox
                              checkedIcon={<ActionFavorite />}
                              uncheckedIcon={<ActionFavoriteBorder />}
                              style={mStyles.checkbox}
                              onClick={this.handleLike}
                            />
                        </span> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Fiche
