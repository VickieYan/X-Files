import React, { Component } from 'react'
import Chip from 'material-ui/Chip'

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hobbies: ['历史', '旅行', '手绘']
        }
    }

    render() {
        const styles = {
            chip: {
              margin: 4,
            },
            wrapper: {
              display: 'flex',
              flexWrap: 'wrap',
            },
        }
        return (
            <div>
                {
                    this.state.hobbies.map(item => (
                        <Chip
                          style={styles.chip}
                        >
                            {item}
                        </Chip>
                    ))
                }
            </div>
        )
    }
}

export default Step2
