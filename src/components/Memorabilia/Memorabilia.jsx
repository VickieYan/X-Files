import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import styles from './Memorabilia.scss'

class Memorabilia extends Component {
    render() {
        const { style, date, text } = this.props
        return (
            <div className={styles.paper} style={style}>
                <DatePicker hintText="请选择时间" defaultDate={date} />
                <TextField
                  hintText="description"
                  multiLine
                  rows={2}
                  value={text}
                />
            </div>
        )
    }
}

export default Memorabilia
