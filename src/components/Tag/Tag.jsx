import React, { Component } from 'react'
import { pink50 } from 'material-ui/styles/colors'
import Chip from 'material-ui/Chip'
import styles from './Tag.scss'

class Tag extends Component {
    static defaultProps = {
        backgroundColor: pink50,
        clickable: true,
    }
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isActive: false,
        }
    }

    handleClick() {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {
        const { clickable } = this.props
        const { isActive } = this.state
        const props = {
            className: styles.chip,
            backgroundColor: isActive ? this.props.color : this.props.backgroundColor,
        }
        if (clickable) props.onClick = this.handleClick
        return (
            <Chip {...props}>
                {this.props.content}
            </Chip>
        )
    }
}

export default Tag
