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
        const { uploadData, name } = this.props
        const newValue = e.target.value
        console.log(newValue)
        this.setState({ value: newValue })
        uploadData({ [name]: newValue })
    }

    handleBlur() {
        this.setState({ isEditing: false })
        const {
            submitData,
            sex,
            isSingle,
            phoneNumber,
            hometown,
            signature,
            github,
            linkedin,
            twitter,
            hobbies,
            skills,
            contributes,
            department,
        } = this.props.data
        submitData({
            Sex: sex,
            IsSingle: isSingle,
            Department: department,
            PhoneNumber: phoneNumber,
            Hometown: hometown,
            Signature: signature,
            GitHub: github,
            LinkedIn: linkedin,
            Twitter: twitter,
            Hobbies: hobbies,
            Skills: skills,
            Contributes: contributes,
        })
    }

    renderContent() {
        const { value } = this.state
        const { type, name, text, options } = this.props
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
                rowsMax: 2,
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
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                >
                    {options.map((option, index) => (
                        <RadioButton key={index} value={option} label={option} />
                    ))}
                    {/* <RadioButton value="男" label="男" />
                    <RadioButton value="女" label="女" /> */}
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
            <div className={styles.form}>
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
            </div>
        )
    }
}

export default Form
