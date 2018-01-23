import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import styles from './Fiche.scss'

class Fiche extends Component {
    render() {
        const mStyles = {
            block: {
              maxWidth: 250,
            },
            checkbox: {
              marginBottom: 16,
            },
        }
        return (
            <div className={styles.main}>
                <div className={styles.photo}>
                    <img alt="" src={this.props.data.url} />
                </div>
                <div className={styles.text}>
                    <p className={styles.signature}>{this.props.data.signature}</p>
                    <div className={styles.info}>
                        <span>{this.props.data.cName}</span>
                        <span className={styles.department}>{this.props.data.department}</span>
                        <span className={styles.like}>
                            <Checkbox
                              checkedIcon={<ActionFavorite />}
                              uncheckedIcon={<ActionFavoriteBorder />}
                              style={mStyles.checkbox}
                            />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fiche
