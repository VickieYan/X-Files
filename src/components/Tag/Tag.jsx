import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import styles from './Tag.scss'
// import { grey200, grey700 } from 'material-ui/styles/colors'


class Tag extends Component {
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
        return (
            <Chip
              className={styles.chip}
              onClick={this.handleClick}
              backgroundColor={this.state.isActive ? this.props.color : null}
            //   labelColor={this.state.isActive ? grey200 : grey700}
            >
                {this.props.content}
            </Chip>
        )
    }
}

export default Tag
