import React, { Component } from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import styles from './Form.scss'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            value: this.props.text,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleClick() {
        this.setState({ isEditing: true })
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleBlur() {
        this.setState({ isEditing: false })
    }

    renderContent() {
        const { value } = this.state
        const { type, name, text } = this.props
        const groupStyle = { width: '150px', display: 'flex', flexDirection: 'row' }

        const props = {
            text: {
                name,
                autoFocus: true,
                spellCheck: false,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                defaultValue: value,
            },
            multiLine: {
                multiLine: true,
                spellCheck: false,
                row: 1,
                rowsMax: 3,
                autoFocus: true,
                name,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                defaultValue: value,
            },
        }

        if (type === 'radio') {
            return (
                <RadioButtonGroup
                  name="sex"
                  defaultSelected={text}
                  style={groupStyle}
                  onBlur={this.handleBlur}
                >
                    <RadioButton value="男" label="男" />
                    <RadioButton value="女" label="女" />
                </RadioButtonGroup>
            )
        }
        return (
            <TextField {...props[type]} />
        )
    }

    render() {
        const { isEditing, value } = this.state
        const { label } = this.props
        return (
            <form className={styles.form}>
                <h3 className={styles.label}>{label}</h3>
                <div className={styles.content}>
                    {!isEditing
                        ? (
                            <div>
                                <span className={styles.name}>{value}</span>
                                <button
                                  type="button"
                                  className={styles['modify-button']}
                                  onClick={this.handleClick}
                                >
                                    修改
                                </button>
                            </div>
                        )
                        : (
                            <div>
                                {this.renderContent()}
                            </div>
                        )
                    }
                </div>
            </form>
        )
    }
}

export default Form
