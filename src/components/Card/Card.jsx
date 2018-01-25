import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Tag from '../../components/Tag/Tag'
import styles from './Card.scss'

// title:string colors:array words:array
class Card extends Component {
    constructor(props) {
        super(props)
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    getRandomColor() {
        const { colors } = this.props
        const index = Math.floor(colors.length * Math.random())
        return colors[index]
    }

    renderButton() {
        return (
            <div className={styles['button-fields']}>
                <FlatButton
                  primary
                  label="Cancel"
                  onClick={this.props.onClose}
                />
                <FlatButton
                  primary
                  label="Submit"
                  onClick={this.props.onClose}
                />
            </div>
        )
    }

    render() {
        const { style, hasButton } = this.props
        return (
            <div className={styles.paper} style={style}>
                <p>{this.props.title}</p>
                <div className={styles.chipWrapper}>
                    {
                        this.props.words.map((item, index) => (
                            <Tag
                              content={item}
                              key={index}
                              color={this.getRandomColor()}
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
