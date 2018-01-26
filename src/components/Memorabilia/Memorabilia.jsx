import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import styles from './Memorabilia.scss'

class Memorabilia extends Component {
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
    render() {
        const { style, date, text, isDeletable } = this.props
        return (
            <div className={styles.paper} style={style}>
                <DatePicker hintText="请选择时间" defaultDate={date} />
                <TextField
                  hintText="description"
                  multiLine
                  rows={2}
                  value={text}
                />
                {isDeletable && this.renderDelButton()}
            </div>
        )
    }
}

export default Memorabilia
