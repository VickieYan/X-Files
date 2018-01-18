import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class Step3 extends Component {
    render() {
        return (
            <div>
                <TextField
                  floatingLabelText="入职时间"
                  floatingLabelFixed
                />
            </div>
        )
    }
}

export default Step3
