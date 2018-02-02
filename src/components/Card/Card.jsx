import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Tag from '../../components/Tag/Tag'
import styles from './Card.scss'

// name:string title:string colors:array words:array
class Card extends Component {
    renderButton() {
        return (
            <div className={styles['button-fields']}>
                <FlatButton
                  primary
                  label="Submit"
                  onClick={this.props.onClose}
                />
            </div>
        )
    }
    render() {
        const {
            style,
            hasButton,
            name,
            colors,
        } = this.props
        return (
            <div className={styles.paper} style={style}>
                <p>{this.props.title}</p>
                <div className={styles.chipWrapper}>
                    {
                        this.props.words.map((item, index) => (
                            <Tag
                              key={index}
                              name={name}
                              content={item}
                              colors={colors}
                            />
                        ))
                    }
                    {hasButton && this.renderButton()}
                </div>
            </div>
        )
    }
}

export default Card
