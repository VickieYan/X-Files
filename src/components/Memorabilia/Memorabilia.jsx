import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import styles from './Memorabilia.scss'

class Memorabilia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: new Date(),
            endTime: new Date(),
            duty: '',
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        const { onUploadData } = this.props
        const contributes = this.props.contributes.slice()
        const { startTime, endTime, duty } = this.state
        const editing = {
            startTime,
            endTime,
            duty,
        }
        contributes.push(editing)
        onUploadData({ contributes })
    }

    handleChange(type, value) {
        const { onUploadData, contributes, index } = this.props
        const newContributes = contributes.slice()

        // controled components
        this.setState({ [type]: value })

        newContributes[index][type] = value
        onUploadData({ contributes: newContributes })
    }

    renderDelButton() {
        return (
            <div className={styles['btn-wrap']}>
                <FlatButton
                  label="Delete"
                  primary
                  onClick={this.props.onDelete}
                />
            </div>
        )
    }

    renderButton() {
        const { index, onClose } = this.props
        return (
            <div className={styles['button-fields']}>
                {/* <FlatButton
                  primary
                  label="Cancel"
                  onClick={this.props.onClose}
                /> */}
                <FlatButton
                  primary
                  label="Submit"
                  onClick={index ? onClose : this.handleAdd}
                />
            </div>
        )
    }

    render() {
        const {
            style,
            startTime,
            endTime,
            text,
            hasButton,
            isDeletable,
        } = this.props
        return (
            <div className={styles.paper} style={style}>
                <DatePicker
                  hintText="请选择开始时间"
                  defaultDate={startTime || new Date()}
                  onChange={(ev, date) => { this.handleChange('startTime', date) }}
                />
                <DatePicker
                  hintText="请选择结束时间"
                  defaultDate={endTime || new Date()}
                  onChange={(ev, date) => { this.handleChange('endTime', date) }}
                />
                <TextField
                  hintText="description"
                  multiLine
                  rows={2}
                  value={text}
                  onChange={(ev, value) => { this.handleChange('duty', value) }}
                />
                {isDeletable && this.renderDelButton()}
                {hasButton && this.renderButton()}
            </div>
        )
    }
}

export default Memorabilia
