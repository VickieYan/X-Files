import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import styles from './Memorabilia.scss'

class Memorabilia extends Component {
    render() {
        return (
            <div className={styles.paper}>
                <DatePicker hintText="请选择时间" />
                <TextField
                  hintText="description"
                  multiLine
                  rows={2}
                />
            </div>
        )
    }
}

export default Memorabilia
