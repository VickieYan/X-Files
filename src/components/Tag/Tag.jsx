import React, { Component } from 'react'
import { grey50 } from 'material-ui/styles/colors'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import { colorsA, colorsB, colorsC } from '../../../static/data/color'
import { uploadData } from '../../actions/userAction'
import styles from './Tag.scss'

@connect(
    state => state.user,
    { uploadData },
)
class Tag extends Component {
    static defaultProps = {
        clickable: true,
        colors: colorsA,
    }

    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            color: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    componentWillMount() {
        const { name, content, clickable } = this.props
        if (clickable) {
            if (!(this.props[name].indexOf(content) === -1)) {
                this.setState({ isActive: true })
            }
        }
        // this.state.color === '' ? this.setState({ color: this.getRandomColor() }) : null
        this.setState({ color: this.getRandomColor() })
    }

    getRandomColor() {
        const { colors } = this.props
        const index = Math.floor(colors.length * Math.random())
        return colors[index]
    }

    handleClick() {
        const { uploadData, name, content } = this.props
        if (!this.state.isActive) {
            uploadData({ [name]: [...this.props[name], content] })
        } else {
            const index = this.props[name].indexOf(content)
            const newArr = this.props[name].slice()
            newArr.splice(index, 1)
            uploadData({ [name]: newArr })
        }

        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {
        const { clickable } = this.props
        const { isActive, color } = this.state
        const props = {
            className: styles.chip,
            backgroundColor: isActive ? color : this.props.backgroundColor,
        }
        if (clickable) {
            props.onClick = this.handleClick
        }
        return (
            <Chip {...props}>
                {this.props.content}
            </Chip>
        )
    }
}

export default Tag
