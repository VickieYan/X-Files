import React, { Component } from 'react'
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

    render() {
        return (
            <div className={styles.paper}>
                <p>{this.props.title}</p>
                <div className={styles.chipWrapper}>
                    {
                        this.props.words.map((item, index) => (
                            <Tag
                              key={index}
                              content={item}
                              color={this.getRandomColor()}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Card
