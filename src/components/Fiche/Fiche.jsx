import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import styles from './Fiche.scss'

class Fiche extends Component {
    constructor() {
        super()
        this.handleLike = this.handleLike.bind(this)
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
        const { FullName, Signature, Domain, IndexShowPhotograph } = this.props.data
        return (
            <div className={styles.main} onClick={onClick}>
                <div className={styles.photo}>
                    <img alt="" src={IndexShowPhotograph} />
                </div>
                <div className={styles.text}>
                    <p className={styles.signature}>{Signature}</p>
                    <div className={styles.info}>
                        <span className={styles.name}>{FullName}</span>
                        <span className={styles.department}>{Domain}</span>
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
